/*!
 * AIHubTools / 智汇工具 - Public i18n module
 * Usage:
 * 1) Add <html data-lang="zh">
 * 2) Add <meta name="i18n-page" content="your-page-slug">
 * 3) Add <script src="../assets/js/i18n.js" defer></script>
 * 4) Mark text with data-i18n="key"
 */
(function () {
  "use strict";

  const CONFIG = {
    supportedLangs: ["zh", "en", "ja"],
    defaultLang: "zh",
    storageKey: "aih_lang",
    commonDictPath: "assets/i18n/common.json",
    pageDictDir: "assets/i18n/pages/"
  };

  function getScriptBasePath() {
    const scripts = Array.from(document.getElementsByTagName("script"));
    const current = document.currentScript || scripts.find(s => (s.src || "").includes("/assets/js/i18n.js"));

    if (current && current.src) {
      try {
        const url = new URL(current.src, window.location.href);
        return url.pathname.replace(/assets\/js\/i18n\.js.*$/, "");
      } catch (e) {}
    }

    const path = window.location.pathname;
    const marker = "/AIHubTools/";
    if (path.includes(marker)) return path.split(marker)[0] + marker;

    return "/";
  }

  function normalizeLang(lang) {
    if (!lang) return "";
    const clean = String(lang).toLowerCase().trim();

    if (clean.startsWith("zh")) return "zh";
    if (clean.startsWith("en")) return "en";
    if (clean.startsWith("ja") || clean.startsWith("jp")) return "ja";

    return CONFIG.supportedLangs.includes(clean) ? clean : "";
  }

  function getUrlLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      return normalizeLang(params.get("lang"));
    } catch (e) {
      return "";
    }
  }

  function getBrowserLang() {
    return normalizeLang(navigator.language || (navigator.languages && navigator.languages[0]));
  }

  function getCurrentLang() {
    const urlLang = getUrlLang();
    if (urlLang) {
      localStorage.setItem(CONFIG.storageKey, urlLang);
      return urlLang;
    }

    const saved = normalizeLang(localStorage.getItem(CONFIG.storageKey));
    if (saved) return saved;

    const htmlLang = normalizeLang(document.documentElement.getAttribute("data-lang"));
    if (htmlLang) return htmlLang;

    return CONFIG.defaultLang;
  }

  async function loadJson(path) {
    try {
      const res = await fetch(path, { cache: "no-cache" });
      if (!res.ok) {
        console.warn("[AIHubTools i18n] Dict not found:", path);
        return {};
      }
      return await res.json();
    } catch (err) {
      console.warn("[AIHubTools i18n] Failed to load:", path, err);
      return {};
    }
  }

  function getValue(dict, key, lang) {
    const item = dict[key];
    if (!item) return null;

    if (typeof item === "string") return item;
    if (item[lang]) return item[lang];
    if (item[CONFIG.defaultLang]) return item[CONFIG.defaultLang];

    const first = Object.values(item).find(Boolean);
    return first || null;
  }

  function setDocumentLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
  }

  function applyText(dict, lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = getValue(dict, key, lang);
      if (value !== null) el.textContent = value;
    });
  }

  function applyHtml(dict, lang) {
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const value = getValue(dict, key, lang);
      if (value !== null) el.innerHTML = value;
    });
  }

  function applyAttributes(dict, lang) {
    const attrMap = {
      "data-i18n-placeholder": "placeholder",
      "data-i18n-title": "title",
      "data-i18n-alt": "alt",
      "data-i18n-aria-label": "aria-label",
      "data-i18n-content": "content"
    };

    Object.entries(attrMap).forEach(([dataAttr, realAttr]) => {
      document.querySelectorAll("[" + dataAttr + "]").forEach(el => {
        const key = el.getAttribute(dataAttr);
        const value = getValue(dict, key, lang);
        if (value !== null) el.setAttribute(realAttr, value);
      });
    });
  }

  function applyDocumentMeta(dict, lang) {
    const titleKey = document.querySelector('meta[name="i18n-title"]')?.getAttribute("content");
    const descKey = document.querySelector('meta[name="i18n-description"]')?.getAttribute("content");

    if (titleKey) {
      const title = getValue(dict, titleKey, lang);
      if (title) document.title = title;
    }

    if (descKey) {
      const desc = getValue(dict, descKey, lang);
      if (desc) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("name", "description");
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", desc);
      }
    }
  }

  function updateLanguageControls(lang) {
    document.querySelectorAll("[data-set-lang]").forEach(el => {
      const targetLang = normalizeLang(el.getAttribute("data-set-lang"));
      const active = targetLang === lang;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll("select[data-lang-select]").forEach(select => {
      if (select.value !== lang) select.value = lang;
    });
  }

  function applyI18n(dict, lang) {
    setDocumentLang(lang);
    applyText(dict, lang);
    applyHtml(dict, lang);
    applyAttributes(dict, lang);
    applyDocumentMeta(dict, lang);
    updateLanguageControls(lang);

    window.dispatchEvent(new CustomEvent("aih:i18n-change", {
      detail: { lang, dict }
    }));
  }

  async function initI18n() {
    const basePath = getScriptBasePath();
    const lang = getCurrentLang();

    const pageName = document.querySelector('meta[name="i18n-page"]')?.getAttribute("content")?.trim();

    const commonPath = basePath + CONFIG.commonDictPath;
    const pagePath = pageName ? basePath + CONFIG.pageDictDir + pageName + ".json" : "";

    const commonDict = await loadJson(commonPath);
    const pageDict = pagePath ? await loadJson(pagePath) : {};
    const dict = Object.assign({}, commonDict, pageDict);

    window.AIH_I18N = {
      dict,
      lang,
      setLang: function (newLang) {
        const clean = normalizeLang(newLang);
        if (!clean || !CONFIG.supportedLangs.includes(clean)) return;
        localStorage.setItem(CONFIG.storageKey, clean);
        this.lang = clean;
        applyI18n(this.dict, clean);
      },
      getLang: function () {
        return this.lang;
      }
    };

    applyI18n(dict, lang);

    document.querySelectorAll("[data-set-lang]").forEach(el => {
      el.addEventListener("click", function () {
        window.AIH_I18N.setLang(this.getAttribute("data-set-lang"));
      });
    });

    document.querySelectorAll("select[data-lang-select]").forEach(select => {
      select.addEventListener("change", function () {
        window.AIH_I18N.setLang(this.value);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();

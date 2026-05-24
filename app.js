'use strict';

const DATA_URL = './tools-data.json';
const DEFAULT_LANG = 'zh';
const SUPPORTED_LANGS = ['zh', 'en', 'ja'];

const UI_TEXT = {
  zh: {
    brandSub: '智汇工具',
    navTools: '工具',
    navAbout: '关于',
    navPrivacy: '隐私政策',
    navContact: '联系',
    eyebrow: 'AI 工具导航 · 在线工具 · 开源替代',
    heroTitle: '发现实用的 AI 工具和免费在线工具',
    heroText: 'AIHubTools 汇集 AI 聊天、写作、设计、编程、PDF、办公效率和开源替代工具，支持多语言浏览。',
    exploreBtn: '开始浏览',
    totalTools: '个工具',
    categories: '个分类',
    featuredTools: '个推荐',
    directoryLabel: 'Tools Directory',
    toolsTitle: '工具列表',
    searchLabel: '搜索工具',
    searchPlaceholder: '搜索工具、分类、标签...',
    allCategories: '全部分类',
    allTypes: '全部类型',
    featuredOnly: '只看推荐',
    aboutTitle: '关于 AIHubTools',
    aboutText: 'AIHubTools 是一个面向学习、工作和创作场景的多语言 AI 工具导航网站。我们整理实用的 AI 聊天、写作、设计、编程、PDF、办公效率和开源替代工具，并提供清晰的分类、简介、访问入口和多语言浏览体验，帮助用户更快找到合适的工具。',
    aboutDetailEyebrow: 'AI 工具导航说明',
    aboutDetailTitle: '关于 AIHubTools',
    aboutDetailP1: 'AIHubTools 是一个专注于 AI 工具发现、整理和推荐的多语言导航网站，旨在帮助用户快速找到适合自己工作、学习、创作和日常效率提升的人工智能工具。无论你需要 AI 聊天助手、写作工具、图片生成工具、视频创作工具、编程助手、办公自动化工具，还是开源替代软件，AIHubTools 都希望为你提供一个清晰、简洁、方便访问的入口。',
    aboutDetailP2: '随着 AI 技术快速发展，新的工具每天都在出现。很多用户在搜索工具时，经常会遇到信息分散、介绍不清楚、网站难以比较等问题。AIHubTools 通过分类整理、关键词搜索、多语言介绍和工具详情展示，帮助用户更高效地了解每个工具的用途、特点、适合人群和访问方式。',
    aboutDetailP3: '本网站收录的工具覆盖 AI 聊天、文本写作、图片设计、视频生成、语音处理、代码开发、效率办公、学习研究、营销运营、开源项目等多个方向。用户可以根据分类筛选，也可以直接搜索工具名称或关键词，快速找到需要的服务。',
    aboutDetailP4: 'AIHubTools 支持中文、英文和日文界面，适合不同语言背景的用户使用。网站采用轻量级设计，支持手机和电脑访问，不需要安装应用，也不需要复杂操作。我们的目标是让更多人能够轻松了解 AI 工具，并把这些工具真正应用到学习、工作和生活中。',
    aboutDetailP5: '需要注意的是，AIHubTools 是一个工具导航和信息整理网站。网站本身不直接提供第三方工具的核心服务，也不代表这些工具的官方立场。用户在访问第三方网站时，应自行查看其服务条款、隐私政策、价格说明和使用限制，并根据自己的需求谨慎选择。',
    aboutDetailP6: '未来，AIHubTools 将持续更新更多实用 AI 工具、免费在线工具和开源替代方案，并不断优化分类、搜索和多语言内容，为用户提供更加完整、可靠、易用的 AI 工具导航体验。',
    adLabel: '广告',
    privacyLink: '隐私政策',
    termsLink: '使用条款',
    contactLink: '联系',
    footerText: '智汇工具',
    loading: '正在加载工具数据...',
    loadError: '没有读取到 tools-data.json，正在显示内置示例数据。请确认文件已上传到 GitHub 根目录。',
    noResults: '没有找到匹配的工具。',
    visit: '访问官网',
    details: '详情',
    featured: '推荐',
    active: 'Active',
    pricing: '价格页面',
    source: '来源',
    category: '分类',
    type: '类型',
    status: '状态',
    tags: '标签'
  },
  en: {
    brandSub: 'AI Tools Directory',
    navTools: 'Tools',
    navAbout: 'About',
    navPrivacy: 'Privacy',
    navContact: 'Contact',
    eyebrow: 'AI tools · Online tools · Open-source alternatives',
    heroTitle: 'Discover useful AI tools and free online tools',
    heroText: 'AIHubTools collects AI chat, writing, design, coding, PDF, productivity, and open-source alternative tools with multilingual browsing.',
    exploreBtn: 'Explore tools',
    totalTools: 'tools',
    categories: 'categories',
    featuredTools: 'featured',
    directoryLabel: 'Tools Directory',
    toolsTitle: 'Tools list',
    searchLabel: 'Search tools',
    searchPlaceholder: 'Search tools, categories, tags...',
    allCategories: 'All categories',
    allTypes: 'All types',
    featuredOnly: 'Featured only',
    aboutTitle: 'About AIHubTools',
    aboutText: 'AIHubTools is a multilingual AI tools directory for learning, work, and creative tasks. We organize useful AI chat, writing, design, coding, PDF, productivity, and open-source alternative tools with clear categories, descriptions, official links, and multilingual browsing.',
    aboutDetailEyebrow: 'AI tools directory guide',
    aboutDetailTitle: 'About AIHubTools',
    aboutDetailP1: 'AIHubTools is a multilingual directory focused on discovering, organizing, and recommending useful AI tools. It helps users quickly find artificial intelligence tools for work, study, creativity, productivity, and everyday tasks. Whether you need AI chatbots, writing tools, image generators, video creation tools, coding assistants, office automation tools, or open-source alternatives, AIHubTools provides a clear and convenient starting point.',
    aboutDetailP2: 'As AI technology develops rapidly, new tools appear every day. Users often face scattered information, unclear descriptions, and difficulty comparing different websites. AIHubTools organizes tools by category, search keywords, multilingual descriptions, and tool details, helping users understand what each tool does and how it may fit their needs.',
    aboutDetailP3: 'The website covers many categories, including AI chat, writing, image design, video generation, voice processing, coding, productivity, learning, research, marketing, operations, and open-source projects. Users can filter by category or search directly by tool name and keywords.',
    aboutDetailP4: 'AIHubTools supports Chinese, English, and Japanese interfaces. It is designed to work smoothly on both mobile devices and desktop computers. No app installation or complicated setup is required. Our goal is to make AI tools easier to discover, understand, and use in real life.',
    aboutDetailP5: 'Please note that AIHubTools is an information directory and navigation website. It does not directly provide the core services of third-party tools and does not represent the official position of those tools. Users should review each third-party website’s terms, privacy policy, pricing, and usage limits before using its services.',
    aboutDetailP6: 'In the future, AIHubTools will continue to add more practical AI tools, free online tools, and open-source alternatives while improving categories, search, and multilingual content to provide a more complete and user-friendly AI tools directory.',
    adLabel: 'Advertisement',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms',
    contactLink: 'Contact',
    footerText: 'AI Tools Directory',
    loading: 'Loading tools data...',
    loadError: 'tools-data.json was not found. Showing built-in sample data. Please upload the file to the GitHub repository root.',
    noResults: 'No matching tools found.',
    visit: 'Visit website',
    details: 'Details',
    featured: 'Featured',
    active: 'Active',
    pricing: 'Pricing',
    source: 'Source',
    category: 'Category',
    type: 'Type',
    status: 'Status',
    tags: 'Tags'
  },
  ja: {
    brandSub: 'AIツールナビ',
    navTools: 'ツール',
    navAbout: '概要',
    navPrivacy: 'プライバシー',
    navContact: 'お問い合わせ',
    eyebrow: 'AIツール · オンラインツール · オープンソース代替',
    heroTitle: '便利なAIツールと無料オンラインツールを発見',
    heroText: 'AIHubToolsは、AIチャット、文章作成、デザイン、コーディング、PDF、効率化、オープンソース代替ツールを多言語で紹介します。',
    exploreBtn: 'ツールを見る',
    totalTools: 'ツール',
    categories: 'カテゴリ',
    featuredTools: 'おすすめ',
    directoryLabel: 'Tools Directory',
    toolsTitle: 'ツール一覧',
    searchLabel: 'ツール検索',
    searchPlaceholder: 'ツール、カテゴリ、タグを検索...',
    allCategories: 'すべてのカテゴリ',
    allTypes: 'すべてのタイプ',
    featuredOnly: 'おすすめのみ',
    aboutTitle: 'AIHubToolsについて',
    aboutText: 'AIHubToolsは、学習・仕事・クリエイティブ作業に役立つ多言語AIツールナビサイトです。AIチャット、文章作成、デザイン、コーディング、PDF、効率化、オープンソース代替ツールを分類し、説明、公式リンク、多言語表示で探しやすく紹介します。',
    aboutDetailEyebrow: 'AIツールナビガイド',
    aboutDetailTitle: 'AIHubTools について',
    aboutDetailP1: 'AIHubTools は、便利な AI ツールを発見・整理・紹介する多言語対応のナビゲーションサイトです。仕事、学習、創作、日常の効率化に役立つ人工知能ツールを素早く見つけられるように設計されています。AI チャット、文章作成、画像生成、動画制作、プログラミング支援、業務効率化、オープンソース代替ツールなどを探す際の分かりやすい入口になります。',
    aboutDetailP2: 'AI 技術の発展により、新しいツールは日々増えています。しかし、情報が分散していたり、説明が分かりにくかったり、複数のサービスを比較しにくいことがあります。AIHubTools は、カテゴリ分類、キーワード検索、多言語説明、ツール詳細を通じて、各ツールの用途や特徴を理解しやすくします。',
    aboutDetailP3: '本サイトでは、AI チャット、文章作成、画像デザイン、動画生成、音声処理、コード開発、業務効率化、学習、研究、マーケティング、オープンソースプロジェクトなど、さまざまな分野のツールを掲載しています。カテゴリで絞り込んだり、ツール名やキーワードで検索したりできます。',
    aboutDetailP4: 'AIHubTools は中国語、英語、日本語に対応しており、スマートフォンとパソコンの両方で快適に利用できます。アプリのインストールや複雑な設定は不要です。より多くの人が AI ツールを簡単に理解し、実際の仕事や生活に活用できることを目指しています。',
    aboutDetailP5: 'AIHubTools はツール情報を整理するナビゲーションサイトです。第三者ツールの主要サービスを直接提供するものではなく、それらの公式見解を代表するものでもありません。各サービスを利用する前に、利用規約、プライバシーポリシー、料金、利用制限を確認してください。',
    aboutDetailP6: '今後も AIHubTools は、実用的な AI ツール、無料オンラインツール、オープンソース代替サービスを継続的に追加し、カテゴリ、検索、多言語コンテンツを改善していきます。',
    adLabel: '広告',
    privacyLink: 'プライバシーポリシー',
    termsLink: '利用規約',
    contactLink: 'お問い合わせ',
    footerText: 'AIツールナビ',
    loading: 'ツールデータを読み込み中...',
    loadError: 'tools-data.jsonが見つかりません。内蔵サンプルを表示しています。GitHubのルートにファイルをアップロードしてください。',
    noResults: '一致するツールがありません。',
    visit: '公式サイト',
    details: '詳細',
    featured: 'おすすめ',
    active: 'Active',
    pricing: '料金ページ',
    source: 'ソース',
    category: 'カテゴリ',
    type: 'タイプ',
    status: 'ステータス',
    tags: 'タグ'
  }
};

const FALLBACK_TOOLS = [
  {
    slug: 'chatgpt',
    website: 'https://chatgpt.com/',
    featured: true,
    status: 'Active',
    pricing_url: 'https://openai.com/chatgpt/pricing/',
    source_url: 'https://chatgpt.com/',
    i18n: {
      zh: { name: 'ChatGPT', category: 'AI聊天', type: '免费增值', description: 'OpenAI 推出的 AI 聊天助手，适合写作、学习、编程、办公和资料整理。', tags: 'AI聊天,写作,编程' },
      en: { name: 'ChatGPT', category: 'AI Chat', type: 'Freemium', description: 'AI chatbot by OpenAI for writing, learning, coding, productivity, and research.', tags: 'AI chat,writing,coding' },
      ja: { name: 'ChatGPT', category: 'AIチャット', type: 'フリーミアム', description: 'OpenAIのAIチャットボット。文章作成、学習、プログラミング、仕事効率化、資料整理に便利。', tags: 'AIチャット,文章作成,コーディング' }
    }
  },
  {
    slug: 'photopea',
    website: 'https://www.photopea.com/',
    featured: true,
    status: 'Active',
    source_url: 'https://www.photopea.com/',
    i18n: {
      zh: { name: 'Photopea', category: '设计', type: '免费', description: '免费在线 Photoshop 替代工具，支持 PSD、图片编辑和网页端设计。', tags: '设计,图片编辑,PSD' },
      en: { name: 'Photopea', category: 'Design', type: 'Free', description: 'Free online Photoshop alternative with PSD support and browser-based image editing.', tags: 'design,image editing,PSD' },
      ja: { name: 'Photopea', category: 'デザイン', type: '無料', description: 'PSD編集に対応した無料オンラインPhotoshop代替ツール。', tags: 'デザイン,画像編集,PSD' }
    }
  }
];

const state = {
  lang: normalizeLang(localStorage.getItem('aihubtools_lang') || DEFAULT_LANG),
  tools: [],
  query: '',
  category: 'all',
  type: 'all',
  featuredOnly: false
};

const els = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  setupEvents();
  setLanguage(state.lang, false);
  document.getElementById('year').textContent = new Date().getFullYear();
  loadTools();
});

function cacheElements() {
  els.languageSelect = document.getElementById('languageSelect');
  els.searchInput = document.getElementById('searchInput');
  els.categoryFilter = document.getElementById('categoryFilter');
  els.typeFilter = document.getElementById('typeFilter');
  els.featuredToggle = document.getElementById('featuredToggle');
  els.toolsGrid = document.getElementById('toolsGrid');
  els.statusMessage = document.getElementById('statusMessage');
  els.totalCount = document.getElementById('totalCount');
  els.categoryCount = document.getElementById('categoryCount');
  els.featuredCount = document.getElementById('featuredCount');
  els.dialog = document.getElementById('toolDialog');
  els.dialogContent = document.getElementById('dialogContent');
  els.dialogClose = document.getElementById('dialogClose');
}

function setupEvents() {
  els.languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
  els.searchInput.addEventListener('input', (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderTools();
  });
  els.categoryFilter.addEventListener('change', (event) => {
    state.category = event.target.value;
    renderTools();
  });
  els.typeFilter.addEventListener('change', (event) => {
    state.type = event.target.value;
    renderTools();
  });
  els.featuredToggle.addEventListener('click', () => {
    state.featuredOnly = !state.featuredOnly;
    els.featuredToggle.classList.toggle('active', state.featuredOnly);
    renderTools();
  });
  els.dialogClose.addEventListener('click', () => closeDialog());
  els.dialog.addEventListener('click', (event) => {
    if (event.target === els.dialog) closeDialog();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && els.dialog.open) closeDialog();
  });
}

async function loadTools() {
  setStatus(t('loading'));
  try {
    const response = await fetch(`${DATA_URL}?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.tools = normalizeTools(Array.isArray(data) ? data : []);
    if (!state.tools.length) throw new Error('Empty tools data');
    setStatus('');
  } catch (error) {
    console.warn('AIHubTools data load failed:', error);
    state.tools = normalizeTools(FALLBACK_TOOLS);
    setStatus(t('loadError'));
  }
  populateFilters();
  updateStats();
  renderTools();
}

function normalizeTools(rawTools) {
  return rawTools
    .filter(Boolean)
    .map((tool, index) => {
      const normalized = { ...tool };
      normalized.slug = clean(tool.slug) || slugify(clean(tool.name) || clean(tool.name_en) || clean(tool.name_zh) || `tool-${index + 1}`);
      normalized.website = clean(tool.website || tool.url || tool.source_url);
      normalized.featured = toBoolean(tool.featured);
      normalized.status = clean(tool.status || 'Active');
      normalized.pricing_url = clean(tool.pricing_url || tool.pricingUrl);
      normalized.logo_url = clean(tool.logo_url || tool.logoUrl || tool.logo);
      normalized.source_url = clean(tool.source_url || tool.sourceUrl || tool.website);
      normalized.updated_at = clean(tool.updated_at || tool.updatedAt);
      normalized.i18n = normalizeI18n(tool);
      return normalized;
    })
    .filter((tool) => getField(tool, 'name') || tool.website);
}

function normalizeI18n(tool) {
  const source = tool.i18n && typeof tool.i18n === 'object' ? tool.i18n : {};
  const i18n = {};
  for (const lang of SUPPORTED_LANGS) {
    const nested = source[lang] || {};
    i18n[lang] = {
      name: clean(nested.name || tool[`name_${lang}`] || tool.name),
      category: clean(nested.category || tool[`category_${lang}`] || tool.category),
      type: clean(nested.type || tool[`type_${lang}`] || tool.type),
      description: clean(nested.description || tool[`description_${lang}`] || tool.description),
      tags: normalizeTags(nested.tags || tool[`tags_${lang}`] || tool.tags)
    };
  }
  return i18n;
}

function setLanguage(lang, shouldRender = true) {
  state.lang = normalizeLang(lang);
  localStorage.setItem('aihubtools_lang', state.lang);
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : state.lang;
  els.languageSelect.value = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    node.textContent = t(key);
  });
  els.searchInput.placeholder = t('searchPlaceholder');
  if (shouldRender) {
    populateFilters();
    updateStats();
    renderTools();
  }
}

function populateFilters() {
  const currentCategory = state.category;
  const currentType = state.type;
  const categories = uniqueSorted(state.tools.map((tool) => getField(tool, 'category')).filter(Boolean));
  const types = uniqueSorted(state.tools.map((tool) => getField(tool, 'type')).filter(Boolean));

  els.categoryFilter.innerHTML = `<option value="all">${escapeHtml(t('allCategories'))}</option>` +
    categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join('');
  els.typeFilter.innerHTML = `<option value="all">${escapeHtml(t('allTypes'))}</option>` +
    types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');

  state.category = categories.includes(currentCategory) ? currentCategory : 'all';
  state.type = types.includes(currentType) ? currentType : 'all';
  els.categoryFilter.value = state.category;
  els.typeFilter.value = state.type;
}

function updateStats() {
  const categories = new Set(state.tools.map((tool) => getField(tool, 'category')).filter(Boolean));
  els.totalCount.textContent = String(state.tools.length);
  els.categoryCount.textContent = String(categories.size);
  els.featuredCount.textContent = String(state.tools.filter((tool) => tool.featured).length);
}

function renderTools() {
  const tools = getFilteredTools();
  if (!tools.length) {
    els.toolsGrid.innerHTML = `<div class="empty-state">${escapeHtml(t('noResults'))}</div>`;
    return;
  }
  els.toolsGrid.innerHTML = tools.map(renderToolCard).join('');
  els.toolsGrid.querySelectorAll('[data-detail-slug]').forEach((button) => {
    button.addEventListener('click', () => openToolDialog(button.getAttribute('data-detail-slug')));
  });
}

function getFilteredTools() {
  return state.tools.filter((tool) => {
    const name = getField(tool, 'name');
    const category = getField(tool, 'category');
    const type = getField(tool, 'type');
    const description = getField(tool, 'description');
    const tags = getTags(tool).join(' ');
    const haystack = `${name} ${category} ${type} ${description} ${tags} ${tool.slug}`.toLowerCase();
    const queryMatch = !state.query || haystack.includes(state.query);
    const categoryMatch = state.category === 'all' || category === state.category;
    const typeMatch = state.type === 'all' || type === state.type;
    const featuredMatch = !state.featuredOnly || tool.featured;
    return queryMatch && categoryMatch && typeMatch && featuredMatch;
  });
}

function renderToolCard(tool) {
  const name = getField(tool, 'name') || tool.slug;
  const category = getField(tool, 'category');
  const type = getField(tool, 'type');
  const description = getField(tool, 'description');
  const tags = getTags(tool).slice(0, 4);
  const initial = name.trim().slice(0, 1).toUpperCase() || 'T';
  const statusClass = /inactive|disabled|off|停用|非活性/i.test(tool.status) ? 'inactive' : 'status';

  return `
    <article class="tool-card">
      <div class="tool-top">
        <div class="tool-logo">${tool.logo_url ? `<img src="${escapeAttr(tool.logo_url)}" alt="${escapeAttr(name)} logo" loading="lazy" onerror="this.remove();">` : escapeHtml(initial)}</div>
        <div class="badges">
          ${tool.featured ? `<span class="badge featured">★ ${escapeHtml(t('featured'))}</span>` : ''}
          ${tool.status ? `<span class="badge ${statusClass}">${escapeHtml(tool.status)}</span>` : ''}
        </div>
      </div>
      <h3>${escapeHtml(name)}</h3>
      <div class="dialog-meta">
        ${category ? `<span class="badge">${escapeHtml(category)}</span>` : ''}
        ${type ? `<span class="badge">${escapeHtml(type)}</span>` : ''}
      </div>
      <p class="tool-desc">${escapeHtml(description || '')}</p>
      ${tags.length ? `<div class="tag-list">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      <div class="card-actions">
        ${tool.website ? `<a class="btn primary" href="${escapeAttr(tool.website)}" target="_blank" rel="noopener nofollow">${escapeHtml(t('visit'))}</a>` : ''}
        <button class="btn ghost" type="button" data-detail-slug="${escapeAttr(tool.slug)}">${escapeHtml(t('details'))}</button>
      </div>
    </article>
  `;
}

function openToolDialog(slug) {
  const tool = state.tools.find((item) => item.slug === slug);
  if (!tool) return;
  const name = getField(tool, 'name') || tool.slug;
  const category = getField(tool, 'category');
  const type = getField(tool, 'type');
  const description = getField(tool, 'description');
  const tags = getTags(tool);

  els.dialogContent.innerHTML = `
    <div class="dialog-body">
      <div class="tool-logo">${tool.logo_url ? `<img src="${escapeAttr(tool.logo_url)}" alt="${escapeAttr(name)} logo" loading="lazy">` : escapeHtml(name.slice(0, 1).toUpperCase())}</div>
      <h2>${escapeHtml(name)}</h2>
      <div class="dialog-meta">
        ${category ? `<span class="badge"><strong>${escapeHtml(t('category'))}:</strong> ${escapeHtml(category)}</span>` : ''}
        ${type ? `<span class="badge"><strong>${escapeHtml(t('type'))}:</strong> ${escapeHtml(type)}</span>` : ''}
        ${tool.status ? `<span class="badge status"><strong>${escapeHtml(t('status'))}:</strong> ${escapeHtml(tool.status)}</span>` : ''}
        ${tool.featured ? `<span class="badge featured">★ ${escapeHtml(t('featured'))}</span>` : ''}
      </div>
      <p>${escapeHtml(description || '')}</p>
      ${tags.length ? `<h3>${escapeHtml(t('tags'))}</h3><div class="tag-list">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      <div class="dialog-links">
        ${tool.website ? `<a class="btn primary" href="${escapeAttr(tool.website)}" target="_blank" rel="noopener nofollow">${escapeHtml(t('visit'))}</a>` : ''}
        ${tool.pricing_url ? `<a class="btn ghost" href="${escapeAttr(tool.pricing_url)}" target="_blank" rel="noopener nofollow">${escapeHtml(t('pricing'))}</a>` : ''}
        ${tool.source_url ? `<a class="btn ghost" href="${escapeAttr(tool.source_url)}" target="_blank" rel="noopener nofollow">${escapeHtml(t('source'))}</a>` : ''}
      </div>
    </div>
  `;
  els.dialog.showModal();
  document.body.classList.add('no-scroll');
}

function closeDialog() {
  els.dialog.close();
  document.body.classList.remove('no-scroll');
}

function getField(tool, field) {
  return clean(tool.i18n?.[state.lang]?.[field]) ||
    clean(tool.i18n?.en?.[field]) ||
    clean(tool.i18n?.zh?.[field]) ||
    clean(tool[field]);
}

function getTags(tool) {
  return normalizeTags(tool.i18n?.[state.lang]?.tags || tool.i18n?.en?.tags || tool.tags);
}

function normalizeTags(value) {
  if (Array.isArray(value)) return value.map(clean).filter(Boolean);
  return clean(value)
    .split(/[,，、;；|]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function normalizeLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

function clean(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function toBoolean(value) {
  if (typeof value === 'boolean') return value;
  const text = clean(value).toLowerCase();
  return ['true', 'yes', '1', 'y', 'featured', '推荐', '是', 'はい'].includes(text);
}

function uniqueSorted(items) {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
}

function slugify(text) {
  return clean(text)
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\u3040-\u30ff]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'tool';
}

function setStatus(message) {
  els.statusMessage.textContent = message || '';
}

function t(key) {
  return UI_TEXT[state.lang]?.[key] || UI_TEXT.en[key] || key;
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

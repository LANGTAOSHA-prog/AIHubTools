
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Table of Contents (TOC) Generation ---
    const tocContainer = document.querySelector('.toc-container ul');
    const headings = document.querySelectorAll('.content-section h2');

    if (tocContainer && headings.length > 0) {
        headings.forEach(h2 => {
            const id = h2.id;
            if (!id) {
                // Skip headings without an ID
                return; 
            }
            const title = h2.textContent;
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = title;
            listItem.appendChild(link);
            tocContainer.appendChild(listItem);
        });
    }

    // --- 2. Active Link Highlighting on Scroll ---
    const tocLinks = document.querySelectorAll('.toc-container a');
    const headingElements = Array.from(headings).map(h => document.getElementById(h.id));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const correspondingLink = document.querySelector(`.toc-container a[href="#${id}"]`);
            if (entry.isIntersecting) {
                // Remove active from all links
                tocLinks.forEach(link => link.classList.remove('active'));
                // Add active to the intersecting one
                if(correspondingLink) {
                   correspondingLink.classList.add('active');
                }
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" }); // Trigger when heading is in the middle 30% of the viewport

    headingElements.forEach(h => {
        if(h) observer.observe(h);
    });
    
    // --- 3. Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Apply the saved theme on initial load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save the user's preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

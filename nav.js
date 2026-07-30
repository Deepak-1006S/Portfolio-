/* nav.js — Shared navigation logic for all portfolio pages */
(function () {
    'use strict';

    // ── Determine current page ──────────────────────────────
    const path     = window.location.pathname;
    const filename = path.split('/').pop();
    const page     = filename.replace('.html', '') || 'index';

    // ── Mark active link (desktop + mobile) ────────────────
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // ── Hamburger toggle ────────────────────────────────────
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        // Close when a mobile link is clicked
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            }
        });
    }
})();

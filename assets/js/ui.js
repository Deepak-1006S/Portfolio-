(function(){
  // UI helpers: header hide/show on scroll and subtle background parallax
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = window.scrollY;
  let ticking = false;

  function onScroll(){
    const current = window.scrollY;
    const delta = current - lastScroll;
    // add scrolled class when past nav height
    if (current > 30) header.classList.add('scrolled'); else header.classList.remove('scrolled');

    if (Math.abs(delta) > 5){
      if (delta > 0) {
        header.classList.add('hidden'); // scrolling down
      } else {
        header.classList.remove('hidden'); // scrolling up
      }
      lastScroll = current;
    }
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // pointer parallax
  const root = document.documentElement;
  const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motionAllowed) {
    window.addEventListener('mousemove', (e)=>{
      const w = window.innerWidth, h = window.innerHeight;
      const x = (e.clientX - w/2) / (w/2); // -1 .. 1
      const y = (e.clientY - h/2) / (h/2);
      // subtle movement scaled
      const px = (x * 12).toFixed(2) + 'px';
      const py = (y * 8).toFixed(2) + 'px';
      const rot = (x * 2).toFixed(2) + 'deg';
      root.style.setProperty('--bg-x', px);
      root.style.setProperty('--bg-y', py);
      root.style.setProperty('--bg-rot', rot);
    }, { passive: true });

    // gentle reset when leaving window
    window.addEventListener('mouseleave', ()=>{
      root.style.setProperty('--bg-x', '0px');
      root.style.setProperty('--bg-y', '0px');
      root.style.setProperty('--bg-rot', '0deg');
    });
  }

  // add small entrance animation for header
  header.classList.add('loaded');

  /* Page transition overlay: create once per page and handle link navigation */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // global cursor blob
    const blob = document.createElement('div');
    blob.className = 'cursor-blob';
    document.body.appendChild(blob);

    // smooth lerp for cursor blob
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let posX = mouseX, posY = mouseY; const ease = 0.14;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; blob.style.opacity = '1'; overlay.style.setProperty('--pt-x', e.clientX + 'px'); overlay.style.setProperty('--pt-y', e.clientY + 'px'); }, { passive: true });
    window.addEventListener('mouseleave', () => { blob.style.opacity = '0'; });
    (function anim(){ posX += (mouseX - posX) * ease; posY += (mouseY - posY) * ease; blob.style.transform = `translate(${posX - 50}px, ${posY - 50}px) translate(-50%, -50%)`; requestAnimationFrame(anim); })();

    // update overlay position on pointer for a more organic feel
    window.addEventListener('mousemove', (e) => {
      overlay.style.setProperty('--pt-x', e.clientX + 'px');
      overlay.style.setProperty('--pt-y', e.clientY + 'px');
    }, { passive: true });

    // intercept internal link clicks for smooth transition
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      // ignore external links, anchors, js links, mailto, downloads
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || a.hasAttribute('download') || a.target === '_blank') return;
      // only handle same-origin relative navigations
      e.preventDefault();
      document.documentElement.classList.add('is-navigating');
      // small delay to allow overlay to animate
      setTimeout(() => { window.location.href = href; }, 260);
    }, { passive: false });
  }

  // Magnetic buttons: subtle attraction toward cursor for elements with .btn-magnetic
  if (motionAllowed) {
    const magnets = document.querySelectorAll('.btn-magnetic, .nav-cta');
    magnets.forEach(btn => {
      const inner = btn.querySelector('.btn-inner') || btn;
      btn.addEventListener('pointermove', (ev) => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width/2;
        const cy = r.top + r.height/2;
        const dx = (ev.clientX - cx) / r.width; // -0.5 .. 0.5
        const dy = (ev.clientY - cy) / r.height;
        const tx = dx * 10; // px (reduced strength)
          const ty = dy * 6; // px (reduced strength)
        inner.style.transform = `translate(${tx}px, ${ty}px)`;
      }, { passive: true });
      btn.addEventListener('pointerleave', () => {
        inner.style.transform = '';
      });
      btn.addEventListener('pointerdown', () => { inner.style.transform = 'translateY(2px) scale(0.995)'; });
      btn.addEventListener('pointerup', () => { inner.style.transform = ''; });
    });

    // Floating icons parallax: small depth-based movement on pointer
    const floating = Array.from(document.querySelectorAll('.floating-icon'));
    if (floating.length) {
      // assign depth if not provided
      floating.forEach((el, i) => {
        if (!el.dataset.depth) el.dataset.depth = (4 + (i % 6) * 3).toString();
        // give initial slow float
        el.classList.add('float');
      });

      window.addEventListener('mousemove', (e) => {
        const w = window.innerWidth, h = window.innerHeight;
        const nx = (e.clientX - w/2) / (w/2); // -1..1
        const ny = (e.clientY - h/2) / (h/2);
        floating.forEach(el => {
          const depth = Number(el.dataset.depth || 12);
          const tx = (nx * depth * 0.6).toFixed(2);
          const ty = (ny * depth * 0.4).toFixed(2);
          el.style.transform = `translate(${tx}px, ${ty}px)`;
        });
      }, { passive: true });
    }
  }
})();

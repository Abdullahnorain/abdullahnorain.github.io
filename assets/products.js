/* Live product demos, ported from the AuntCore landing (LandingHero.jsx,
   LandingFanStream.jsx, landingFanData.js) and the Journal Rounds landing. */
(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var BOOKS = [
    [-55, '🧠', 'c1', '2nd Ed.', 'Neuro', 'Case Review', 'A. Minnie, MD', 'Core Press'],
    [-44, '🫀', 'c2', '3rd Ed.', 'Cardiac', 'Core Review', 'L. Bell, MD', 'Core Press'],
    [-33, '🫁', 'c3', '2nd Ed.', 'Thoracic', 'Case Review', 'S. Okafor, MD', 'Vignette Books'],
    [-22, '🦴', 'c4', '1st Ed.', 'MSK', 'Core Review', 'M. Reyes, MD', 'Core Press'],
    [-11, '🩺', 'c5', '4th Ed.', 'GI / GU', 'Case Review', 'A. Minnie, MD', 'Rivet & Fan'],
    [0, '🎗️', 'c6', '2nd Ed.', 'Breast', 'Core Review', 'J. Park, MD', 'Vignette Books'],
    [11, '☢️', 'c7', '3rd Ed.', 'Nuclear', 'Case Review', 'E. Whitfield, MD', 'Core Press'],
    [22, '🧒', 'c8', '1st Ed.', 'Peds', 'Core Review', 'T. Nguyen, MD', 'Rivet & Fan'],
    [33, '🩸', 'c9', '2nd Ed.', 'Vascular', 'Case Review', 'K. Adeyemi, MD', 'Core Press'],
    [44, '⚡', 'c10', '3rd Ed.', 'Physics', 'Core Review', 'Anonymous, PGY-3', 'Call Room'],
    [55, '🚨', 'c11', '5th Ed.', 'Emergency', 'Case Review', 'H. Osei, MD', 'Core Press']
  ];
  var QUESTIONS = [
    { num: 'Q 001', src: 'GI / GU Case Review', page: 'p. 112', fig: true,
      q: '62-year-old with epigastric pain, weight loss, and new-onset diabetes. Ill-defined hypodense pancreatic head mass. Most likely diagnosis?',
      c: ['Autoimmune pancreatitis', 'Pancreatic ductal adenocarcinoma', 'Serous cystadenoma', 'Groove pancreatitis'], a: 1,
      e: 'A poorly enhancing, ill-defined pancreatic mass with upstream ductal dilation is adenocarcinoma until proven otherwise.' },
    { num: 'Q 002', src: 'Thoracic Case Review', page: 'p. 47',
      q: 'Young adult with bilateral hilar lymphadenopathy and upper-lobe perilymphatic nodules. Most likely diagnosis?',
      c: ['Lymphoma', 'Silicosis', 'Sarcoidosis', 'Tuberculosis'], a: 2,
      e: 'Symmetric hilar nodes plus perilymphatic nodules along fissures and bronchovascular bundles is classic sarcoid.' },
    { num: 'Q 003', src: 'Breast Core Review', page: 'p. 203',
      q: 'Anechoic oval mass with imperceptible walls and posterior acoustic enhancement on ultrasound. Next step?',
      c: ['Biopsy', 'Short-interval follow-up', 'MRI with contrast', 'Routine screening, it is a simple cyst'], a: 3,
      e: 'Anechoic, thin-walled, enhancement posteriorly: a simple cyst. BI-RADS 2, back to routine screening.' }
  ];
  var LETTERS = ['A', 'B', 'C', 'D'];

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }

  /* ---------- Fan ---------- */
  function buildFan(zone) {
    zone.setAttribute('role', 'button');
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('aria-label', 'Refold the fan of case books and run it again');
    zone.title = 'Click to refold';
    var root = el('span', 'ac-fan-root'), sway = el('span', 'ac-fan-sway');
    BOOKS.forEach(function (b, i) {
      var slot = el('div', 'ac-fan-slot');
      slot.style.setProperty('--fan-angle', b[0] + 'deg');
      slot.style.setProperty('--fan-index', i);
      slot.innerHTML = '<div class="ac-fan-hover-group"><span class="ac-fan-emoji" aria-hidden="true">' + b[1] + '</span>' +
        '<div class="ac-fan-book ' + b[2] + '"><div class="ac-fan-cover"><span class="ac-fan-frame"></span><span class="ac-fan-glare"></span>' +
        '<span class="ac-fan-edition">' + b[3] + '</span><span class="ac-fan-title">' + b[4] + '<br>' + b[5] + '</span>' +
        '<span class="ac-fan-author">' + b[6] + '</span><span class="ac-fan-publisher">' + b[7] + '</span></div></div></div>' +
        '<i class="ac-fan-anchor" aria-hidden="true"></i>';
      sway.appendChild(slot);
    });
    root.appendChild(sway);
    zone.appendChild(root);
    zone.appendChild(el('span', 'ac-fan-rivet'));

    var max = parseFloat(zone.getAttribute('data-max-scale') || '1');
    function fit() {
      var s = Math.max(0.36, Math.min(max, zone.clientWidth / 920));
      zone.style.setProperty('--fan-scale', s.toFixed(3));
    }
    fit();
    new ResizeObserver(fit).observe(zone);

    var last = sway.lastChild, busy = false;
    function open() { root.classList.add('open'); if (reduced) root.classList.add('settled'); }
    root.addEventListener('transitionend', function (e) {
      if (e.target === last && e.propertyName === 'transform' && root.classList.contains('open')) { root.classList.add('settled'); busy = false; }
    });
    function replay() {
      if (busy || reduced) return;
      busy = true;
      root.classList.remove('settled', 'open');
      setTimeout(open, 1150);
    }
    zone.addEventListener('click', replay);
    zone.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); replay(); } });

    if (reduced || !('IntersectionObserver' in window)) { open(); return root; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setTimeout(open, 250); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(zone);
    return root;
  }

  /* ---------- Question carousel ---------- */
  function buildQuestions(host, ctImg) {
    var stack = el('div', 'ac-q-stack');
    var cards = QUESTIONS.slice(0, 1).map(function (item, i) {
      var card = el('article', 'ac-q-card' + (i === 0 ? ' active' : ''));
      var html = '';
      if (item.fig) html += '<div class="ac-q-figure"><img src="' + ctImg + '" width="560" height="451" alt="Axial contrast-enhanced CT showing an ill-defined hypodense pancreatic head mass" loading="lazy"></div>' +
        '<div class="ac-q-caption"><span><b>FIG 1</b> · Axial CT + C</span><span>Figure preserved · Hellerhoff, CC BY-SA</span></div>';
      html += '<div class="ac-q-meta"><span><b>' + item.num + '</b> · ' + item.src + '</span><span>' + item.page + '</span></div>' +
        '<p class="ac-q-text">' + item.q + '</p><div class="ac-q-choices">' +
        item.c.map(function (c, j) { return '<div class="ac-q-choice' + (j === item.a ? ' correct' : '') + '"><span class="letter">' + LETTERS[j] + '</span>' + c + '</div>'; }).join('') +
        '</div><div class="ac-q-explain"><b>Correct, ' + LETTERS[item.a] + '.</b> ' + item.e + '</div>';
      card.innerHTML = html;
      if (i !== 0) { card.setAttribute('aria-hidden', 'true'); card.inert = true; }
      stack.appendChild(card);
      return card;
    });
    host.appendChild(stack);
    host.surge = false;
    var idx = 0;
    function fitHeight() { stack.style.height = cards[idx].offsetHeight + 'px'; }
    fitHeight();
    if ('ResizeObserver' in window) new ResizeObserver(fitHeight).observe(host);
    Array.prototype.forEach.call(stack.querySelectorAll('img'), function (im) { im.addEventListener('load', fitHeight); });
  }

  /* ---------- Stream: cyan threads from every book to the rivet, then to the question ---------- */
  function buildStream(stage, root, deck) {
    if (reduced) return;
    var canvas = el('canvas', 'ac-fan-stream'); canvas.setAttribute('aria-hidden', 'true');
    stage.insertBefore(canvas, stage.firstChild);
    var ctx = canvas.getContext('2d');
    var anchors = Array.prototype.slice.call(stage.querySelectorAll('.ac-fan-anchor'));
    var rivet = stage.querySelector('.ac-fan-rivet');
    var flat = !!stage.closest('.ac-flat');
    var TUBE = flat ? '184,82%,36%' : '180,65%,54%', CORE = flat ? '184,85%,32%' : '180,65%,60%', DOT = flat ? '184,85%,34%' : '180,70%,62%', WARM = flat ? '38,92%,48%' : '45,90%,78%';
    var dpr = Math.min(window.devicePixelRatio || 1, 2), particles = [], blooms = [], nextAt = anchors.map(function () { return 0; });
    var prev = null, raf = 0, visible = true;
    function resize() {
      var b = stage.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(b.width * dpr)); canvas.height = Math.max(1, Math.round(b.height * dpr));
      canvas.style.width = b.width + 'px'; canvas.style.height = b.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function pt(x, y) { var b = canvas.getBoundingClientRect(); return { x: x - b.left, y: y - b.top }; }
    function geo() {
      var r = rivet.getBoundingClientRect(), d = deck.getBoundingClientRect();
      var pivot = pt(r.left + r.width / 2, r.top + r.height / 2), dest = pt(d.left + d.width / 2, d.top - 6);
      return { pivot: pivot, dest: dest, tips: anchors.map(function (a) { var b = a.getBoundingClientRect(); return pt(b.left, b.top); }),
        main: { p0: pivot, pc: { x: (pivot.x + dest.x) / 2, y: pivot.y + (dest.y - pivot.y) * 0.55 }, p1: dest } };
    }
    function ctrl(s, e, i) {
      var dx = e.x - s.x, dy = e.y - s.y, len = Math.sqrt(dx * dx + dy * dy) || 1, side = i % 2 ? -1 : 1;
      return { x: (s.x + e.x) / 2 + (-dy / len) * 5 * side, y: (s.y + e.y) / 2 + (dx / len) * 5 * side };
    }
    function tube(s, c, e, ow, cw, oa, ca) {
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.quadraticCurveTo(c.x, c.y, e.x, e.y);
      ctx.lineCap = 'round'; ctx.strokeStyle = 'hsla(' + TUBE + ',' + (flat ? oa * 1.4 : oa) + ')'; ctx.lineWidth = ow; ctx.stroke();
      ctx.strokeStyle = 'hsla(' + CORE + ',' + (flat ? ca * 1.6 : ca) + ')'; ctx.lineWidth = cw; ctx.stroke();
    }
    function qp(p, t) { var u = 1 - t; return { x: u * u * p.p0.x + 2 * u * t * p.pc.x + t * t * p.p1.x, y: u * u * p.p0.y + 2 * u * t * p.pc.y + t * t * p.p1.y }; }
    function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function frame(now) {
      raf = 0; if (document.hidden || !visible) return;
      if (prev === null) prev = now;
      var dt = Math.min(now - prev, 50); prev = now;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.globalCompositeOperation = flat ? 'source-over' : 'lighter';
      var g = geo(), settled = root.classList.contains('settled');
      var tubes = g.tips.map(function (tip, i) {
        var t = { p0: tip, pc: ctrl(tip, g.pivot, i), p1: g.pivot };
        tube(t.p0, t.pc, t.p1, 5, 1.2, settled ? 0.07 : 0.002, settled ? 0.16 : 0.005);
        return t;
      });
      tube(g.main.p0, g.main.pc, g.main.p1, 9, 2, settled ? 0.08 : 0.025, settled ? 0.2 : 0.07);
      if (settled) {
        for (var i = 0; i < anchors.length; i++) if (now >= nextAt[i]) {
          particles.push({ book: i, t: 0, dur: 1500 + Math.random() * 800, warm: Math.random() < 0.12 });
          nextAt[i] = now + (deck.surge ? 260 + Math.random() * 420 : 1200 + Math.random() * 1700);
        }
      } else { particles.length = 0; blooms.length = 0; }
      for (var p = particles.length - 1; p >= 0; p--) {
        var P = particles[p]; P.t += dt / P.dur;
        if (P.t >= 1) { blooms.push({ x: g.dest.x, y: g.dest.y, t: 0 }); particles.splice(p, 1); continue; }
        var e = ease(P.t), q = e < 0.42 ? qp(tubes[P.book], e / 0.42) : qp(g.main, (e - 0.42) / 0.58);
        var a = P.t < 0.12 ? P.t / 0.12 : P.t > 0.85 ? (1 - P.t) / 0.15 : 1;
        var hue = P.warm ? WARM : DOT;
        var glow = ctx.createRadialGradient(q.x, q.y, 0, q.x, q.y, 6);
        glow.addColorStop(0, 'hsla(' + hue + ',' + (a * (flat ? 0.22 : 0.3)).toFixed(3) + ')'); glow.addColorStop(1, 'hsla(' + hue + ',0)');
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(q.x, q.y, 6, 0, 6.2832); ctx.fill();
        ctx.fillStyle = 'hsla(' + hue + ',' + (a * (flat ? 0.9 : 0.7)).toFixed(3) + ')'; ctx.beginPath(); ctx.arc(q.x, q.y, 1.6, 0, 6.2832); ctx.fill();
      }
      for (var k = blooms.length - 1; k >= 0; k--) {
        var B = blooms[k]; B.t += dt / 600;
        if (B.t >= 1) { blooms.splice(k, 1); continue; }
        var rad = 4 + B.t * 14, gr = ctx.createRadialGradient(B.x, B.y, 0, B.x, B.y, rad);
        gr.addColorStop(0, 'hsla(' + CORE + ',' + ((1 - B.t) * (flat ? 0.3 : 0.25)).toFixed(3) + ')'); gr.addColorStop(1, 'hsla(' + CORE + ',0)');
        ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(B.x, B.y, rad, 0, 6.2832); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      start();
    }
    function start() { if (!raf && !document.hidden && visible) raf = requestAnimationFrame(frame); }
    new ResizeObserver(resize).observe(stage);
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); else { cancelAnimationFrame(raf); raf = 0; prev = null; } }, { rootMargin: '160px' }).observe(stage);
    document.addEventListener('visibilitychange', start);
    resize(); start();
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-ac-stage]'), function (stage) {
    var zone = stage.querySelector('[data-ac-fan]'), deck = stage.querySelector('[data-ac-q]');
    var root = zone ? buildFan(zone) : null;
    if (deck) buildQuestions(deck, stage.getAttribute('data-ct') || 'assets/ac-pancreas-ct.jpg');
    if (root && deck) buildStream(stage, root, deck);
  });

  /* ---------- Journal Rounds: pointer spotlight on the grid ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.jr-world'), function (w) {
    w.addEventListener('pointermove', function (e) {
      var r = w.getBoundingClientRect();
      w.style.setProperty('--mx', (e.clientX - r.left) + 'px'); w.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    w.addEventListener('pointerleave', function () { w.style.removeProperty('--mx'); w.style.removeProperty('--my'); });
  });
})();

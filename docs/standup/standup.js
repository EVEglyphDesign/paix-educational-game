/*!
 * THE STAND-UP — EVEglyphDesign · PAIX educational game
 * Document ID: EgD-PAIX-SU-001
 *
 * Rule one of the narrator canon, made importable. Every twelve minutes of
 * accumulated play, URIEL stops the level and stands up. Not skippable.
 * Not a penalty. Nothing is lost by stopping.
 *
 * Canon constraints honoured by this file:
 *   - No backend, no accounts, no network calls of any kind.
 *   - No child data leaves the device. Elapsed play time is stored in
 *     localStorage on this device only, and can be disabled.
 *   - Palette locked: cream #fdfaf4, ink #1a1a1a, line #e7e1d3,
 *     single accent orange #e87722 (the lantern only).
 *   - prefers-reduced-motion is honoured without being asked.
 *
 * Usage (ES module):
 *   import { StandUp } from './standup.js';
 *   const standUp = StandUp.install({
 *     asset: '../opening/assets/uriel.png',
 *     onPause:  () => game.pause(),
 *     onResume: () => game.resume(),
 *   });
 *
 * Usage (classic script): <script src="standup.js"></script> then
 *   window.PaixStandUp.install({ ... });
 *
 * Pour le bien-être du peuple.
 */

const CANON = {
  cream: '#fdfaf4',
  cream2: '#f7f2e7',
  ink: '#1a1a1a',
  line: '#e7e1d3',
  mute: '#6b665c',
  accent: '#e87722',
};

const DEFAULT_STEPS = [
  {
    id: 'eyes',
    tag: 'EYES',
    title: 'Look at the farthest thing in the room.',
    body: 'Not the screen. The wall, the window, the tree outside. Your eyes were built for distance and this box keeps them at arm\u2019s length all day.',
    seated: 'Stay where you are and look at the farthest thing you can see. That part works sitting down.',
    seconds: 20,
    pose: 'gaze',
  },
  {
    id: 'spine',
    tag: 'SPINE',
    title: 'Stand up. Chin back over your shoulders.',
    body: 'Head over ribs, ribs over hips. This is the one that keeps your neck from setting in the curve. I do it with you \u2014 badly, because I am slightly off-balance. That is allowed.',
    seated: 'Sit tall and slide your chin back over your shoulders. Lift the top of your head toward the ceiling.',
    seconds: 20,
    pose: 'spine',
  },
  {
    id: 'reach',
    tag: 'REACH',
    title: 'Reach up. Then lean one way, then the other.',
    body: 'Open the front of your chest. Shoulders were not designed to be rolled forward for an hour. Breathe out on the way over.',
    seated: 'Reach both arms up as far as the chair allows, then lean gently left, then right.',
    seconds: 20,
    pose: 'reach',
  },
];

const CLOSING = {
  title: 'That is the whole thing. Go on.',
  body: 'Nothing was lost while we stood here. Nothing ran down. Whatever you were building is exactly where you left it.',
  seconds: 6,
};

/* ---------- styles, injected once, scoped by prefix ---------- */
const CSS = `
.paix-su-root{position:fixed;inset:0;z-index:2147483000;display:none}
.paix-su-root[data-open="true"]{display:block}
.paix-su-veil{position:absolute;inset:0;background:${CANON.cream};animation:paix-su-in .5s cubic-bezier(.22,.61,.36,1) both}
@keyframes paix-su-in{from{opacity:0}to{opacity:1}}
.paix-su-grain{position:absolute;inset:0;opacity:.35;pointer-events:none;
  background-image:radial-gradient(circle at 1px 1px, rgba(26,26,26,.045) 1px, transparent 0);background-size:4px 4px}
.paix-su-wrap{position:absolute;inset:0;display:grid;grid-template-columns:minmax(240px,34%) 1fr;
  align-items:center;gap:clamp(1rem,4vw,3.4rem);padding:clamp(1.4rem,5vw,4rem);
  font-family:Inter,system-ui,sans-serif;color:${CANON.ink};font-size:17px;line-height:1.6;
  -webkit-font-smoothing:antialiased}
.paix-su-badge{position:absolute;top:clamp(1rem,3vw,1.8rem);left:clamp(1.4rem,5vw,4rem);
  font-size:.66rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${CANON.accent}}
.paix-su-docid{position:absolute;top:clamp(1rem,3vw,1.8rem);right:clamp(1.4rem,5vw,4rem);
  font-size:.62rem;letter-spacing:.14em;color:${CANON.mute};font-weight:600}

/* character */
.paix-su-figure{position:relative;justify-self:center;width:100%;max-width:300px}
.paix-su-img{display:block;width:100%;height:auto;transform-origin:50% 92%;
  filter:drop-shadow(0 16px 18px rgba(26,26,26,.06))}
.paix-su-lantern{position:absolute;left:38.5%;top:50.5%;width:19%;aspect-ratio:1;
  transform:translate(-50%,-50%);border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(232,119,34,.34) 0%,rgba(232,119,34,.13) 42%,transparent 70%);
  animation:paix-su-lantern 3.6s ease-in-out infinite}
@keyframes paix-su-lantern{0%,100%{opacity:.55;transform:translate(-50%,-50%) scale(.94)}
  50%{opacity:1;transform:translate(-50%,-50%) scale(1.06)}}
.paix-su-floor{height:1px;margin-top:1.4rem;
  background:linear-gradient(to right,transparent,${CANON.line} 22%,${CANON.line} 78%,transparent)}

/* he does the stretch — deliberately off-tempo, he is not graceful */
.paix-su-pose-gaze .paix-su-img{animation:paix-su-gaze 4s ease-in-out infinite}
@keyframes paix-su-gaze{0%,100%{transform:translateX(0) rotate(0)}
  30%{transform:translateX(-11px) rotate(-2.6deg)}55%{transform:translateX(-13px) rotate(-3deg)}
  80%{transform:translateX(3px) rotate(.6deg)}}
.paix-su-pose-spine .paix-su-img{animation:paix-su-spine 3.4s ease-in-out infinite}
@keyframes paix-su-spine{0%,100%{transform:translateY(0) scaleY(1)}
  45%{transform:translateY(-13px) scaleY(1.035)}70%{transform:translateY(-10px) scaleY(1.028) rotate(.8deg)}}
.paix-su-pose-reach .paix-su-img{animation:paix-su-reach 5.2s ease-in-out infinite}
@keyframes paix-su-reach{0%,100%{transform:translateY(0) rotate(0)}
  18%{transform:translateY(-16px) scaleY(1.05)}
  42%{transform:translateY(-11px) rotate(-8deg)}
  55%{transform:translateY(-12px) rotate(-9.5deg)}
  74%{transform:translateY(-11px) rotate(8deg)}
  86%{transform:translateY(-12px) rotate(9.5deg)}}
.paix-su-pose-done .paix-su-img{animation:paix-su-done 3.2s ease-in-out infinite}
@keyframes paix-su-done{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

/* panel */
.paix-su-panel{max-width:34rem}
.paix-su-kicker{margin:0 0 .7rem;font-size:.68rem;font-weight:700;letter-spacing:.2em;
  text-transform:uppercase;color:${CANON.accent};display:flex;align-items:center;gap:.6rem}
.paix-su-dotpulse{width:8px;height:8px;border-radius:50%;background:${CANON.accent};
  animation:paix-su-beat 1.6s ease-in-out infinite;flex:none}
@keyframes paix-su-beat{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.45}}
.paix-su-title{font-family:Fraunces,Georgia,serif;font-weight:600;
  font-size:clamp(1.7rem,3.6vw,2.7rem);line-height:1.14;letter-spacing:-.012em;margin:0 0 .9rem}
.paix-su-body{margin:0 0 1.5rem;color:${CANON.mute};font-size:1.01rem;max-width:31rem}
.paix-su-body[data-seated="true"]{color:${CANON.ink}}

/* timer */
.paix-su-timer{display:flex;align-items:center;gap:1rem;margin:0 0 1.6rem}
.paix-su-ring{flex:none}
.paix-su-ring circle{fill:none;stroke-width:3}
.paix-su-ring .trk{stroke:${CANON.line}}
.paix-su-ring .bar{stroke:${CANON.accent};stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;
  transition:stroke-dashoffset 1s linear}
.paix-su-count{font-family:Fraunces,Georgia,serif;font-size:1.45rem;font-variant-numeric:tabular-nums}
.paix-su-of{font-size:.78rem;color:${CANON.mute};letter-spacing:.04em}

/* step rail */
.paix-su-rail{display:flex;gap:.5rem;margin:0 0 1.7rem;padding:0;list-style:none}
.paix-su-rail li{font-size:.62rem;font-weight:700;letter-spacing:.12em;color:${CANON.mute};
  border:1px solid ${CANON.line};padding:.28rem .5rem;border-radius:2px}
.paix-su-rail li[data-state="now"]{border-color:${CANON.accent};color:${CANON.accent}}
.paix-su-rail li[data-state="done"]{border-color:${CANON.ink};color:${CANON.ink}}

/* controls */
.paix-su-controls{display:flex;align-items:center;gap:1.1rem;flex-wrap:wrap}
.paix-su-note{font-size:.74rem;color:${CANON.mute}}
.paix-su-alt{font:inherit;font-size:.82rem;color:${CANON.mute};background:none;border:none;cursor:pointer;
  padding:.4rem 0;text-decoration:underline;text-underline-offset:3px;text-decoration-color:${CANON.line}}
.paix-su-alt:hover{color:${CANON.ink}}
.paix-su-alt:focus-visible{outline:2px solid ${CANON.accent};outline-offset:3px}
.paix-su-go{font:inherit;font-weight:600;font-size:.92rem;display:none;align-items:center;gap:.55rem;
  background:${CANON.ink};color:${CANON.cream};border:none;border-radius:2px;padding:.8rem 1.3rem;cursor:pointer}
.paix-su-go[data-ready="true"]{display:inline-flex}
.paix-su-go:hover{background:#000}
.paix-su-go:focus-visible{outline:2px solid ${CANON.accent};outline-offset:3px}
.paix-su-foot{position:absolute;bottom:clamp(1rem,3vw,1.6rem);left:clamp(1.4rem,5vw,4rem);
  right:clamp(1.4rem,5vw,4rem);display:flex;justify-content:space-between;gap:1rem;
  font-size:.68rem;color:${CANON.mute};border-top:1px solid ${CANON.line};padding-top:.7rem}
.paix-su-foot em{font-family:Fraunces,Georgia,serif;font-style:normal}

@media (max-width:860px){
  .paix-su-wrap{grid-template-columns:1fr;align-content:start;gap:.9rem;padding:3.9rem 1.3rem 6.2rem;overflow-y:auto}
  .paix-su-figure{max-width:132px;justify-self:start}
  .paix-su-docid{display:none}
  .paix-su-note{display:none}
  .paix-su-floor{margin-top:.8rem}
  .paix-su-title{font-size:clamp(1.4rem,6.2vw,1.9rem)}
  .paix-su-body{font-size:.95rem;margin-bottom:1.1rem}
  .paix-su-timer{margin-bottom:1.1rem}
  .paix-su-rail{margin-bottom:1.2rem}
  .paix-su-foot span{max-width:64%}
}
@media (prefers-reduced-motion:reduce){
  .paix-su-img,.paix-su-lantern,.paix-su-dotpulse,.paix-su-veil{animation:none!important}
}
.paix-su-root[data-calm="true"] .paix-su-img,
.paix-su-root[data-calm="true"] .paix-su-lantern,
.paix-su-root[data-calm="true"] .paix-su-dotpulse{animation:none}
`;

/* The component carries its own typography so a level that never loaded
   Fraunces/Inter still renders the interrupt in canon type. CDN fonts are the
   only outbound request the canon permits, and only if not already present. */
function injectFonts() {
  if (document.querySelector('link[href*="Fraunces"]')) return;
  if (document.getElementById('paix-su-fonts')) return;
  const pre = document.createElement('link');
  pre.rel = 'preconnect'; pre.href = 'https://fonts.gstatic.com'; pre.crossOrigin = '';
  document.head.appendChild(pre);
  const l = document.createElement('link');
  l.id = 'paix-su-fonts';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(l);
}

function injectCSS() {
  if (document.getElementById('paix-su-style')) return;
  const el = document.createElement('style');
  el.id = 'paix-su-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

const RING_R = 17;
const RING_C = 2 * Math.PI * RING_R;

class StandUpController {
  constructor(opts = {}) {
    this.o = Object.assign({
      intervalMs: 12 * 60 * 1000,   // twelve minutes of accumulated play
      steps: DEFAULT_STEPS,
      closing: CLOSING,
      asset: './assets/uriel.png',
      persist: true,                 // device-local only; set false for none
      storageKey: 'paix.standup.elapsed',
      countIdleAsPlay: false,        // hidden tab / blurred window does not count
      calm: false,
      loadFonts: true,               // pull Fraunces/Inter only if absent
      autoStart: true,
      onPause: null,
      onResume: null,
      onStep: null,
    }, opts);

    this.elapsed = this.o.persist ? this._read() : 0;
    this.running = false;
    this.open = false;
    this._tick = null;
    this._seated = false;
    this._build();
    if (this.o.autoStart) this.start();

    document.addEventListener('visibilitychange', () => {
      if (this.o.countIdleAsPlay) return;
      document.hidden ? this._hold() : (this.open ? null : this._go());
    });
  }

  /* ---------- public API ---------- */
  start()  { if (!this.open) this._go(); return this; }
  pause()  { this._hold(); return this; }
  reset()  { this.elapsed = 0; this._write(); return this; }
  /** Milliseconds of play remaining before the next Stand-Up. */
  remaining() { return Math.max(0, this.o.intervalMs - this.elapsed); }
  /** Trigger it now — used by harnesses, tests and teachers. */
  trigger() { this._open(); return this; }
  destroy() { this._hold(); this.root.remove(); }

  /* ---------- clock ---------- */
  _go() {
    if (this.running || this.open) return;
    this.running = true;
    this._last = Date.now();
    this._tick = setInterval(() => {
      const now = Date.now();
      this.elapsed += now - this._last;
      this._last = now;
      if (this.o.persist && this.elapsed % 5000 < 1100) this._write();
      if (this.elapsed >= this.o.intervalMs) this._open();
    }, 1000);
  }
  _hold() {
    if (!this.running) return;
    this.running = false;
    clearInterval(this._tick);
    this.elapsed += Date.now() - this._last;
    this._write();
  }
  _read() {
    try { return Math.max(0, parseInt(localStorage.getItem(this.o.storageKey) || '0', 10)) || 0; }
    catch (e) { return 0; }
  }
  _write() {
    if (!this.o.persist) return;
    try { localStorage.setItem(this.o.storageKey, String(Math.floor(this.elapsed))); } catch (e) {}
  }

  /* ---------- DOM ---------- */
  _build() {
    if (this.o.loadFonts !== false) injectFonts();
    injectCSS();
    const r = document.createElement('div');
    r.className = 'paix-su-root';
    r.setAttribute('role', 'dialog');
    r.setAttribute('aria-modal', 'true');
    r.setAttribute('aria-label', 'The Stand-Up');
    r.dataset.open = 'false';
    r.dataset.calm = String(!!this.o.calm);
    r.innerHTML = `
      <div class="paix-su-veil"></div>
      <div class="paix-su-grain" aria-hidden="true"></div>
      <p class="paix-su-badge">The Stand-Up</p>
      <p class="paix-su-docid">EgD-PAIX-SU-001</p>
      <div class="paix-su-wrap">
        <div class="paix-su-figure">
          <img class="paix-su-img" alt="URIEL stands up and stretches with you" src="${this.o.asset}">
          <span class="paix-su-lantern" aria-hidden="true"></span>
          <div class="paix-su-floor" aria-hidden="true"></div>
        </div>
        <div class="paix-su-panel">
          <p class="paix-su-kicker"><span class="paix-su-dotpulse"></span><span class="paix-su-tag">EYES</span></p>
          <h2 class="paix-su-title"></h2>
          <p class="paix-su-body"></p>
          <div class="paix-su-timer">
            <svg class="paix-su-ring" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              <circle class="trk" cx="20" cy="20" r="${RING_R}"></circle>
              <circle class="bar" cx="20" cy="20" r="${RING_R}"
                      stroke-dasharray="${RING_C.toFixed(1)}" stroke-dashoffset="0"></circle>
            </svg>
            <span class="paix-su-count" aria-live="off">20</span>
            <span class="paix-su-of">seconds \u00b7 the game is waiting, not running</span>
          </div>
          <ul class="paix-su-rail"></ul>
          <div class="paix-su-controls">
            <button class="paix-su-go" type="button">Back to it <span aria-hidden="true">&rarr;</span></button>
            <button class="paix-su-alt" type="button">I can\u2019t stand right now</button>
            <span class="paix-su-note">Nothing is lost. Nothing ran down while we stood here.</span>
          </div>
        </div>
      </div>
      <div class="paix-su-foot">
        <span>EVEglyphDesign \u00b7 PAIX \u00b7 rule one: the body \u00b7 not skippable, not a penalty</span>
        <em>Pour le bien-\u00eatre du peuple</em>
      </div>`;
    document.body.appendChild(r);

    this.root = r;
    this.el = {
      fig:   r.querySelector('.paix-su-figure'),
      tag:   r.querySelector('.paix-su-tag'),
      title: r.querySelector('.paix-su-title'),
      body:  r.querySelector('.paix-su-body'),
      count: r.querySelector('.paix-su-count'),
      bar:   r.querySelector('.paix-su-ring .bar'),
      rail:  r.querySelector('.paix-su-rail'),
      go:    r.querySelector('.paix-su-go'),
      alt:   r.querySelector('.paix-su-alt'),
    };

    this.el.go.addEventListener('click', () => this._close());
    this.el.alt.addEventListener('click', () => this._toggleSeated());

    // Not skippable: Escape does nothing, and focus stays inside.
    r.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); }
      if (e.key === 'Tab') this._trapFocus(e);
    });
  }

  _trapFocus(e) {
    const f = [...this.root.querySelectorAll('button')].filter(b => b.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------- the beat ---------- */
  _open() {
    if (this.open) return;
    this._hold();
    this.open = true;
    this._seated = false;
    this.el.alt.textContent = 'I can\u2019t stand right now';
    this._returnFocus = document.activeElement;
    this.root.dataset.open = 'true';
    document.documentElement.style.overflow = 'hidden';

    this.el.rail.innerHTML = this.o.steps
      .map(s => `<li data-id="${s.id}" data-state="next">${s.tag}</li>`).join('');

    try { this.o.onPause && this.o.onPause(); } catch (e) {}
    document.dispatchEvent(new CustomEvent('paix:standup:start', { detail: { at: Date.now() } }));

    this._runStep(0);
    this.el.alt.focus();
  }

  _runStep(n) {
    const seq = this.o.steps;
    if (n >= seq.length) return this._closing();

    const s = seq[n];
    this._stepIndex = n;
    this._pose(s.pose);

    this.el.tag.textContent = s.tag;
    this.el.title.textContent = s.title;
    this.el.body.textContent = this._seated && s.seated ? s.seated : s.body;
    this.el.body.dataset.seated = String(this._seated);

    [...this.el.rail.children].forEach((li, k) => {
      li.dataset.state = k < n ? 'done' : (k === n ? 'now' : 'next');
    });

    try { this.o.onStep && this.o.onStep(s, n); } catch (e) {}
    this._countdown(s.seconds, () => this._runStep(n + 1));
  }

  _closing() {
    const c = this.o.closing;
    this._pose('done');
    this.el.tag.textContent = 'DONE';
    this.el.title.textContent = c.title;
    this.el.body.textContent = c.body;
    this.el.body.dataset.seated = 'false';
    [...this.el.rail.children].forEach(li => { li.dataset.state = 'done'; });
    this.el.alt.style.display = 'none';
    this._countdown(c.seconds, () => {
      this.el.go.dataset.ready = 'true';
      this.el.go.focus();
    });
  }

  _countdown(seconds, done) {
    clearInterval(this._cd);
    let left = seconds;
    const paint = () => {
      this.el.count.textContent = String(left);
      const frac = 1 - left / seconds;
      this.el.bar.setAttribute('stroke-dashoffset', (RING_C * frac).toFixed(1));
    };
    paint();
    this._cd = setInterval(() => {
      left -= 1;
      if (left <= 0) { clearInterval(this._cd); paint(); done && done(); return; }
      paint();
    }, 1000);
  }

  _toggleSeated() {
    this._seated = !this._seated;
    this.el.alt.textContent = this._seated ? 'I can stand after all' : 'I can\u2019t stand right now';
    const s = this.o.steps[this._stepIndex];
    if (s) {
      this.el.body.textContent = this._seated && s.seated ? s.seated : s.body;
      this.el.body.dataset.seated = String(this._seated);
    }
  }

  _pose(name) {
    this.el.fig.className = 'paix-su-figure paix-su-pose-' + name;
  }

  _close() {
    clearInterval(this._cd);
    this.open = false;
    this.elapsed = 0;
    this._write();
    this.root.dataset.open = 'false';
    this.el.go.dataset.ready = 'false';
    this.el.alt.style.display = '';
    document.documentElement.style.overflow = '';

    try { this.o.onResume && this.o.onResume(); } catch (e) {}
    document.dispatchEvent(new CustomEvent('paix:standup:end', { detail: { at: Date.now() } }));

    if (this._returnFocus && this._returnFocus.focus) this._returnFocus.focus();
    this._go();
  }
}

export const StandUp = {
  /** Install the interrupt on this page. Returns the controller. */
  install(opts) { return new StandUpController(opts); },
  DEFAULT_STEPS,
  CANON,
};

if (typeof window !== 'undefined') window.PaixStandUp = StandUp;
export default StandUp;

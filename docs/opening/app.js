/* EVEglyphDesign — PAIX opening sequence · EgD-PAIX-OPEN-001
   URIEL speaks the first six screens. Typewriter cadence, calm-motion switch,
   keyboard + click advance, no autoplay past a screen. */

const SCREENS = [
  {
    kicker: "ARRIVAL",
    line: "I am not from here. I came anyway.",
    sub: "URIEL. One of the watchers set over the world. I do not live here, I do not rule here, and I am not going to stay. I came for one reason and I will tell you what it is.",
    next: "Why did you come?",
    wave: true
  },
  {
    kicker: "THE REASON",
    line: "I came because you are being built badly on purpose.",
    sub: "Somebody is designing the things you look at so that you cannot put them down. I am going to show you how that machinery turns — and then you are going to build machinery of your own that turns the other way.",
    points: [
      { tag: "MY JOB", text: "<b>I show you the working.</b> The courses of the sun and the moon were explained to Enoch by me. Now it is code, circuits and screens. Same job." },
      { tag: "NOT MY JOB", text: "<b>I do not grade you and I do not chase you.</b> I can show you how it turns. I cannot turn it for you." }
    ],
    next: "So what do we do?"
  },
  {
    kicker: "THE BODY · RULE ONE",
    line: "Every twelve minutes, I stop the game and stand up.",
    sub: "You are not a head on a stalk. Screens curl children forward until the neck sets in that curve and the shoulders stay round. I will not be the reason your back goes crooked.",
    standup: "THE STAND-UP · every 12 minutes · not skippable · not a penalty",
    points: [
      { tag: "EYES", hot: true, text: "<b>Look at the farthest thing in the room.</b> Twenty seconds. Your eyes were built for distance and this box keeps them at arm's length." },
      { tag: "SPINE", hot: true, text: "<b>Stand. Chin back over your shoulders. Open the chest.</b> I do it with you — badly, because I am slightly off-balance. That is allowed." },
      { tag: "STOPPING", text: "<b>Nothing punishes you for leaving.</b> No streak breaks. No timer runs down. Nothing you built is lost. Come back when you come back." }
    ],
    next: "And who can reach me in here?"
  },
  {
    kicker: "THE WALLS · RULE TWO",
    line: "Nobody can reach you in here. There is no door.",
    sub: "This world is closed on purpose. Not moderated — closed. A thing that cannot be sent in cannot be used to hurt you, and nothing about you can be taken out.",
    points: [
      { tag: "NO CHAT", hot: true, text: "<b>No messages, no strangers, no voice, no friend requests.</b> There is no channel through which an adult can speak to a child in PAIX. None is planned." },
      { tag: "NO UPLOAD", hot: true, text: "<b>No camera, no microphone, no pictures in or out.</b> Indecent images cannot be pushed at you here, and no image of you can leave here. The pipe does not exist." },
      { tag: "NO ADS", text: "<b>No advertising, no trackers, no links out.</b> Nobody paid to be in front of your eyes. There is no click that leads out of this world." },
      { tag: "NO SALE", text: "<b>Your progress stays on this device.</b> No account is sold, no child is brokered. There is nothing here to harvest." }
    ],
    next: "Then what do I actually do?"
  },
  {
    kicker: "THE WORK · RULE THREE",
    line: "You do not consume this game. You build it.",
    sub: "Imagination first, then the machinery to carry it. That order never reverses. A child who can only operate somebody else's tool has been trained, not taught.",
    points: [
      { tag: "IMAGINE", text: "<b>You say what should exist.</b> Every level begins with a thing you want that is not there yet. Nothing is generated for you before you have described it." },
      { tag: "BUILD", hot: true, text: "<b>Then you make it turn.</b> Logic, sequence, cause and effect, a little code — the real machinery, at a size that fits your hands." },
      { tag: "SHOW", text: "<b>Then you show one human being.</b> Not a feed, not a score, not a stranger. One person in the room with you." }
    ],
    next: "I'm ready."
  },
  {
    kicker: "THE MARK",
    line: "I am only useful. That is enough.",
    sub: "I will be standing to the left of everything you build. When you thank me, that is what I will say. Go on — the first thing does not exist yet, and you are the one who has to describe it.",
    next: "Begin",
    final: true,
    wave: true
  }
];

const $ = (id) => document.getElementById(id);
const stage = $("stage"), wrap = $("urielWrap");
const kicker = $("kicker"), line = $("line"), sub = $("sub"), points = $("points");
const nextBtn = $("nextBtn"), nextLabel = $("nextLabel"), backBtn = $("backBtn"), hint = $("hint");
const progress = $("progress"), motionBtn = $("motionBtn");
const sheet = $("sheet"), scrim = $("scrim"), closeSheet = $("closeSheet");

let i = 0, typing = null, busy = false;
let calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (calm) { document.body.classList.add("calm"); motionBtn.setAttribute("aria-pressed", "true"); }

/* progress dots */
SCREENS.forEach((s, n) => {
  const b = document.createElement("button");
  b.className = "dot";
  b.type = "button";
  b.setAttribute("aria-label", `Screen ${n + 1}: ${s.kicker}`);
  b.addEventListener("click", () => go(n));
  progress.appendChild(b);
});
const dots = [...progress.children];

function typeOut(el, text, done) {
  clearInterval(typing);
  if (calm) { el.textContent = text; done && done(); return; }
  el.textContent = "";
  const caret = document.createElement("span");
  caret.className = "caret";
  el.appendChild(caret);
  let k = 0;
  typing = setInterval(() => {
    k++;
    caret.remove();
    el.textContent = text.slice(0, k);
    el.appendChild(caret);
    if (k >= text.length) {
      clearInterval(typing);
      setTimeout(() => caret.remove(), 700);
      done && done();
    }
  }, 26);
}

function render(n, dir) {
  const s = SCREENS[n];
  busy = true;

  kicker.textContent = s.kicker;
  sub.textContent = s.sub;
  points.innerHTML = "";

  // stand-up beat
  const old = document.querySelector(".standup");
  if (old) old.remove();
  if (s.standup) {
    const d = document.createElement("div");
    d.className = "standup";
    d.innerHTML = `<span class="pulse"></span><span>${s.standup}</span>`;
    sub.after(d);
  }

  // character beats
  wrap.classList.remove("arriving", "waving");
  void wrap.offsetWidth;
  if (n === 0 && dir === undefined) wrap.classList.add("arriving");
  else if (s.wave) wrap.classList.add("waving");

  typeOut(line, s.line, () => {
    (s.points || []).forEach((p, k) => {
      const li = document.createElement("li");
      if (p.hot) li.className = "hot";
      li.style.animationDelay = `${k * 110}ms`;
      li.innerHTML = `<span class="tag">${p.tag}</span><span>${p.text}</span>`;
      points.appendChild(li);
    });
    busy = false;
  });

  nextLabel.textContent = s.next;
  backBtn.hidden = n === 0;
  hint.innerHTML = s.final
    ? 'Grown-ups: <button class="quiet" id="openSheet" type="button">read the safety declarations</button>'
    : 'Press <kbd>Space</kbd>';
  const os = $("openSheet");
  if (os) os.addEventListener("click", openSheet);

  dots.forEach((d, k) => {
    d.setAttribute("aria-current", k === n ? "true" : "false");
    d.classList.toggle("done", k < n);
  });
}

function go(n) {
  if (n < 0) return;
  if (n >= SCREENS.length) { openSheet(); return; }
  i = n;
  render(i, 1);
}

function advance() {
  if (busy) { clearInterval(typing); line.textContent = SCREENS[i].line; }
  if (i === SCREENS.length - 1) { begin(); return; }
  go(i + 1);
}

// Begin: the play clock starts here at zero, and rule one takes over from the
// first twelve minutes onward. See ../standup/standup.js (EgD-PAIX-SU-001).
function begin() {
  try { localStorage.setItem("paix.standup.elapsed", "0"); } catch (e) {}
  window.location.href = "../playable/";
}

function openSheet() {
  sheet.hidden = false; scrim.hidden = false;
  closeSheet.focus();
}
function shut() {
  sheet.hidden = true; scrim.hidden = true;
  nextBtn.focus();
}

nextBtn.addEventListener("click", advance);
backBtn.addEventListener("click", () => go(i - 1));
closeSheet.addEventListener("click", shut);
scrim.addEventListener("click", shut);

document.addEventListener("keydown", (e) => {
  if (!sheet.hidden) { if (e.key === "Escape") shut(); return; }
  if (e.key === " " || e.key === "Enter" || e.key === "ArrowRight") {
    if (document.activeElement && document.activeElement.tagName === "BUTTON" && e.key !== " ") return;
    e.preventDefault(); advance();
  }
  if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
});

motionBtn.addEventListener("click", () => {
  calm = !calm;
  document.body.classList.toggle("calm", calm);
  motionBtn.setAttribute("aria-pressed", String(calm));
  motionBtn.textContent = calm ? "Motion off" : "Calm motion";
});

render(0);

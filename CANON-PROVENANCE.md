# CANON-PROVENANCE

This file records the provenance relationship between this repository
(`paix-educational-game`) and the parent education stream
(`eve-glyph-education`).

## Ordering

1. **Canon of record.** The design canon for the EVE Glyph Design education
   stream — *why the game exists, what it protects, what it refuses to do* —
   lives in the private repository
   [`EVEglyphDesign/eve-glyph-education`](https://github.com/EVEglyphDesign/eve-glyph-education),
   primarily under `eve-glyph-education/game/design/`, `game/loss-conditions/`,
   and `game/village/design/`.

2. **Working development home.** This repository —
   `EVEglyphDesign/paix-educational-game` — is the **working development home
   for the PAIX game itself**: the playable, the gamification engine, the
   village surface, the curriculum generator, and the parish-integration
   layer. New game commits happen here.

3. **Parish framing.** This repository presents the game under its
   **parishioner-facing name (PAIX)** and holds the parish-appropriate framing
   (README, `docs/` landing, catechetical review gate). The generic,
   non-parish-framed demonstration of the underlying Spinning Sphere lives at
   the [Victoria](https://github.com/EVEglyphDesign/victoria-digital-twin-training-surface)
   public surface.

## Seed commit

This repository was seeded on **2026-07-19** from
`eve-glyph-education@main`, tree path `game/`, mirroring the following
subtrees verbatim:

- `game/design/` → `design/`
- `game/playable/` → `playable/`
- `game/village/` → `village/`
- `game/loss-conditions/` → `loss-conditions/`
- `game/gamification-engine/` → `gamification-engine/`
- `game/curriculum-generator/` → `curriculum-generator/`
- `game/integration-layer/` → `integration-layer/`

The corresponding paths in `eve-glyph-education/game/` are hereby marked as
*mirrored-from-here* going forward. Any authoritative game-code change should
land in this repository first, then be reflected back into the parent stream
if the parent still needs a local copy for canon-adjacent references.

## Non-negotiable framing constraints (inherited)

Any future edit to this repository must preserve these framing constraints,
which are inherited from the canon:

- **Fictional imagery, real cognitive imprint.** The Spinning Sphere and its
  "ideal world" imagery are presented unambiguously as a picture of the
  concept as it appears in the operator's own imagination — **not** as a
  claim about how anything is or should be in the real world.
- **No accounts, no backend, no external calls** beyond CDN fonts, in the
  first playable parish surface.
- **Consent-gated loved-things registry.** Loss conditions render only what
  the operator has consented to place at risk, and preserve that registry
  across resets.
- **Catechetical review gate.** No catechetical output ships to parishioners
  until Church doctrinal-conformance review is complete.
- **Safety first, betterment second.** Safety veto precedes any improvement,
  monetization, or scale claim.

## Change protocol

- Substantive canon changes (purpose, safety, framing, ordering) must be
  discussed in `eve-glyph-education` first and mirrored down.
- Playable, engine, village, and curriculum-generator code changes land
  here.
- README and `docs/` framing changes land here.

## Narrator canon — URIEL (added 2026-07-25)

- **Character seated:** URIEL, one of the seven holy watchers of *1 Enoch 20* —
  the watcher sent to warn Noah, and the one who walks Enoch through the courses
  of the luminaries. Chosen as the child-facing narrator because he arrives from
  outside, explains the machinery, and leaves. Friendly, peaceful, useful.
- **Penemue is benched.** The writing-gift lineage stays with the truth-ledger
  lane. He is not the child-facing voice and does not appear in the opening.
- **Conformance:** URIEL is seated without amendment to the nine constitutional
  traits in `design/avatar-design.md`.
- **Plate:** `design/uriel-plate-1.png` (cream ground, editorial plate) and
  `docs/opening/assets/uriel.png` (transparent cutout, animatable).
- **Narrator card:** `docs/EVEglyphDesign_URIEL_Narrator_Card.pdf` —
  Document ID `EgD-PAIX-NAR-001`, Key ID `EgD-KEY-2026-07`,
  SHA-256 (content) `99ba435ee53a211a7b02926df0ce2deb399efb7daa3c0f5e362eaa0b1a89de2c`,
  issued 2026-07-25T19:27:59Z. Controlled copy — the provenance block travels
  with the document.
- **Opening sequence:** `docs/opening/` — Document ID `EgD-PAIX-OPEN-001`.
  Six screens, no backend, no accounts, no external calls beyond CDN fonts.
  Palette locked to cream `#fdfaf4`, ink `#1a1a1a`, line `#e7e1d3`, single
  accent orange `#e87722` (the lantern only). Fraunces display, Inter body.

### Safety declarations stated in the opening, in URIEL's own voice

These are commitments the surface makes to the parent before play begins. Any
future change to the game that breaks one of them breaks canon.

1. **The Stand-Up.** Every twelve minutes the game stops. Eyes to the farthest
   thing in the room, spine straight, chin back over the shoulders. Not
   skippable, not a penalty. Posture is enforced by the narrator, not the parent.
2. **No open chat, no strangers, no voice, no friend requests.** There is no
   channel through which an adult can reach a child inside PAIX.
3. **No camera, no microphone, no image or video upload.** Indecent material
   cannot be pushed in and no image of a child can be taken out. The pipe does
   not exist.
4. **No advertising, no third-party trackers, no outbound links.** The world is
   closed, not moderated.
5. **No infinite scroll, no streaks, no loot boxes, no punishing timers.**
   Nothing is engineered to be hard to stop.
6. **No accounts sold, no child data brokered.** Progress stays on the device.
7. **Imagination precedes machinery.** Nothing is generated for a child before
   the child has described what should exist. That order never reverses.

*Pour le bien-être du peuple.*

## Rule one as a component — The Stand-Up (added 2026-07-25)

- **File:** `docs/standup/standup.js` — Document ID `EgD-PAIX-SU-001`.
  Self-contained ES module, also exposed as `window.PaixStandUp`. No build step,
  no dependencies, no backend. Ships its own styles and DOM.
- **Harness:** `docs/standup/` — integration page any level can copy from,
  with a fast-forward for review.
- **Spec:** `docs/EVEglyphDesign_The_StandUp_Integration_Spec.pdf` —
  Document ID `EgD-PAIX-SU-001`, Key ID `EgD-KEY-2026-07`,
  SHA-256 (content) `f7b70db7524d5e5aa42b6f710d28c9de1205db1ff9aad888cb4096f0342b25f7`,
  issued 2026-07-25T20:30:52Z. Controlled copy.
- **Live in:** `docs/playable/` (Spinning Sphere). The loop freezes on
  `window.__paixFrozen` and resets its frame delta, so resume is seamless.
- **Opening handoff:** the Begin button on screen six of `docs/opening/` zeroes
  the play clock and hands the child to the playable, where rule one takes over.

### Binding properties — a change to any of these is a canon breach

1. **Not skippable.** No dismiss control, Escape swallowed, click-outside inert,
   focus trapped. Neither the child nor the importing level can suppress it.
2. **Not a penalty.** The level is frozen, not merely covered. No timer runs
   down, no streak breaks, no progress is lost, and the panel says so on screen.
3. **Seated alternative, never a skip.** A child who cannot stand gets the same
   beat sitting down, one click away. Accommodation is not opting out.
4. **Never scored or rewarded.** A rewarded stretch is a manipulated stretch.
5. **Twelve minutes maximum interval.** `intervalMs` may be lowered for younger
   cohorts. It may never be raised.
6. **No network call beyond CDN fonts, no account, no child data off the
   device.** The only thing written is a millisecond count in localStorage, and
   `persist: false` removes even that.
7. **URIEL does the stretch badly, alongside the child.** No shame, no grading.

The stretch itself: EYES 20s (farthest thing in the room), SPINE 20s (stand,
chin back over the shoulders), REACH 20s (reach up, lean each way), then a
six-second closing beat. Sixty-six seconds out of every twelve minutes.

*Pour le bien-être du peuple.*

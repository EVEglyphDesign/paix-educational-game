# The Spinning Sphere — playable instance

This directory holds the **first worked, playable instance** of the spinning-sphere
training instrument described in the game canon. It is a self-contained
HTML + `<canvas>` build: no framework, no build step, no backend, no accounts,
and no dependency on any hosting platform. It can be opened directly from the
filesystem or copied to any static host.

## Provenance

The **doctrine lives here**, in `eve-glyph-education/game/`. This `playable/`
directory is a materialisation of that doctrine, not a replacement for it. The
canonical source of truth for every design decision below remains the design
documents in `../design/`:

- `../design/universal-game-design.md` — the instrument's purpose and stance
  ("a training instrument, not entertainment").
- `../design/start-position-in-game.md` — the mandatory start-position gate
  (posture, verbal anchor, named invariant C, footprint, speed declaration)
  that must be completed before play.
- `../design/spinning-sphere-simulation.md` — the simulation itself: triangle
  → add agents → the structure rounds into a sphere → balance vs. wobble →
  explosion and loss coupling. A = forward vector (red), B = backward vector
  (blue), C = the gold invariant witness, added agents = green.
- `../design/avatar-design.md` — the friendly procedural guide: permanent
  slight smile, colour-stable, one-frame recognizable, slight asymmetry.
- `../loss-conditions/` and the loss-condition design canon — the
  consent-gated loved-things registry, named at the start, rendered verbatim,
  with **fictional** destruction that leaves a real imprint and is preserved
  across resets.

## First worked instance

The first deployed, publicly reachable instance of this build is served from
the **Victoria** repository's single public surface, at the `/game/` path of
its GitHub Pages site. Victoria hosts the demonstration surface; this EDU
repository holds the canon it is built from. The two are kept in sync by
copying the same `index.html` and `game.js` into both places — EDU as the
canon of record, Victoria as the live demonstration.

## Hard framing constraint (non-negotiable)

The sphere and its "ideal world" imagery are presented **unambiguously as a
picture of the concept as it appears in the operator's own imagination**. The
instrument states, in-game, that it is a video game for practicing
classification and consulting concepts through play, and that it is **not** a
claim about how anything is or should be in the real world. Any future edit to
this instance must preserve that framing exactly.

## The lesson

You steady the sphere because you love what rides on it. **Love is the key to
infinity. ♥️🔑♾️** The guide loves you 👽♥️🥰, and the instrument closes on a
prayer for peace 👁️🙏✌️.

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design
principles — all rights reserved. Stewardship of rights of use and assignment
for large public and institutional usage rests with the Pacific Utilities
Design Council. Published as a time-stamped record of authorship and intent.

*Pour le bien-être du peuple.*

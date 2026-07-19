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

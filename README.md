# PAIX — Parishioner-Facing Educational Video Game

> *One good deed. One witness. One hour. One token.*
> *Pour le bien-être du peuple.*

**PAIX** (French for *peace*) is the parishioner-facing educational video game
distributed through the Catholic parish and Church portal. It is the game
surface of the broader **EVE Glyph Design** education program — the same
instrument used elsewhere as *Starship Academy* for enterprise/adult learners,
now framed for the parish context.

This repository is the **working development home** for the PAIX game.
Canon lineage — the design documents that describe *why* the game exists and
*what* it must protect — remains in the private
[`EVEglyphDesign/eve-glyph-education`](https://github.com/EVEglyphDesign/eve-glyph-education)
repository. See [`CANON-PROVENANCE.md`](./CANON-PROVENANCE.md) for the
authoritative mapping.

## What PAIX is

PAIX is an **educational instrument first**, distributed through the Church as
one trusted channel among several. Religious education is one part of the
program, not the whole. The game carries broader educational functions and
stays compatible with Catholic doctrine wherever catechetical content
appears.

- **Education first, religion as subsection.** The parent program is
  education; catechesis is one lane inside it.
- **Fixed-output catechetical path.** Catechetical outputs are hardened
  toward reviewed, deterministic answers — not open-ended generative guesses —
  before any parishioner release. Any catechetical surface in this repository
  ships *disabled* until Church review is complete.
- **Parish-embedded distribution.** PAIX is intended to be reached through the
  parish portal at
  [`eveglyphdesign.github.io/paix-parish-platform`](https://eveglyphdesign.github.io/paix-parish-platform/),
  not marketed as a standalone secular game.
- **Enterprise track stays separate.** *Starship Academy* names the
  enterprise/adult curriculum surface; *PAIX* names the parish surface.
- **Safety first, betterment second.** No child, parent, or parishioner
  should be worse off after playing than before. If in doubt, the game
  refuses to render rather than risk harm.

## What is in this repository

| Path | What it holds |
|---|---|
| [`playable/`](./playable) | The first worked, playable instance of the Spinning Sphere training instrument — a self-contained HTML + `<canvas>` build with no framework, no build step, no backend, and no accounts. Fictional imagery, real cognitive imprint. |
| [`design/`](./design) | The universal game design canon: purpose, start position, spinning-sphere simulation, avatar, speed discipline, callsign glyph, intake and graduation. |
| [`village/`](./village) | The **Village lane** — the school/cohort-scoped, voice-first, service-and-evidence common surface for children *inside* the console. Not a social network; movement and voice are the interaction metaphors. |
| [`loss-conditions/`](./loss-conditions) | The consent-gated loved-things registry, fictional destruction that leaves a real imprint, and the reset-across-sessions preservation rule. |
| [`gamification-engine/`](./gamification-engine) | Journey / progress / nodes engine (TypeScript). Not yet wired to the playable; the playable is deliberately backend-free for the first parish surface. |
| [`curriculum-generator/`](./curriculum-generator) | The adaptive curriculum stub — failures route here to generate the next lesson. |
| [`integration-layer/`](./integration-layer) | Where parish-portal integration and Church review hooks will live. |
| [`docs/`](./docs) | The public GitHub Pages landing for this repository. |

## Where PAIX ships to parishioners

PAIX itself is designed to be **embedded**, not standalone. The parishioner
enters through the parish portal:

- **Parish portal:** [`paix-parish-platform`](https://eveglyphdesign.github.io/paix-parish-platform/)
- **Holy Trinity Lenexa pilot (mutual-aid caisse):** [`holy-trinity-caisse`](https://eveglyphdesign.github.io/holy-trinity-caisse/)
- **This repository's public reading surface:** [`eveglyphdesign.github.io/paix-educational-game`](https://eveglyphdesign.github.io/paix-educational-game/)
  *(development landing only — not the parishioner distribution point)*

The demonstration surface for the underlying Spinning Sphere instrument
(non-parish framing, for workshop and consulting use) is
[Victoria](https://github.com/EVEglyphDesign/victoria-digital-twin-training-surface).

## Governance and rights

- **Copyright.** © 2026 Dany Theriault. EVE "digital stem cell" glyph and
  glyph-based design principles — all rights reserved.
- **Stewardship.** Rights of use and assignment for large public and
  institutional usage rest with the Pacific Utilities Design Council.
- **Church review gate.** No catechetical content ships to parishioners
  from this repository until the doctrinal-conformance review is complete.
  See [`design/certification-gated-digital-twin-access.md`](./design/certification-gated-digital-twin-access.md)
  for the certification pattern this project inherits.
- **Safety-first ordering.** See the Brain concept
  *safety-first-betterment-second* — safety veto precedes any improvement,
  monetization, or scale claim.

## Related surfaces

- [`eve-glyph-education`](https://github.com/EVEglyphDesign/eve-glyph-education) — private canon of record for the education stream
- [`eve-glyph-education-public`](https://github.com/EVEglyphDesign/eve-glyph-education-public) — public reading mirror of the education stream
- [`paix-parish-platform`](https://github.com/EVEglyphDesign/paix-parish-platform) — six-parish multi-parish demo
- [`holy-trinity-caisse`](https://github.com/EVEglyphDesign/holy-trinity-caisse) — Holy Trinity Lenexa mutual-aid economy pilot
- [`eve-hyperloop`](https://github.com/EVEglyphDesign/eve-hyperloop) — adjacent children's twin-onboarding game
- [`starship-academy-training-series`](https://github.com/EVEglyphDesign/starship-academy-training-series) — enterprise/adult education label

---

*Published as a time-stamped record of authorship and intent.*

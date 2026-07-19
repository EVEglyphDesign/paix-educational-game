# The Village

**A shared, underspecified, voice-first common surface for children inside the console.**

**Pour le bien-être du peuple.**

---

## What this is

The village is the console's common surface. It is where children go when lesson time ends. It is a shared spatial world — simple, blank at the start, filled in by the children and, over time, by open-source contributors.

It is not a feed. It is not a chat app. It is not a game world in the modern sense. It is a place. Children move inside the place, find each other, talk to each other, build small forts, cross bridges, and — as a byproduct of shared presence — communicate.

The village is the answer to the immediate problem the West is failing to solve: children need a way to be together on their devices that does not train them into thumb-scroll addiction, does not expose them to predatory precognition-loading, does not reduce their imagination, and does not require the adult world to strip them of their friend group as the price of safety.

The village is that place.

---

## What it is not

- It is not a filter on top of someone else's feed.
- It is not a standalone messaging app competing with Snap.
- It is not a game with authored quests, characters, or a rendered world.
- It is not a social network. The village has no global surface, no discoverability, no strangers.
- It is not built to be held. When a steward — a school network, a diocese, a community — is ready to run it, it is delivered.

---

## Who it is for

Children, ages 6–14. Same audience as the handbook and the game. See [`docs/audience.md`](../../docs/audience.md).

The village runs inside the console. A child who has never played the game and never read the handbook can still visit the village, but the village is designed on the assumption that the child is inside the education stream — that they have a personal icon, that they are learning glyph literacy, that lesson time and common time are partitioned parts of their day.

---

## How it fits the console

The console already has:

- The **handbook** — the reading surface
- The **game** — the play and classification surface
- The **curriculum generator** — the lesson-authoring engine
- The **gamification engine** — the progression layer
- The **integration layer** — the biological substrate roadmap
- The **loss-conditions** — the stakes-teaching surface

The village is the **social surface.** The seventh addition. Same doctrine, same data posture, same authorship, same stewardship. Not a separate product.

---

## The design laws

The village is governed by seven design laws. The first is the axiom the other six inherit from.

| # | Law | File |
|---|---|---|
| 0 | The underspecified surface | [`design/underspecified-surface.md`](./design/underspecified-surface.md) |
| 1 | Time partition — lesson mode and common mode never overlap | [`design/time-partition.md`](./design/time-partition.md) |
| 2 | Voice-first interface — screen is a compass, not a window | [`design/voice-first-interface.md`](./design/voice-first-interface.md) |
| 3 | Spatial social — movement is the cost of contact | [`design/spatial-social.md`](./design/spatial-social.md) |
| 4 | Service and evidence — credibility is earned in the real world | [`design/service-and-evidence.md`](./design/service-and-evidence.md) |
| 5 | Earned broadcast — group message is a privilege, not a default | [`design/earned-broadcast.md`](./design/earned-broadcast.md) |
| 6 | Status-signal alignment — peer status points at pro-social behavior | [`design/status-signal-alignment.md`](./design/status-signal-alignment.md) |

Read `underspecified-surface.md` first. The other six are applications of it.

---

## Data posture

Inherited unchanged from [`docs/game-design.md`](../../docs/game-design.md):

- No behavioral profiles sent to servers. Village state is on-device.
- No advertising. No brokering. Ever.
- No global directory. Children are visible only to their own bubble.
- Messages between children are end-to-end encrypted. Media stored on infrastructure the steward controls, not on the Operator's infrastructure.
- No account required beyond what the steward's identity provider already issues.

The village adds no new data collection beyond what the game already requires. Any steward that adopts the village accepts this posture as a condition of adoption.

---

## Stewardship

The village is developed here, inside `eve-glyph-education`, under the EVE Glyph Design umbrella. It is built to be handed off.

The intended stewards are communities that already have:

- A roster of children (school, diocese, parish network)
- A trusted adult layer (staff, parents, clergy)
- A device management posture (school MDM, family-issued devices)
- A doctrinal or civic reason for taking responsibility for children's formation

When a steward is ready, the village is delivered. The Operator does not run children's platforms.

**Pour le bien-être du peuple.**

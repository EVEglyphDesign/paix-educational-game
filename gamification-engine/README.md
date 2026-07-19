# Gamification Engine — Repo-as-Save-File (Victoria instance)

## What this is

The first **shipped, working** gamification engine for the EVE Glyph adaptive game. It renders the [spinning-sphere mechanic](../design/spinning-sphere-simulation.md) as a live, playable progress system where **the cadet's own GitHub repository is the save file** — no backend, no account, no vendor lock-in, and specifically **no Perplexity in the chain**.

This directory reflects, in the canon EDU repo, gamification that was first built and deployed in the **Victoria** instance ([EVEglyphDesign/Victoria](https://github.com/EVEglyphDesign/Victoria), live at [eveglyphdesign.github.io/Victoria](https://eveglyphdesign.github.io/Victoria/)). The design doctrine lives here; Victoria is the first worked instance.

**Scope note:** this reflection is **Victoria-specific by intent** (per operator direction, 2026-07-11). The engine is written against one repo (`REPO_OWNER`/`REPO_NAME` in `progress.ts`). Generalizing it so any cadet's repo becomes their save file is deferred until a second cadet exists.

## Files

| File | What it is |
|---|---|
| [`progress.ts`](progress.ts) | The engine. Reads the public GitHub contents API for three twin-layer folders, computes a 0–100 completeness score, assigns a certification tier, and evaluates guided quests. No auth, no backend. |
| [`JourneyPanel.tsx`](JourneyPanel.tsx) | The React UI: score ring (three vector arcs that light and close as layers fill), tier display, layer bars, quest checklist. This is the sphere-close, rendered. |
| [`nodes.ts`](nodes.ts) | Minimal vector metadata (`Vector` type + `VECTOR_META` colors) the panel imports as `@/lib/nodes`. Faithful trimmed copy from Victoria so the engine is self-contained here. |
| [`tsconfig.json`](tsconfig.json) / [`package.json`](package.json) | The build harness (see below). |

The engine files are copied verbatim from the shipped Victoria build so the canon repo carries the real, deployed engine — not a paraphrase of it.

## Build harness

The canon repo can now **compile** this engine, not just carry it. The harness is a minimal local TypeScript type-check — no bundler, no backend, no vendor lock-in.

```bash
cd game/gamification-engine
npm install        # react, @types/react, lucide-react, typescript (dev only)
npm run typecheck  # tsc --noEmit -p tsconfig.json
```

The `@/lib/progress` and `@/lib/nodes` imports resolve via `tsconfig.json` path aliases pointing at the files in this folder, so the vendored code runs **unchanged** from how it ships in Victoria (no edits to the engine to make it compile).

**Verified:** `tsc --noEmit` passes with exit 0 under `strict` mode across `progress.ts`, `nodes.ts`, and `JourneyPanel.tsx` (checked 2026-07-11). `node_modules/` and `package-lock.json` are gitignored — run `npm install` locally to reproduce.

## Live page (Vite)

Beyond type-checking, the [`web/`](web) folder is a Vite app that **mounts `JourneyPanel` as a real, running page** — the sphere-close visual, live twin score, tiers, and quests, rendered in a browser.

```bash
cd game/gamification-engine/web
npm install
npm run dev      # live dev server
npm run build    # static output to web/dist/ (deployable to GitHub Pages, S3, anywhere)
```

`vite.config.ts` aliases `@/lib/progress` and `@/lib/nodes` to the canon engine files one level up, so `JourneyPanel.tsx` is mounted **unchanged** — one source of truth, no copy drift. `base: "./"` makes the static build work from any subpath. Output is fully static: no backend, no vendor lock-in.

**Verified:** `vite build` completes with exit 0 (1573 modules); the built page renders in a headless browser with the panel mounted, six quests, live tier read from GitHub, and **zero console/page errors** at desktop (1280px) and mobile (390px) (checked 2026-07-11). `web/dist/` and `web/node_modules/` are gitignored — run `npm run build` locally to reproduce.

> Note: the live score reflects the repo the engine is configured against (`REPO_OWNER`/`REPO_NAME` in `progress.ts` — currently Victoria). The page reads real folder contents; it is not mocked.

## How it maps to the spinning-sphere canon

The engine is the [spinning-sphere simulation](../design/spinning-sphere-simulation.md) made playable. The mapping is direct:

| Spinning-sphere doctrine | Engine implementation |
|---|---|
| Triangle = three-fold structure, minimum stable carrier (Axiom 1) | Three twin layers: **Identity** (ancestry), **Capability** (technology), **Values** (faith) |
| Adding vectors → structure rounds toward a sphere | Each committed file in a layer adds depth; breadth across all three is the triangulation |
| Balance is achieved, not automatic; the sphere is harder to hold | Score = breadth (all three layers off zero = 60) + depth (further files = up to 40, capped) |
| Rounder = more sovereign, fully measured from every side | Tiers climb: Unmapped → First Bearing → Cross-Fixed → **Triangulated** (all three) → Sphere Forming (75+) → **Sovereign Twin** (100) |

## Scoring (as shipped)

- **Breadth:** `(filledLayers / 3) * 60` — getting all three layers off zero is the triangulation, worth 60.
- **Depth:** `min(40, extraFilesBeyondFirstPerLayer * 8)` — depth earns the remaining 40, capped.
- **Certification tiers** are threshold-gated: `>=100` Sovereign Twin, `>=75` Sphere Forming, all-three-filled = Triangulated, then Cross-Fixed / First Bearing / Unmapped.
- **Six guided quests** compute live checkmarks from real repo state (first file in each layer, all three filled, second file in any layer, reach 75+).

## Why the repo is the save file

Progress is read live from the cadet's public repository. That makes progress **portable across any device, survivable forever, and independent of any platform** — the core independence requirement. The game can be hosted anywhere (Victoria runs on free GitHub Pages) and the save state travels with the repo, not with a vendor.

## Handoff (Victoria-specific)

When the repo transfers from the steward account to the cadet, only two values change in `progress.ts` — `REPO_OWNER` and `REPO_NAME` — then rebuild. This is flagged with a `HANDOFF` comment at the top of the file. Nothing else changes.

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design principles — all rights reserved. Stewardship of rights of use and assignment for large public and institutional usage rests with the Pacific Utilities Design Council. Published as a time-stamped record of authorship and intent.

*Pour le bien-être du peuple.*

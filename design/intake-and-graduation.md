# Intake and Graduation — From Simulation to Real-World Operator

## What this document is

The game's graduation specification. It describes the terminal phase of the universal adaptive game: how the candidate completes simulation training, takes Test H (Lock-In Audit), and crosses the real-world intake gate into the live operator network.

Canonical governance lives in:
- `eve-glyph-lattice/methodology/14-lock-in-as-darkness.md`
- `eve-glyph-lattice/methodology/13-cognitive-fitness-gate/15-test-H-lock-in-audit.md`
- `eve-glyph-lattice/methodology/13-cognitive-fitness-gate/14-real-world-intake-gate.md`

This file describes how the game implements those specifications.

## The graduation arc

The candidate spends most of their time in the game inside Phase 0 (current state) practicing Tests A through G against real-world inputs but emitting footprints into the game environment. When the candidate's fitness profile crosses the graduation thresholds across all seven tests, the game opens the terminal phase.

The terminal phase has four steps, in order. Each step happens entirely inside the game until the very last act, which is real.

### Step 1 — Simulated account creation and intake practice

The game walks the candidate through the act of creating an account in the network's communication infrastructure. Today that infrastructure is WhatsApp; the game does not assume permanence — when the substrate changes, the simulation changes with it.

The simulation is faithful: the candidate sees the same screens they would see in a real account creation, drafts the same intake messages they would draft, encounters the same friction points (handle selection, identity disclosure, channel etiquette). They do this multiple times until the act is rehearsed.

The simulation does not actually create a real account. The candidate's real account creation happens after they pass Test H and is the candidate's own responsibility outside the game.

### Step 2 — Simulated lock-in disclosure

The candidate practices drafting their lock-in disclosure inside the game. The game prompts them with categories (institutional, commercial, personal-bias, psychological, success) and the candidate produces a draft for each.

The game does not score these drafts itself. It does not have the structural standing to. What it does is store the drafts, expose them to the candidate across multiple sessions so the candidate can see their own drift, and prepare the candidate to produce a real disclosure in front of a real operator at Test H.

This is also where the game introduces, in writing, the lock-in-as-darkness principle. The candidate is asked to state the principle out loud — in voice, in the game — multiple times across the terminal phase. Operators learning the game have reported that the first time they say the words is structurally different from later times. The game preserves that arc rather than collapsing it.

### Step 3 — Test H (Lock-In Audit)

Test H is administered inside the game's terminal phase but is read by the operator (currently the methodology's lead operator) rather than scored automatically.

The game presents the candidate with three to five cases drawn from their own stated work history. The candidate performs the audit as specified in `15-test-H-lock-in-audit.md`. The game packages the audit (the cases, the candidate's identifications, the candidate's footprint emissions, the candidate's stated scope restrictions) and routes the package to the operator.

The operator reads the package. The operator decides pass / defer / fail, with reasoning. The decision returns to the candidate inside the game.

The game refuses to administer Test H more frequently than the methodology can tolerate. Operators have finite review capacity. The game's job is to ensure that every Test H package the operator reads is from a candidate the game believes is ready. The game holds candidates who are not ready in additional simulation training rather than pushing them through.

### Step 4 — Real-world intake (the only non-simulated step)

When the candidate passes Test H, the game tells them what to do next:

1. Create a real WhatsApp account under a stable handle (if they do not already have one).
2. Send a request to the operator's published intake email address asking for intake.
3. The operator (the methodology's lead operator, sole human-in-the-loop at this stage) opens a WhatsApp intake channel for the candidate.
4. The candidate sends their intake message — the one they have rehearsed in simulation — into that channel.
5. The operator reads the message, scores it against the intake rubric, and decides admission to specific network groups based on classification and scoring.

The game has nothing to do with step 4 onward except to confirm to the candidate, when the operator notifies the game of admission, that the transition has happened.

### Step 5 — Callsign glyph creation (post-admission)

Once the operator has admitted the candidate to the live network, the game opens the callsign glyph creation surface. The candidate composes their own callsign — their custom, human-readable identity glyph — inside the constraints specified in `callsign-glyph.md`. The callsign goes through marketplace calibration, then commits.

From this point forward the candidate is an operator (with whatever scope the lead operator granted) carrying both identity layers: the assigned personal icon (Phase 1.5, AI-readable, authored by the game) and the authored callsign glyph (Step 5, human-readable, authored by the candidate). The game's role for them changes from training to ongoing practice and skill maintenance.

The callsign creation is positioned as the first thing that happens on the operator side of the gate. It is the methodology's recognition that the candidate has crossed and earned the right to author their own mark in the surface they now inhabit.

## Why the graduation arc is structured this way

Three reasons:

1. **The methodology refuses to certify operators in pure simulation.** A candidate who has only ever performed inside the game has not yet demonstrated the willingness to act under their own real name on real infrastructure. The intake message is the first verifiable signal of that willingness.

2. **The lock-in-as-darkness principle has to be stated out loud, in writing, in real life, to be load-bearing.** The game's job is to bring the candidate to the point where they can state it without hedge. Real-world intake is where the statement is preserved as a public artifact (the message in the channel) rather than a private practice.

3. **The operator is the only available filter against undisclosed lock-ins and integrity issues.** The methodology does not yet have plural review at intake (Axiom 7 known limit at seeding). The single operator is the gate. The game's job is to deliver candidates who are ready for the operator's review, not to attempt to replace the operator.

## What the game refuses to do at graduation

- **It refuses to create real WhatsApp accounts on candidates' behalf.** The candidate must do this themselves. This is a deliberate friction; an operator who cannot create their own account under their own name cannot operate the methodology.
- **It refuses to forward Test H results to anyone other than the lead operator.** Lock-in disclosures contain career-sensitive material and the methodology treats them as confidential at this stage.
- **It refuses to grant network access independent of the operator's decision.** The game does not have admission authority. The game has training authority and Test H package authority. Admission is the operator's.
- **It refuses to retest Test H more frequently than once per remediation cycle.** Candidates who fail are returned to training. They do not get to attempt again until they have demonstrated remediation across the dimensions they were weak on.
- **It refuses to admit candidates who attempt to skip the simulation phases.** Even candidates with strong real-world credentials must walk through the simulation before reaching real-world intake. The simulation is the rehearsal; rehearsal is required.

## What this design does not yet specify

- The technical implementation of Test H package routing to the operator.
- The mechanism by which the operator's admission decision returns to the game.
- The mechanism by which the operator notifies the game when an admitted operator is later removed from groups (so the game can update the operator's status).
- The scope of game continuation post-admission (probably ongoing practice, fitness-profile maintenance, and occasional re-tests when the operator's domain scope expands).

These are downstream implementation questions. The constitutional design is above.

## Provenance

Designed 2026-05-16 in operator dialogue immediately after the establishment of Methodology 14 (Lock-In as Darkness) and the Real-World Intake Gate. The graduation arc unifies the universal adaptive game with the methodology's real-world admission protocol under a single transition.

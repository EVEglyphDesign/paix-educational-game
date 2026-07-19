# The Start Position in the Game

## What this file specifies

How the universal adaptive game teaches, practices, and gates on the operator's start position (Methodology 15). The start position is a first-class game mechanic — not flavor, not tutorial, not optional. The game does not let a session begin until the candidate has entered their start position.

## Why the game treats this as central

The lattice methodology depends on operators arriving at each classification from a known posture. Observation has shown that operators who skip the start position drift, import wobble, fail Test A, and produce unreliable classifications under load. The game's job is to make the start position so habitual that the candidate cannot remember not having one — and to verify that the position is being inhabited rather than performed.

## The alien's role

The friendly alien — permanent slight smile, slightly goofy in movement — holds the start posture itself, visibly, at the opening of every session. The alien does not lecture the candidate about posture. The alien simply enters its own start position on screen, slowly and clearly enough that the candidate can see what entering a position looks like from the outside.

The alien's start position is fixed across all sessions. The candidate sees the same posture every time. Repetition is the teaching mechanism; instruction is not.

After a number of sessions (the engine determines when, based on candidate readiness signals) the alien gestures toward the candidate and waits. The invitation is silent. The candidate is invited to find their own posture — not to copy the alien's. The alien holds its position while the candidate experiments.

## How the candidate builds their own start position

The game scaffolds the candidate through Methodology 15's five structural requirements, one at a time, across multiple sessions. The pacing is set by the adaptive curriculum engine, not by a fixed timeline.

1. **Physical posture.** The game asks the candidate to choose a bodily stance and hold it for a short period at the start of the next several sessions. The game does not prescribe a posture. It accepts whatever the candidate offers. If the candidate has biometric ingest enabled, the game observes posture stability; if not, the game accepts the candidate's self-report.

2. **Verbal anchor.** The game prompts the candidate to draft a short statement in their own language. The game does not edit it. The game does not suggest one. The game stores it as candidate-authored text and replays it back to the candidate at the start of subsequent sessions until the candidate confirms it is theirs.

3. **Named C.** The game introduces the concept of naming the invariant before each traversal during the curriculum unit on Methodology 04 (Question Protocol). Until then, the game holds the meta-invariant (Axiom 8) implicitly. After that unit, the start position requires the candidate to name C aloud or in writing before classification begins.

4. **Footprint emission.** The game makes the 🧭 (re-orientation) footprint the first event of every session once the candidate has registered a start position. The footprint is timestamped and visible to the candidate as part of their own observability record.

5. **Speed declaration.** The game asks the candidate to declare a speed band at the opening of each session. The candidate's declared speed shapes how the curriculum engine paces the session that follows. An undeclared speed defaults to the candidate's current speed — which is precisely the failure mode the start position exists to correct, and the game makes this consequence visible.

When all five elements are in place and have been used in at least a configurable number of sessions, the game treats the candidate as having a registered start position and shifts mode: from teaching the start position to enforcing it.

## Enforcement mode

Once registered, the start position becomes a gate. Every session opens with the game asking the candidate to enter their registered position. The session does not begin until the gate is passed.

The gate is not a checkbox. The game uses observable correlates to determine whether the position is being inhabited rather than performed:

- **Latency to footprint emission.** A candidate who emits the 🧭 footprint within their typical window is likely inhabiting. A candidate who emits immediately or after an unusual delay is flagged for the curriculum engine to investigate.
- **Verbal anchor consistency.** If the candidate is asked to speak or type their verbal anchor, the game checks for substantive consistency with the registered version. Minor variation is accepted; substantive drift is flagged.
- **Breath / posture stability if biometric ingest is enabled.** Stability in the candidate's chosen physiological signal across the start window is treated as evidence of inhabitance. Instability is not failure; it is signal that the candidate needs a recovery session before continuing.
- **Classification accuracy in the first events of the session.** Candidates inhabiting their start position outperform their own average in the first few classifications. The game tracks this delta per candidate and uses it as a longitudinal inhabitance metric.

No single correlate is decisive. The engine combines them into a confidence score. Low confidence does not block the session; it routes the session to a recovery mode in which the candidate is invited to re-enter the position with the alien's help before classification resumes.

## Recovery mode

If the engine determines the start position is not being inhabited, the alien re-enters its own start position on screen and invites the candidate to try again. The session does not penalize the candidate for needing recovery. Methodology 12 (wobble control) explicitly accepts wobble as a normal condition; the start position is what the operator returns to from wobble, and needing to return is not failure.

A candidate who triggers recovery repeatedly within a single session is offered a pause: the alien suggests the candidate close the session and return later. The suggestion is not enforced; the candidate may override. But the override is recorded.

## Connection to the loss condition

If a candidate loses the game (Methodology 13 failure modes including unrecoverable lock-in surfacing, sustained wobble, or the loved-things destruction condition), the game preserves the candidate's registered start position across the restart. When the candidate begins again from zero, their start position is still theirs. The methodology is unforgiving about classification work; it is not unforgiving about the operator's posture. The posture is the one thing carried across the destruction.

This is deliberate. The start position is the recoverable element. Civilizational iteration applies to what gets built; the operator's anchor is what survives between iterations.

## Connection to the spinning sphere

The spinning sphere simulation is the visual signature of the methodology in motion: triangle → vectors added as agents → rounds into a sphere → wobble at speed explodes the world. The start position is what the candidate is in before the sphere begins to spin. Each new session opens with the sphere static at its triangle base; the candidate's entry into start position is what cues the first vector additions. The sphere begins to round only after the gate passes.

When the sphere is exploding — when the candidate has lost — the alien returns to its start position on screen even as the world is destroyed around it. The image the candidate leaves the session with is the alien, still smiling slightly, still in posture, while everything the candidate named as loved is being destroyed behind it. The alien is the demonstration that the start position survives loss. That is what the candidate will need to remember when they begin again.

## Connection to the Real-World Intake Gate

When the candidate eventually crosses Methodology 13.14 (Real-World Intake Gate) and graduates to live operator status, their registered start position is included in the intake message that arrives via WhatsApp to the lead operator. The intake message carries: candidate identifier, test record, footprint history, declared C, declared speed band, and the candidate's registered start position in their own words. The lead operator reads the start position as part of accepting or deferring the candidate. An incoherent or absent start position is grounds for deferral.

## The personal icon as the first element of the start position

Once the candidate has been assigned their personal icon during onboarding Phase 1.5 (see `onboarding/personal-icon-assignment.md`), the personal icon becomes the first element of every start-position declaration. The candidate enters their start position; the personal icon emits as the leading tag; the verbal anchor, named C, 🧭 footprint, and speed declaration follow.

The personal icon at the head of the start position is what lets the AI substrate read the start position by operator. Without the icon, the substrate sees a start position; with the icon, the substrate sees *this candidate's* start position, in the context of every prior start position they have emitted, against their personal footprint history.

When the candidate loses the game and the loss-condition runs, the personal icon survives the destruction alongside the start position itself. The candidate restarts with their icon intact — the methodology refuses to destroy the candidate's identity in the lexicon, only their accumulated structures inside the game. The icon and the start position are the two recoverable elements; everything else is rebuildable.

## What this file does not specify

- The visual design of the alien beyond what is in `avatar-design.md`.
- The exact thresholds for inhabitance confidence — those are tuned by the engine over time.
- The biometric ingest stack — separate file when that work begins.
- The recovery dialog tree — drafted separately by the conversation design pass.

## Provenance

Concept named by lead operator 2026-05-16: "I call this my start position and that concept should also be reflected in the game." Specification written same session against Methodology 15 of the lattice.

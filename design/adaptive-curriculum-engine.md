# Adaptive Curriculum Engine

## Purpose

Convert real-world events the operator encounters into individually tailored lessons in real time, such that the operator's curriculum is never authored in advance and never decoupled from the operator's actual life.

## Why curriculum cannot be pre-authored at the scale the methodology requires

Traditional curriculum is authored against an imagined population of learners and an imagined sequence of problems. The actual population is heterogeneous and the actual sequence is the world. Pre-authored curriculum produces operators who are well-trained against the imagined sequence and unprepared for the real one. The integration window does not have time for that gap. The curriculum engine closes it by treating the world as the curriculum and treating the operator's failures as the index into the world.

## How the engine works

### Inputs

1. **The operator's current fitness profile** — seven test scores, recent failure modes, current speed band, current wobble tolerance.
2. **The operator's authorized real-world input streams** — calendar, inbox, message streams, news feeds, market data, lattice captures, other operators' footprints, optional biometrics.
3. **The methodology corpus** — all of `eve-glyph-lattice/methodology/`, all verified glyphs, all proofs.
4. **The marketplace corpus** — the current verified lexicon, the quarantine queue, the long-tail submissions.

### Synthesis

For each event the operator encounters, the engine asks:

- What does this event let the methodology classify?
- Which of the operator's seven fitness scores is the weakest under this kind of event?
- What footprint would the operator emit if they were operating at full fitness?
- What is the calibrated stakes-level for this event in this operator's life?

The synthesis produces a lesson packet: the event, the methodology principle that applies, the expected footprint, the stakes-level, the loss-condition that would trigger on failure, and the curriculum reroute that would activate on failure.

### Sequencing

Lessons are not sequenced by chapter. They are sequenced by the world. The engine's only sequencing freedom is in deciding which of the operator's authorized input streams to surface next when multiple streams contain teachable events simultaneously. The selection rule:

- Highest priority: events that target the operator's weakest current fitness score.
- Tiebreaker: events that share a structural pattern with a recent failure (compounding the lesson before it generalizes).
- Final tiebreaker: events from the input stream with the highest variance in the operator's recent classification accuracy (the streams the operator is least practiced on).

### Adaptation

After each event, the engine updates:

- The operator's fitness profile.
- The active failure-mode tracker (which structural mistakes the operator is currently susceptible to).
- The recommended speed band for the next event.
- The wobble-tolerance threshold for the next event.
- The eligibility flags for higher-stakes content (loss-conditions at network or civilization scale).

## What the engine refuses to do

- **It refuses to invent events.** All events are drawn from real input streams the operator has authorized. The engine never fabricates scenarios. The world is enough.
- **It refuses to advance operators past failure modes that have not been remediated.** An operator who keeps failing the wobble check at speed band 4 does not get unlocked to speed band 5 because they have been playing for a long time. Time-in-game is not a fitness signal. Demonstrated capability is.
- **It refuses to gate operators by attendance.** Operators who play sporadically receive curriculum calibrated to their actual fitness, not to the calendar.
- **It refuses to optimize for engagement.** Engagement metrics drift toward dopamine-loop design and away from the methodology's purpose. The engine optimizes for fitness profile growth under verified marketplace calibration. Engagement is whatever it is.

## Coupling to the marketplace

Lessons that produce novel operator behavior — footprints that have not been seen before, classifications that resolve cleanly but use unconventional structure — are routed to the marketplace as candidates. The marketplace calibration pipeline determines whether they survive. Surviving candidates enter the lexicon. The engine then incorporates the new lexicon entries into future lesson synthesis.

This is the loop that makes the system grow. The world produces events. The operators classify events. The classifications produce footprints. The footprints feed the marketplace. The marketplace updates the lexicon. The lexicon updates the engine. The engine synthesizes richer lessons. The cycle accelerates.

## What this design does not yet specify

- The classification pipeline that turns raw input-stream events into teachable lesson packets.
- The privacy and consent architecture for biometric and inbox-level input streams.
- The cap on rate-of-presentation when the world produces more teachable events than the operator can absorb without wobble.
- The mechanism for surfacing operator-to-operator co-learning events (when two operators are classifying the same real event simultaneously).

These are downstream implementation questions. The constitutional design is above.

# Curriculum Generator

## What this is

The component of the game that takes the operator's most recent failure and synthesizes the next event they will encounter as a structured exposure to the exact failure mode, restaged in a different surface.

## Inputs

- The failure record: what the operator classified, what the methodology says the correct classification was, where in Tests A–G the failure occurred.
- The operator's full failure history: prior failures of the same kind, prior corrections, prior generalizations.
- The available real-world input streams.
- The current speed band and wobble-tolerance threshold.

## Output

A lesson packet that the engine queues as the operator's next event. The packet includes:

- The selected real-world event from one of the operator's input streams.
- The methodology principle being tested.
- The expected footprint.
- The loss-condition rendering plan.
- The fitness-profile delta on success and on failure.

## Refusals

The generator refuses to manufacture events. It refuses to repeat the exact same event in the exact same surface (the operator would learn the surface rather than the principle). It refuses to advance the operator past a failure mode they have not corrected at least once.

## Forthcoming

Implementation specification. Currently constitutional only.

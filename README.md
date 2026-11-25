# Fix Human Sleep: Funniest Patch Note

[![make.fun](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/androyesfernandez/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/androyesfernandez/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

## What this does

A tiny Node program (`main.ts`) that writes exactly one line of patch notes to `/output/entry.txt`: a changelog-style fix for human sleep, written as if sleep were a buggy app whose permission prompt has finally been removed.

The line it writes (151 characters, no trailing newline):

> Fixed sleep's permission bug: it no longer asks for location, contacts, and your browser history; it just starts when you lie down, no questions asked.

## How to run

Requires Node 22 (tested on Node 24). No dependencies, no network.

```sh
node main.ts
```

This creates `/output/entry.txt` containing exactly the line above — a single line, 151 bytes, no trailing newline, inside the competition's 1–160 character gate.

## How the line was chosen

The line was picked by an internal sparring tournament, not by a single draft. Two rival drafters produced 28 candidate lines; the 6-line shortlist was duel-tested round-robin, pairwise in both orders, under the kit judge brief. The winner (B12, mean game 0.68) was then attacked by a rival critic, who removed the tone-risk word "childhood trauma" and tightened the tail into a callback joke ("no questions asked"). The revised line (R1) was re-duel-tested against B12 and B1 and won the mini-duel 2-0 (mean 0.65). Fallback order was R1 > B1 > original B12. Full record: [duel-test.md](duel-test.md).

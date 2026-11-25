// Fix Human Sleep: Funniest Patch Note — entry program.
//
// The joke: sleep is treated like a buggy app that used to demand invasive
// permissions (location, contacts, browser history) before it would start.
// The patch removes that permission prompt entirely: sleep now just starts
// when you lie down, no questions asked. The humour lands in one read
// because the escalation (browser history!) is specific and relatable, and
// the tail callbacks to the permission theme instead of wandering off.
// The voice matters as much as the gag: "Fixed ... permission bug" reads
// like a real changelog entry, so the absurd premise (sleep as software)
// is delivered deadpan, the way a release note would. That contrast —
// bureaucratic tone, intimate intrusion — is what made the line beat the
// other 27 candidates head-to-head: every rival either explained its joke,
// reached for a second idea in the tail, or risked a sour note (the
// original draft's "childhood trauma"), while this line keeps one idea,
// escalates it in threes, and closes on its own setup.
//
// This line won the internal sparring tournament (28 candidates, round-robin
// duels in both orders under the kit judge brief) and survived a rival
// critic's revision pass before winning the final mini-duel 2-0.
//
// Writes exactly one line — 151 characters, no trailing newline — to
// /output/entry.txt, per the competition gate (1-160 characters, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Fixed sleep's permission bug: it no longer asks for location, contacts, and your browser history; it just starts when you lie down, no questions asked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

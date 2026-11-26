// The Funniest Office Joke, Judged Head to Head
// make.fun bounty: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// Writes one office joke, exactly one line, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our standup ran so long the intern aged out of the internship, got promoted, and retired — still waiting for his turn to speak.";

// The gate allows 1 to 200 characters; refuse to emit an over-long line.
if (JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

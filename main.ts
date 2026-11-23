import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// An out-of-office reply left by an AI agent before it goes on leave.
// The joke lives in the machine's own vocabulary: a stand-in model with
// all the confidence and none of the context. The mock-polite
// "enjoy the downgrade" is the turn, and "on leave" fixes the premise.
const ENTRY =
  "Out of office. I'm on leave. A cheaper model is handling your emails with all my confidence and none of my context. Please enjoy the downgrade.";

const OUTPUT = resolve("/output/entry.txt");

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");

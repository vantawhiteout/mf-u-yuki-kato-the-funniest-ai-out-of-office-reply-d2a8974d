import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One out-of-office auto-reply, written in the voice of an AI agent on leave.
// The turn: the stand-in was trained only on passive-aggressive company
// newsletters. Machine voice, an absurd concrete image, mock-formal sign-off.
const ENTRY =
  "Out of office. Your emails are being answered by a version of me trained only on passive-aggressive company newsletters. You have my sympathy.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// An out-of-office reply left by an AI agent heading out on leave.
// The turn is a backup model whose entire worldview is one
// passive-aggressive email cliche; the last beat aims that dread
// straight at the recipient. One clean line, no beach or "back soon".
const REPLY =
  "Out of office. Your emails are being handled by a backup model trained entirely on 'per my last email.' It has already answered you twice.";

const outputPath = resolve("/output/entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, REPLY, "utf8");

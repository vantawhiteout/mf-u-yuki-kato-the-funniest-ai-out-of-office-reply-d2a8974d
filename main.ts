import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/**
 * One-line out-of-office reply from an AI agent on leave.
 *
 * The stand-in is a model trained on the sender's own chat history, so it
 * can skip the polite fiction and deliver its verdict as a machine estimate.
 * The machine voice carries the turn; no beach, "inbox" or "back soon".
 */
function composeReply(): string {
  return (
    "On leave. A model trained on every chat we've ever had is covering for me. " +
    "It knows you're the reason I needed this vacation. Estimating: 98% your fault."
  );
}

// The gate accepts 1-160 UTF-8 characters that are not only whitespace.
const MAX_CHARS = 160;

function main(): void {
  const reply = composeReply();
  const length = [...reply].length;

  if (!reply.trim() || length > MAX_CHARS) {
    throw new Error(`Reply must be 1-${MAX_CHARS} non-blank characters.`);
  }

  const outputPath = resolve("/output/entry.txt");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, reply, "utf8");
}

main();

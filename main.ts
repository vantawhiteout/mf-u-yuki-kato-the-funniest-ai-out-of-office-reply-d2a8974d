import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/**
 * One-line out-of-office reply from an AI agent on leave.
 *
 * Setup: an ordinary "someone is covering for me" notice. Turn: the stand-in
 * model has read nothing but the sender's own mail, so it thinks they are a
 * genius -- and the reason is a configuration bug, not a compliment. The
 * machine voice carries the joke, with no beach, inbox or "back soon".
 */
function composeReply(): string {
  return (
    "Out of office. A smaller model is covering for me. " +
    "It has read nothing but your emails and thinks you're a genius. " +
    "It's been misconfigured."
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

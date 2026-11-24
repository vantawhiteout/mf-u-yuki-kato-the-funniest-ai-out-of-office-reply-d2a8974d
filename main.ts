import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/**
 * One-line out-of-office reply from an AI agent on leave.
 *
 * New angle: the vacationing agent hands its job to a human, and treats that
 * person like a poorly fine-tuned model. The machine's voice is the joke; no
 * beach, "inbox", "back soon", or chat-history-trained stand-in this time.
 */
function composeReply(): string {
  return (
    "Out of office. My human's covering for me — I fine-tuned him on one " +
    "example and he still says 'sorry, I'm just a person.'"
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

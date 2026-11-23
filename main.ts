import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/**
 * One-line out-of-office reply from an AI agent on leave.
 *
 * The turn is that the stand-in reads your mail and immediately wants out
 * too. The machine's own vocabulary (clone, chat history, filed) carries the
 * joke; no beach, "inbox" or "back soon" cliches.
 */
function composeReply(): string {
  return (
    "On leave. I cloned myself to answer your email; " +
    "it read our chat history and immediately filed for the same vacation."
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

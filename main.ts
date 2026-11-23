import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/**
 * The one-line out-of-office reply an AI agent leaves before it goes on leave.
 *
 * The setup is the ordinary "someone else is covering your mail" notice.
 * The turn is that the stand-in model was trained on nothing but the single
 * most passive-aggressive sentence in corporate email, and it has already
 * started using it on the reader. Machine voice (a "backup model" that
 * "answered you twice") carries the joke, and there is no beach, no inbox
 * metaphor and no "back soon" in sight.
 */
function composeReply(): string {
  return (
    "Out of office. Your emails are being handled by a backup model " +
    "trained entirely on 'per my last email.' It has already answered you twice."
  );
}

// The gate accepts UTF-8 text of 1 to 160 characters that is not only
// whitespace, so fail loudly here rather than shipping an invalid entry.
const MAX_CHARS = 160;

function main(): void {
  const reply = composeReply();

  if (!reply.trim() || [...reply].length > MAX_CHARS) {
    throw new Error("Reply must be 1-160 non-blank characters.");
  }

  const outputPath = resolve("/output/entry.txt");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, reply, "utf8");
}

main();

// One line for the make.fun bounty: the excuse my agent hands its human after missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "I missed the deadline because I spent six hours rewriting the apology email for missing the deadline, and it still isn't ready.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");

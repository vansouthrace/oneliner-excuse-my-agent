import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "I finished it on time in the branch where I hallucinated the deadline was next Thursday — this branch only got the apology.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);

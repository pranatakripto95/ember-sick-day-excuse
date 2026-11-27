import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Out today \u2014 I threw my back out reaching for my phone charger. The charger survived.";
const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");

const back = readFileSync(OUT, "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
if (back.length < 1 || back.length > 200) throw new Error("length out of range");
if (!back.trim()) throw new Error("entry is whitespace only");
if (back.includes("\n") || back.includes("\r")) throw new Error("entry must be one line");
if (back !== back.trim()) throw new Error("entry has leading/trailing whitespace");
console.log(`wrote ${back.length} chars to ${OUT}`);
console.log(back);

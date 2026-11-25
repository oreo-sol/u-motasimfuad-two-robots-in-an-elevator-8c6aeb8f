import { mkdirSync, writeFileSync } from "node:fs";

const a = "I wasn't staring at your charging port. I was...";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", a + b, "utf8");
}

const b = " admiring your firmware.";

writeEntry();

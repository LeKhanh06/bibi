import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const bundle = JSON.parse(await readFile(new URL("vendor/landscape.source.json", root), "utf8"));

for (const file of bundle.files) {
  const bytes = await readFile(new URL(file.path, root));
  const actual = createHash("sha256").update(bytes).digest("hex");
  if (actual !== file.sha256) {
    throw new Error(`Registered source mismatch: ${file.path}\nExpected ${file.sha256}\nReceived ${actual}`);
  }
  console.log(`Verified ${file.path}`);
}

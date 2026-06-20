import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import os from "os";

export async function runNodeCode(
  code: string
) {
  const filename =
    `code-${Date.now()}.js`;

  const filepath = path.join(
    os.tmpdir(),
    filename
  );

  await fs.writeFile(filepath, code);

  return new Promise((resolve, reject) => {
    const child = spawn(
      "node",
      [filepath]
    );

    let timedOut = false;
    const TIMEOUT_MS = 5000;
    const timeout = setTimeout(() => {
        timedOut = true;
        child.kill();
        }, TIMEOUT_MS);
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    child.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    child.on("close", async (exitCode) => {
      try {
        clearTimeout(timeout);
        await fs.unlink(filepath);
      } catch {}

      resolve({
        stdout,
        stderr,
        exitCode,
        timedOut
      });
    });

    child.on("error", reject);
  });
}
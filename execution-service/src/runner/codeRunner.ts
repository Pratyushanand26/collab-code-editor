import { spawn } from "child_process";
import fs from "fs/promises";
import os from "os";
import path from "path";
import { languageConfigs } from "./languageConfigs";

export async function runCode(
  code: string,
  language:string
) {
  const filename = `code-${Date.now()}.${languageConfigs[language as keyof typeof languageConfigs].extension}`;

  const filepath = path.join(
    os.tmpdir(),
    filename
  );

  await fs.writeFile(filepath, code);

  return new Promise((resolve, reject) => {
    const child = spawn("docker", [
        "run",
        "--rm",

        "--network",
        "none",

        "--memory",
        "64m",

        "--cpus",
        "0.5",

        "-v",
        `${os.tmpdir()}:/app`,

        "-w",
        "/app",

        languageConfigs[
            language as keyof typeof languageConfigs
        ].image,

        ...languageConfigs[
            language as keyof typeof languageConfigs
        ].command(filename),
        ]);


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
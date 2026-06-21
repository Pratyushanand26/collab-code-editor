import { fetchApi } from "./client";
import { ExecutionResult } from "../types";

export async function runCode(code: string, language: string): Promise<ExecutionResult> {
  return fetchApi<ExecutionResult>("/execute", {
    method: "POST", body: JSON.stringify({ code, language }),
  });
}

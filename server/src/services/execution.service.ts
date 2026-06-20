const EXECUTION_URL = "http://localhost:4000";

export async function executeCode(
  code: string,
  language: string
) {
  const response = await fetch(`${EXECUTION_URL}/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      language,
    }),
  });

  if (!response.ok) {
    throw new Error("execution service failed");
  }

  return response.json();
}
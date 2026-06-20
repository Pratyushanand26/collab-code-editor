import express from "express";
import cors from "cors";
import { runCode } from "./runner/codeRunner";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    service: "execution-service",
    status: "ok"
  });
});

app.post("/run", async (req, res) => {
  const { code, language } = req.body;

  console.log("received execution request");

  const result = await runCode(code,language);
  res.json(result);
});

app.listen(4000, () => {
  console.log("execution service running on 4000");
});
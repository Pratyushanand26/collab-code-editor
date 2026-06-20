import { Router } from "express";
import { executeCode } from "../services/execution.service";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { code, language } = req.body;

    const result = await executeCode(
      code,
      language
    );

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "execution failed",
    });
  }
});

export default router;
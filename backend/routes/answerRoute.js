import express from "express";
const router = express.Router();
import { submitAnswers, getSubjectScore } from "../controllers/answerController.js";

// POST — Submit answers and auto-calculate score
router.post("/submit", submitAnswers);

// GET — Get total score by subject
router.get("/score", getSubjectScore);

export default router;

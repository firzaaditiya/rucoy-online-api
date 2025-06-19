import express from "express";
const router = express.Router();
import { getCharacter } from "./../utils/scrapper.js";

router.get("/character/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const character = await getCharacter(name);

    res.json(character);
  } catch (error) {
    console.error("Scraping failed:", error.message);
    res.status(500).json({ error: "Failed to fetch character data" });
  }
});

export default router;

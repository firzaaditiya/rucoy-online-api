import express from "express";
const router = express.Router();
import { getGuild } from "./../utils/scrapper.js";

router.get("/guild/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const guild = await getGuild(name);

    res.json(guild);
  } catch (error) {
    console.error("Scraping failed:", error.message);
    res.status(500).json({ error: "Failed to fetch guild data" });
  }
});

export default router;

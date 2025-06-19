import express from "express";
import cors from "cors";
import characterRouter from "./routes/character.route.js";
import guildRouter from "./routes/guild.route.js";

const PORT = 3000;
const app = express();

app.use(cors());

app.use("/api", characterRouter);
app.use("/api", guildRouter);
app.use((req, res) => {
  res.status(404).json({
    message: "Make sure to using a valid API endpoint.",
  });
});

app.listen(PORT, () => {
  console.info(`Rucoy Online API running on ${PORT}`);
});

const express = require("express");

const app = express();

// root
app.get("/", (req, res) => {
  res.json({
    status: "API Running ✅",
    author: "Rocky Chowdhury"
  });
});

// song route (Vercel safe)
app.get("/song", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json({ error: "No query" });

    // 👉 static working audio (replace later if needed)
    const songs = {
      ashiq: "https://files.catbox.moe/2pmcyg.mp4",
      love: "https://files.catbox.moe/2pmcyg.mp4"
    };

    const key = query.toLowerCase();
    const audio = songs[key] || "https://files.catbox.moe/2pmcyg.mp4";

    res.json({
      title: query,
      artist: "Rocky",
      audio: audio
    });

  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = app;

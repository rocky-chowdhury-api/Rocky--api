const express = require("express");
const yts = require("yt-search");
const ytdl = require("@distube/ytdl-core");

const app = express();

// root
app.get("/", (req, res) => {
  res.json({
    status: "API Running ✅",
    author: "Rocky Chowdhury"
  });
});

// song api
app.get("/song", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json({ error: "No query" });

    const search = await yts(query);
    const video = search.videos[0];

    if (!video) return res.json({ error: "Song not found" });

    const audio = ytdl(video.url, {
      filter: "audioonly",
      quality: "highestaudio"
    });

    res.setHeader("Content-Type", "audio/mpeg");
    audio.pipe(res);

  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = app;

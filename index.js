const express = require("express");
const axios = require("axios");

const app = express();

// test route
app.get("/", (req, res) => {
  res.json({
    status: "API Running ✅",
    author: "Rocky Chowdhury"
  });
});

// song api route
app.get("/song", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.json({
        error: "Please provide song name ?q="
      });
    }

    // Example: fake data / replace with real source
    const result = {
      title: query,
      artist: "Unknown",
      url: "https://example.com/song.mp3"
    };

    res.json(result);

  } catch (err) {
    res.json({
      error: err.message
    });
  }
});

module.exports = app;

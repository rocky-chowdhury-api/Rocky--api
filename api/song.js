const yts = require("yt-search");
const ytdl = require("@distube/ytdl-core");

module.exports = async (req, res) => {
  try {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({
        error: "query lagbe"
      });
    }

    const search = await yts(query);
    const video = search.videos[0];

    if (!video) {
      return res.status(404).json({
        error: "song pawa jai nai"
      });
    }

    const stream = ytdl(video.url, {
      filter: "audioonly"
    });

    res.setHeader("Content-Type", "audio/mpeg");
    stream.pipe(res);

  } catch (e) {
    res.status(500).json({
      error: e.message
    });
  }
};

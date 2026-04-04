export default async function handler(req, res) {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        error: "Song name required"
      });
    }

    // 🔍 YouTube search API
    const search = await fetch(`https://apis-samir.onrender.com/ytsearch?query=${encodeURIComponent(name)}`);
    const data = await search.json();

    if (!data.result || data.result.length === 0) {
      return res.status(404).json({
        error: "Song not found"
      });
    }

    const video = data.result[0];

    // 🎧 convert to mp3
    const audio = await fetch(`https://apis-samir.onrender.com/ytmp3?url=${video.url}`);
    const audioData = await audio.json();

    return res.status(200).json({
      title: video.title,
      url: audioData.result.download
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}

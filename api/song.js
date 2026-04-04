export default async function handler(req, res) {
  const { song } = req.query;

  if (!song) {
    return res.status(400).json({ error: "No song provided" });
  }

  try {
    const response = await fetch(`https://yt-search-and-download-mp3.onrender.com/api/search?query=${encodeURIComponent(song)}`);
    const data = await response.json();

    if (!data || !data.downloadUrl) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.status(200).json({
      title: data.title,
      audio: data.downloadUrl
    });

  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
}

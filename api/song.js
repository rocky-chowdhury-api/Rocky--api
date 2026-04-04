export default async function handler(req, res) {
  const { song } = req.query;

  if (!song) {
    return res.status(400).json({ error: "No song provided" });
  }

  try {
    const response = await fetch(`https://api.vevioz.com/api/button/mp3/${encodeURIComponent(song)}`);
    const text = await response.text();

    res.status(200).json({
      title: song,
      audio: text
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch audio" });
  }
}

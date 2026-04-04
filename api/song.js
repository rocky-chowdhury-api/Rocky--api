export default async function handler(req, res) {
  const { song } = req.query;

  if (!song) {
    return res.status(400).json({ error: "No song provided" });
  }

  // ⚠️ এখানে তুমি নিজের source বসাবে (example dummy)
  const audioUrl = `https://example.com/${song}.mp3`;

  res.status(200).json({
    title: song,
    audio: audioUrl
  });
}

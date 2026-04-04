export default function handler(req, res) {
  const { song } = req.query;

  if (!song) {
    return res.status(400).json({ error: "No song provided" });
  }

  res.status(200).json({
    song: song,
    message: "API working ✅"
  });
}

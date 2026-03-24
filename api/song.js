const axios = require("axios");

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({
      status: false,
      message: "Query missing"
    });
  }

  return res.status(200).json({
    status: true,
    message: "API working",
    query: query
  });
}

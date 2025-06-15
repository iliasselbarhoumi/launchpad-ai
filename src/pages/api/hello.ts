import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Optional: You can also get query parameters
  const { name } = req.query;

  // Return different responses based on query parameter
  if (name) {
    return res.status(200).json({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      method: req.method,
      endpoint: "/api/hello",
    });
  }

  // Default response
  res.status(200).json({
    message: "Hello World!",
    timestamp: new Date().toISOString(),
    method: req.method,
    endpoint: "/api/hello",
    tip: "Try adding ?name=YourName to the URL!",
  });
}

import { NextApiRequest, NextApiResponse } from "next";
import { FeedbackService } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        await handleGet(req, res);
        break;
      case "POST":
        await handlePost(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).json({ error: `Method ${method} Not Allowed` });
        break;
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { stats } = req.query;

  if (stats === "true") {
    const statistics = await FeedbackService.getStats();
    return res.status(200).json(statistics);
  }

  const feedback = await FeedbackService.getAll();
  res.status(200).json(feedback);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { type, comments, rating } = req.body;

  // Validation
  if (!type || !comments) {
    return res.status(400).json({
      error: "Missing required fields",
      message: "Type and comments are required",
    });
  }

  if (comments.length < 10 || comments.length > 500) {
    return res.status(400).json({
      error: "Invalid comments length",
      message: "Comments must be between 10 and 500 characters",
    });
  }

  if (rating && (rating < 1 || rating > 5)) {
    return res.status(400).json({
      error: "Invalid rating",
      message: "Rating must be between 1 and 5",
    });
  }

  const newFeedback = await FeedbackService.create({
    type,
    comments,
    rating,
  });

  res.status(201).json(newFeedback);
}

import { NextApiRequest, NextApiResponse } from "next";
import { FeedbackService } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const id = parseInt(query.id as string);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID parameter" });
  }

  try {
    switch (method) {
      case "GET":
        await handleGet(id, res);
        break;
      case "PUT":
        await handlePut(id, req, res);
        break;
      case "DELETE":
        await handleDelete(id, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
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

async function handleGet(id: number, res: NextApiResponse) {
  const feedback = await FeedbackService.getById(id);

  if (!feedback) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.status(200).json(feedback);
}

type FeedbackUpdate = {
  type?:
    | "bug_report"
    | "feature_request"
    | "complaint"
    | "compliment"
    | "other";
  other_type_details?: string;
  comments?: string;
  rating?: number;
};

async function handlePut(
  id: number,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type, other_type_details, comments, rating } = req.body;

  // Check if feedback exists
  const existingFeedback = await FeedbackService.getById(id);
  if (!existingFeedback) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  // Validation for provided fields
  const updates: FeedbackUpdate = {};

  if (type !== undefined) {
    updates.type = type;
  }

  if (other_type_details !== undefined) {
    updates.other_type_details = other_type_details;
  }

  if (comments !== undefined) {
    if (comments.length < 10 || comments.length > 500) {
      return res.status(400).json({
        error: "Invalid comments length",
        message: "Comments must be between 10 and 500 characters",
      });
    }
    updates.comments = comments;
  }

  if (rating !== undefined) {
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        error: "Invalid rating",
        message: "Rating must be between 1 and 5",
      });
    }
    updates.rating = rating;
  }

  if (
    updates.type === "other" &&
    (!updates.other_type_details || updates.other_type_details.length < 3)
  ) {
    return res.status(400).json({
      error: "Missing other type details",
      message: 'Please provide more details for "Other" type',
    });
  }

  const updatedFeedback = await FeedbackService.update(id, updates);
  res.status(200).json(updatedFeedback);
}

async function handleDelete(id: number, res: NextApiResponse) {
  const deleted = await FeedbackService.delete(id);

  if (!deleted) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.status(200).json({ message: "Feedback deleted successfully" });
}

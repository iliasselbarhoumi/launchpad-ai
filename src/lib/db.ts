"use server";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export const sql = neon(process.env.DATABASE_URL);

// Feedback data types
export interface Feedback {
  id?: number;
  type: "bug_report" | "feature_request" | "complaint" | "compliment" | "other";
  other_type_details?: string;
  comments: string;
  rating?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreateFeedback {
  type: "bug_report" | "feature_request" | "complaint" | "compliment" | "other";
  other_type_details?: string;
  comments: string;
  rating?: number;
  user_id: string;
}

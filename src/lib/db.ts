import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

// Create the database connection
export const sql = neon(process.env.DATABASE_URL);

// Database initialization function
export async function initializeDatabase() {
  try {
    // Create feedback table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        other_type_details TEXT,
        comments TEXT NOT NULL,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

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

// Database operations for feedback
export class FeedbackService {
  // Create new feedback
  static async create(
    feedback: Omit<Feedback, "id" | "created_at" | "updated_at">
  ): Promise<Feedback> {
    try {
      const result = await sql`
        INSERT INTO feedback (type, other_type_details, comments, rating)
        VALUES (${feedback.type}, ${feedback.other_type_details || null}, ${
        feedback.comments
      }, ${feedback.rating || null})
        RETURNING *
      `;

      return result[0] as Feedback;
    } catch (error) {
      console.error("Error creating feedback:", error);
      throw new Error("Failed to create feedback");
    }
  }

  // Get all feedback
  static async getAll(): Promise<Feedback[]> {
    try {
      const result = await sql`
        SELECT * FROM feedback 
        ORDER BY created_at DESC
      `;

      return result as Feedback[];
    } catch (error) {
      console.error("Error fetching feedback:", error);
      throw new Error("Failed to fetch feedback");
    }
  }

  // Get feedback by ID
  static async getById(id: number): Promise<Feedback | null> {
    try {
      const result = await sql`
        SELECT * FROM feedback 
        WHERE id = ${id}
      `;

      return (result[0] as Feedback) || null;
    } catch (error) {
      console.error("Error fetching feedback by ID:", error);
      throw new Error("Failed to fetch feedback");
    }
  }

  // Update feedback
  static async update(
    id: number,
    feedback: Partial<Feedback>
  ): Promise<Feedback> {
    try {
      const result = await sql`
        UPDATE feedback 
        SET 
          type = COALESCE(${feedback.type}, type),
          other_type_details = COALESCE(${feedback.other_type_details}, other_type_details),
          comments = COALESCE(${feedback.comments}, comments),
          rating = COALESCE(${feedback.rating}, rating),
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *
      `;

      if (result.length === 0) {
        throw new Error("Feedback not found");
      }

      return result[0] as Feedback;
    } catch (error) {
      console.error("Error updating feedback:", error);
      throw new Error("Failed to update feedback");
    }
  }

  // Delete feedback
  static async delete(id: number): Promise<boolean> {
    try {
      const result = await sql`
        DELETE FROM feedback 
        WHERE id = ${id}
        RETURNING id
      `;

      return result.length > 0;
    } catch (error) {
      console.error("Error deleting feedback:", error);
      throw new Error("Failed to delete feedback");
    }
  }

  // Get feedback statistics
  static async getStats(): Promise<{
    total: number;
    byType: Record<string, number>;
    averageRating: number;
  }> {
    try {
      const [totalResult, typeResult, ratingResult] = await Promise.all([
        sql`SELECT COUNT(*) as total FROM feedback`,
        sql`
          SELECT type, COUNT(*) as count 
          FROM feedback 
          GROUP BY type
        `,
        sql`
          SELECT AVG(rating) as avg_rating 
          FROM feedback 
          WHERE rating IS NOT NULL
        `,
      ]);

      const byType: Record<string, number> = {};
      typeResult.forEach((row) => {
        byType[row.type] = parseInt(row.count);
      });

      return {
        total: parseInt(totalResult[0].total),
        byType,
        averageRating: parseFloat(ratingResult[0].avg_rating) || 0,
      };
    } catch (error) {
      console.error("Error getting feedback stats:", error);
      throw new Error("Failed to get feedback statistics");
    }
  }
}

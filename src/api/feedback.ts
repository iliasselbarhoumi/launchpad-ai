// Types for feedback
export interface FeedbackFormData {
  type: "bug_report" | "feature_request" | "complaint" | "compliment" | "other";
  other_type_details?: string;
  comments: string;
  rating: number;
}

export interface Feedback extends FeedbackFormData {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface FeedbackStats {
  total: number;
  byType: Record<string, number>;
  averageRating: number;
}

// API base URL
const API_BASE = "/api/feedback";

// Submit new feedback
export async function submitFeedback(
  data: FeedbackFormData
): Promise<Feedback> {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit feedback");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw error;
  }
}

// Get all feedback
export async function getAllFeedback(): Promise<Feedback[]> {
  try {
    const response = await fetch(API_BASE);

    if (!response.ok) {
      throw new Error("Failed to fetch feedback");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching feedback:", error);
    throw error;
  }
}

// Get feedback by ID
export async function getFeedbackById(id: number): Promise<Feedback> {
  try {
    const response = await fetch(`${API_BASE}/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Feedback not found");
      }
      throw new Error("Failed to fetch feedback");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching feedback by ID:", error);
    throw error;
  }
}

// Update feedback
export async function updateFeedback(
  id: number,
  data: Partial<FeedbackFormData>
): Promise<Feedback> {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update feedback");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating feedback:", error);
    throw error;
  }
}

// Delete feedback
export async function deleteFeedback(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Feedback not found");
      }
      throw new Error("Failed to delete feedback");
    }
  } catch (error) {
    console.error("Error deleting feedback:", error);
    throw error;
  }
}

// Get feedback statistics
export async function getFeedbackStats(): Promise<FeedbackStats> {
  try {
    const response = await fetch(`${API_BASE}?stats=true`);

    if (!response.ok) {
      throw new Error("Failed to fetch feedback statistics");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching feedback stats:", error);
    throw error;
  }
}

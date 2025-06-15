export interface Feedback {
  id: number;
  type: string;
  comments: string;
  rating: number;
  created_at?: Date;
}

export interface CreateFeedbackInput {
  type: string;
  comments: string;
  rating: number;
}

import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { Feedback } from "@/lib/db";

interface FeedbackItem {
  id: string;
  type: "bug_report" | "feature_request" | "complaint" | "compliment" | "other";
  comments: string;
  rating?: number;
  date: Date;
  otherTypeDetails?: string;
}

const getRatingEmoji = (rating?: number) => {
  if (!rating) return "💭";
  switch (rating) {
    case 1:
      return "😠";
    case 2:
      return "😟";
    case 3:
      return "😐";
    case 4:
      return "😊";
    case 5:
      return "🤩";
    default:
      return "💭";
  }
};

const getTypeEmoji = (type: string) => {
  switch (type) {
    case "bug_report":
      return "🐛";
    case "feature_request":
      return "💡";
    case "complaint":
      return "⚠️";
    case "compliment":
      return "👍";
    case "other":
      return "💬";
    default:
      return "💬";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "bug_report":
      return "destructive";
    case "feature_request":
      return "secondary";
    case "complaint":
      return "outline";
    case "compliment":
      return "default";
    case "other":
      return "secondary";
    default:
      return "secondary";
  }
};

const PreviousFeedback = ({ userID }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userID) return;
    setLoading(true);
    setError(null);
    fetch(`/api/feedback?user_id=${userID}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch feedback");
        }
        return res.json();
      })
      .then((data) => {
        // Map API feedback to FeedbackItem shape if needed
        const mapped = (data.feedback || []).map((item: Feedback) => ({
          ...item,
          created_at: new Date(item.created_at),
        }));
        setFeedbacks(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userID]);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-gray-600 font-medium">Loading feedback...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-gray-600 font-medium">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!feedbacks || feedbacks.length === 0) {
    return (
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-600 font-medium">No previous feedback yet</p>
          <p className="text-sm text-gray-500 mt-2">
            Your feedback history will appear here
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-2xl">💝</span>
          Your Previous Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-3">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/90"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {getTypeEmoji(feedback.type)}
                    </span>
                    <Badge
                      variant={getTypeColor(feedback.type)}
                      className="text-xs"
                    >
                      {feedback.type.replace("_", " ")}
                    </Badge>
                    {feedback.rating && (
                      <div className="flex items-center gap-1">
                        <span className="text-lg">
                          {getRatingEmoji(feedback.rating)}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({feedback.rating}/5)
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(feedback.created_at, {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                  {feedback.comments}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="mt-4 pt-3 border-t border-purple-200/50">
          <p className="text-xs text-center text-gray-500">
            ✨ Thank you for helping us improve! ✨
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreviousFeedback;

import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import type { CreateFeedback, Feedback } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { error: "user_id is required" },
        { status: 400 }
      );
    }

    const feedback =
      (await sql`SELECT * FROM feedback WHERE user_id = ${user_id} ORDER BY created_at DESC`) as Feedback[];
    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch feedback" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateFeedback;

    if (!body.comments || body.comments.trim().length === 0) {
      return NextResponse.json(
        { error: "Comment is required" },
        { status: 400 }
      );
    }

    const result = (await sql`
      INSERT INTO feedback (type, other_type_details, comments, rating, user_id)
      VALUES (${body.type || null},${body.other_type_details || null} ,${
      body.comments
    },  ${body.rating || null}, ${body.user_id || "USER"})
      RETURNING *
    `) as Feedback[];

    return NextResponse.json(
      {
        success: true,
        feedback: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }
}

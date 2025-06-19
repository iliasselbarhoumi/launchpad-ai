import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { Question } from "@/app/components/assessment/questions";

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

    const assessment =
      await sql`SELECT * FROM assessment WHERE user_id = ${user_id} ORDER BY created_at DESC`;
    return NextResponse.json({ assessment });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch assessment" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    const initialStatus = "in_progress";
    const answers = {};
    const current_index = 0;

    const result = await sql`
      INSERT INTO assessment (user_id, status, answers, current_index)
      VALUES (${body.userId},${initialStatus} ,${answers}, ${current_index})
      RETURNING id
    `;

    return NextResponse.json(
      {
        success: true,
        assessmentId: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to start assessment" },
      { status: 500 }
    );
  }
}

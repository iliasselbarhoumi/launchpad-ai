import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { Question } from "@/app/components/assessment/questions";

export async function GET() {
  try {
    const questions =
      (await sql`SELECT * FROM question ORDER BY created_at ASC`) as Question[];
    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

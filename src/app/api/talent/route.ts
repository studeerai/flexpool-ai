import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, linkedin_url, role, experience_years } = body;

    if (!name || !email || !linkedin_url || !role || !experience_years) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    // TODO: Supabase insert into talent_applications
    // TODO: Resend confirmation email to applicant
    console.log("New talent application:", { name, email, role });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, email, linkedin_url, role, experience_years, hourly_rate, availability, work_preference, portfolio_url, motivation } = await req.json();

    if (!name || !email || !linkedin_url || !role || !experience_years) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("talent_applications")
      .insert({ name, email, linkedin_url, role, experience_years: Number(experience_years), hourly_rate: hourly_rate ? Number(hourly_rate) : null, availability, work_preference, portfolio_url, motivation });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Talent form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

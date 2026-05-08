import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, job_title, company_size, sector, challenge } = await req.json();

    if (!name || !email || !company || !challenge) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("quickscan_requests")
      .insert({ name, email, company, job_title, company_size, sector, challenge });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quickscan form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

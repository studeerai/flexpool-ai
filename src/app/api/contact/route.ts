import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({ name, email, company, type, message });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

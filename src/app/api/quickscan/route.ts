import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, job_title, company_size, sector, challenge } = body;

    if (!name || !email || !company || !challenge) {
      return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
    }

    // TODO: Supabase insert
    // const { error } = await supabase.from("quickscan_requests").insert({...})

    // TODO: Resend notification email to info@flexpool.ai
    console.log("New quickscan request:", { name, email, company, job_title, company_size, sector });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

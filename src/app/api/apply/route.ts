import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { project_name, eoa_address, description, telegram_handle } = body;

  if (!project_name || !eoa_address || !description || !telegram_handle) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const { error } = await supabase.from("partner_applications").insert({
    project_name,
    eoa_address,
    description,
    telegram_handle,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

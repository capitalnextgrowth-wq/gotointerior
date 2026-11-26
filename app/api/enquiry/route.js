// app/api/enquiry/route.js
// Receives the popup form. Add your delivery below (email, WhatsApp API,
// Google Sheet, CRM...). Right now it only validates and logs.
import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, mobile, email, service, message } = body || {};
  if (!name || !mobile || !service) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: send this somewhere you will see it
  console.log("New enquiry:", { name, mobile, email, service, message });

  return NextResponse.json({ ok: true });
}
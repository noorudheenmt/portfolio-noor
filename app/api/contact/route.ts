export const runtime = "nodejs";
import { createLogger } from "@/utils/logger";
import { sendContactEmails } from "@/utils/sendEmail";
import { NextRequest, NextResponse } from "next/server";
import type { ContactPayload } from "@/types/contact.types";
import * as commonController from "@/utils/commonController";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactPayload;
  const log = commonController.logRequest(req, "contact", body);
  try {
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      log("Validation failed: Missing fields", "warn");

      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    log(`Contact form received from ${email}`);

    await sendContactEmails(body, log);

    log("Contact emails sent successfully");

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      log(error.stack || error.message, "error");
    }

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}

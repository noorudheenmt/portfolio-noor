import { config } from "../config";
import nodemailer from "nodemailer";
import { emailContents } from "../lib/content";
import type { Logger } from "../types/logger.types";
import { loadEmailTemplate } from "./commonController";
import type { ContactPayload } from "../types/contact.types";

export const sendContactEmails = async (
  payload: ContactPayload,
  log: Logger,
): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.backend.emailUserName,
      pass: config.backend.emailPassword,
    },
  });

  try {
    // email to portfolio owner
    log("email send to portfolio owner started");
    log("loadEmailTemplate function call started");
    const notifyHtml = loadEmailTemplate("email.html", {
      TITLE: "New Portfolio Contact",
      CONTENT: emailContents.contactNotification(payload),
    });
    log("loadEmailTemplate function call ended");

    log("transporter.sendMail function call started");
    await transporter.sendMail({
      from: `"Portfolio Contact" <${config.backend.emailUserName}>`,
      to: config.backend.emailUserName,
      replyTo: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      html: notifyHtml,
    });
    log("transporter.sendMail function call ended");
    log("email send to portfolio owner ended");

    // auto-reply to visitor
    log("email send to visitor started");
    log("loadEmailTemplate function call started");
    const autoReplyHtml = loadEmailTemplate("email.html", {
      TITLE: "Thanks for contacting me 👋",
      CONTENT: emailContents.contactAutoReply(payload.name),
    });
    log("loadEmailTemplate function call ended");

    log("transporter.sendMail function call started");
    await transporter.sendMail({
      from: `"Mohammed Noorudheen" <${config.backend.emailUserName}>`,
      to: payload.email,
      subject: "I’ve received your message",
      html: autoReplyHtml,
    });
    log(`Contact emails sent for ${payload.email}`);
    log("transporter.sendMail function call ended");
    log("email send to visitor ended");
  } catch (error) {
    if (error instanceof Error) {
      log(error.message, "error");
    }
    throw new Error("Failed to send contact emails");
  }
};

import type { ContactPayload } from "../types/contact.types";

export const emailContents = {
  // email to you
  contactNotification: ({
    name,
    email,
    subject,
    message,
  }: ContactPayload): string => `
    <p><strong>New portfolio contact received</strong></p>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,

  // auto-reply to visitor
  contactAutoReply: (name: string): string => `
    <p>Hi ${name},</p>

    <p>
      Thank you for contacting me through my portfolio.
      I’ve received your message and will get back to you soon.
    </p>

    <p>
      Regards,<br />
      <strong>Mohammed Noorudheen MT</strong><br />
      <strong>Software Engineer</strong>
    </p>
  `,
} as const;

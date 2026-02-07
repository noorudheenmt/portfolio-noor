import type { ContactPayload } from "./contact.types";

export interface SendContactEmails {
  (data: ContactPayload): Promise<void>;
}

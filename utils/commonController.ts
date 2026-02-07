import fs from "fs";
import path from "path";
import { createLogger } from "./logger";
import type { NextRequest } from "next/server";
import type { Logger } from "../types/logger.types";

// laoad email template
export type TemplateVars = Record<string, string>;

export const loadEmailTemplate = (
  templateName: string,
  variables: TemplateVars,
): string => {
  const templatePath = path.join(process.cwd(), "templates", templateName);

  let html = fs.readFileSync(templatePath, "utf8");

  for (const [key, value] of Object.entries(variables)) {
    html = html.replaceAll(`{{ ${key} }}`, value);
  }

  return html;
};

// logRequest utility
export const logRequest = (
  req: NextRequest,
  apiName: string,
  body?: unknown,
): Logger => {
  const log = createLogger(apiName);

  log(`Request URL: ${req.nextUrl.pathname}`);

  if (body && typeof body === "object" && Object.keys(body).length) {
    log(`Request Body: ${JSON.stringify(body)}`);
  }

  return log;
};

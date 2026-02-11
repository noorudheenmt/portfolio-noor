import fs from "fs"; 
import path from "path";
import type { LogLevel, LogInput, Logger } from "../types/logger.types";

// Date & Time Helpers
const getToday = (): string => new Date().toISOString().split("T")[0];

const getCurrentTime = (): string => {
  const date = new Date();
  const hours24 = date.getHours();
  const minutes = date.getMinutes();

  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  return `${String(hours12).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )} ${period}`;
};

// FS Helpers
const ensureDirectory = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const getNextLogIndex = (dir: string, apiName: string): number => {
  if (!fs.existsSync(dir)) return 1;

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.startsWith(apiName) && file.endsWith(".log"));

  const indexes = files.map((file) => {
    const match = file.match(/-(\d+)\.log$/);
    return match ? Number(match[1]) : 0;
  });

  return indexes.length ? Math.max(...indexes) + 1 : 1;
};

// Logger Factory
export const createLogger = (apiName: string): 
  if (process.env.NODE_ENV === "production") {
    return (message: string, type: LogInput = "info"): void => {
      if (type instanceof Error) {
        console.error(`[${apiName}]`, message, type.stack || type.message);
      } else {
        console.log(`[${apiName}] ${type.toUpperCase()}:`, message);
      }
    }; 
  }

 
  const baseDir = path.resolve();
  const logDir = path.join("logs", getToday(), apiName);
  const fullPath = path.join(baseDir, logDir);

  ensureDirectory(fullPath);

  const logIndex = getNextLogIndex(fullPath, apiName);
  const logFilePath = path.join(fullPath, `${apiName}-${logIndex}.log`);

  const write = (level: LogLevel, text: string): void => {
    fs.appendFileSync(
      logFilePath,
      `[${getCurrentTime()}] ${level.toUpperCase()}: ${text}\n`,
    );
  };

  return (message: string, type: LogInput = "info"): void => {
    try {
      if (type instanceof Error) {
        write("error", message);
        write("error", type.stack || type.message);
        return;
      }

      write(type, message);
    } catch (error) {
      console.error("Logger error:", error);
    }
  };
};

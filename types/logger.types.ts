export type LogLevel = 'info' | 'warn' | 'error'

export type LogInput = LogLevel | Error

export type Logger = (
  message: string,
  type?: LogInput
) => void

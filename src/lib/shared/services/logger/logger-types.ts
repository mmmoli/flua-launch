export interface Logger {
  log(msg: any): void;
  error(e: Error): void;
}

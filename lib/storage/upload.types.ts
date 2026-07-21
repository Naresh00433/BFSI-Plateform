export interface UploadResult {
  url: string;
  key: string;
}

export interface UploadFile {
  buffer: Buffer;
  fileName: string;
  mimeType: string;
}
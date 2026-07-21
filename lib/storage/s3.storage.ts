import { StorageProvider } from "./storage.interface";
import { UploadFile, UploadResult } from "./upload.types";

export class S3Storage implements StorageProvider {
  async upload(file: UploadFile): Promise<UploadResult> {
    throw new Error("S3 upload not implemented yet.");
  }

  async delete(key: string): Promise<void> {
    throw new Error("S3 delete not implemented yet.");
  }
}
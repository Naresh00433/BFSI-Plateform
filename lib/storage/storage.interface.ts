import { UploadFile, UploadResult } from "./upload.types";

export interface StorageProvider {
  upload(file: UploadFile): Promise<UploadResult>;

  delete(key: string): Promise<void>;
}
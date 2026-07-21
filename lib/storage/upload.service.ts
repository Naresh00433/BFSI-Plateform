import { StorageFactory } from "./storage.factory";
import { UploadFile } from "./upload.types";

export class UploadService {
  private readonly storage = StorageFactory.create();

  async upload(file: UploadFile) {
    return this.storage.upload(file);
  }

  async delete(key: string) {
    return this.storage.delete(key);
  }
}
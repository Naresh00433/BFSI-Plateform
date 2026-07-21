import { LocalStorage } from "./local.storage";
import { S3Storage } from "./s3.storage";
import { StorageProvider } from "./storage.interface";

export class StorageFactory {
  static create(): StorageProvider {
    const driver = process.env.STORAGE_DRIVER ?? "local";

    switch (driver) {
      case "s3":
        return new S3Storage();

      case "local":
      default:
        return new LocalStorage();
    }
  }
}
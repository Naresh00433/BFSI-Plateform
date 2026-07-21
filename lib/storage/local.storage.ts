import fs from "fs/promises";
import path from "path";

import { StorageProvider } from "./storage.interface";
import { UploadFile, UploadResult } from "./upload.types";

export class LocalStorage implements StorageProvider {
  async upload(file: UploadFile): Promise<UploadResult> {
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.fileName}`;

    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, file.buffer);

    return {
      key: fileName,
      url: `/uploads/${fileName}`,
    };
  }

  async delete(key: string): Promise<void> {
    const filePath = path.join(
      process.cwd(),
      "public",
      "uploads",
      key
    );

    try {
      await fs.unlink(filePath);
    } catch {
      // Ignore missing files
    }
  }
}
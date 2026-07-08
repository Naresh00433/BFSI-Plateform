import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(10),

  JWT_REFRESH_SECRET: z.string().min(10),

  APP_URL: z.string().url(),

  NODE_ENV: z.enum([
    "development",
    "production",
    "test"
  ]),

  AWS_ACCESS_KEY_ID: z.string().optional(),

  AWS_SECRET_ACCESS_KEY: z.string().optional(),

  AWS_BUCKET_NAME: z.string().optional(),

  AWS_REGION: z.string().optional(),
});

export const env = envSchema.parse(process.env);
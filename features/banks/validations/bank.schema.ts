import { z } from "zod";

export const createBankSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bank name must be at least 2 characters.")
    .max(100),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase and hyphenated."),

  shortName: z
    .string()
    .trim()
    .max(20)
    .optional(),

  description: z
    .string()
    .max(5000)
    .optional(),

  website: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  supportEmail: z
    .string()
    .email()
    .optional()
    .or(z.literal("")),

  supportPhone: z
    .string()
    .max(20)
    .optional(),

  logo: z
    .string()
    .optional(),

  priority: z
    .number()
    .int()
    .default(0),
});

export type CreateBankInput = z.infer<typeof createBankSchema>;
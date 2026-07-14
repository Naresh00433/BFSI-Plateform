import { z } from "zod";

export const updateBankSchema = z.object({
  name: z.string().trim().min(2).max(100),

  slug: z
    .string()
    .trim()
    .regex(/^[a-z0-9-]+$/),

  shortName: z.string().optional(),

  description: z.string().optional(),

  website: z.string().url().optional().or(z.literal("")),

  supportEmail: z.string().email().optional().or(z.literal("")),

  supportPhone: z.string().optional(),

  logo: z.string().optional(),

  priority: z.number().int(),
});

export type UpdateBankInput = z.infer<
  typeof updateBankSchema
>;
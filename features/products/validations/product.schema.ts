import { z } from "zod";

export const createProductSchema = z.object({
  bankId: z.string().uuid(),

  categoryId: z.string().uuid(),

  name: z.string().trim().min(2).max(150),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(150)
    .regex(/^[a-z0-9-]+$/),

  shortDescription: z.string().max(500).optional(),

  description: z.string().max(10000).optional(),

  logo: z.string().optional(),

  banner: z.string().optional(),

  joiningFee: z.number().nonnegative().optional(),

  annualFee: z.number().nonnegative().optional(),

  interestRate: z.number().nonnegative().optional(),

  cashback: z.number().nonnegative().optional(),

  processingTime: z.string().max(100).optional(),

  minimumIncome: z.number().nonnegative().optional(),

  minimumAge: z.number().int().nonnegative().optional(),

  maximumAge: z.number().int().nonnegative().optional(),

  priority: z.number().int().default(0),

  featured: z.boolean().default(false),

  applyUrl: z.string().url().optional().or(z.literal("")),
});

export type CreateProductInput = z.input<typeof createProductSchema>;
export type CreateProductData = z.output<typeof createProductSchema>;
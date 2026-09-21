import { z } from "zod";

export const createDealSchema = z.object({
  productId: z.string().uuid(),

  title: z.string().trim().min(2).max(200),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(200)
    .regex(/^[a-z0-9-]+$/),

  description: z.string().max(10000).optional(),

  image: z.string().optional(),

  discount: z.number().nonnegative().optional(),

  cashback: z.number().nonnegative().optional(),

  terms: z.string().max(10000).optional(),

  validFrom: z.coerce.date().optional(),

  validUntil: z.coerce.date().optional(),

  priority: z.number().int().default(0),

  featured: z.boolean().default(false),
});

export type CreateDealInput = z.input<typeof createDealSchema>;
export type CreateDealData = z.output<typeof createDealSchema>;
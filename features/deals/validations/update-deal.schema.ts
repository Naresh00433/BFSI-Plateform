import { z } from "zod";

export const updateDealSchema = z.object({
  productId: z.string().uuid().optional(),

  title: z.string().trim().min(2).max(200).optional(),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(200)
    .regex(/^[a-z0-9-]+$/)
    .optional(),

  description: z.string().max(10000).optional(),

  image: z.string().optional(),

  discount: z.number().nonnegative().optional(),

  cashback: z.number().nonnegative().optional(),

  terms: z.string().max(10000).optional(),

  validFrom: z.coerce.date().optional(),

  validUntil: z.coerce.date().optional(),

  priority: z.number().int().optional(),

  featured: z.boolean().optional(),
});

export type UpdateDealInput = z.input<typeof updateDealSchema>;
export type UpdateDealData = z.output<typeof updateDealSchema>;
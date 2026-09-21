import { z } from "zod";

export const updateCategorySchema = z.object({
  name: z.string().trim().min(2).max(100).optional(),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/)
    .optional(),

  description: z.string().max(5000).optional(),

  icon: z.string().optional(),

  priority: z.number().int().optional(),
});

export type UpdateCategoryInput = z.input<typeof updateCategorySchema>;
export type UpdateCategoryData = z.output<typeof updateCategorySchema>;
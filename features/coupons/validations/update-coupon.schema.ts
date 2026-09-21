import { z } from "zod";

export const updateCouponSchema = z
  .object({
    productId: z.string().uuid().optional(),

    dealId: z.string().uuid().optional(),

    code: z
      .string()
      .trim()
      .min(2)
      .max(50)
      .regex(
        /^[A-Z0-9_-]+$/,
        "Coupon code must contain only uppercase letters, numbers, _ or -"
      )
      .optional(),

    title: z.string().trim().min(2).max(200).optional(),

    description: z.string().max(10000).optional(),

    discount: z.number().nonnegative().optional(),

    cashback: z.number().nonnegative().optional(),

    validFrom: z.coerce.date().optional(),

    validUntil: z.coerce.date().optional(),

    usageLimit: z.number().int().positive().optional(),
  })
  .refine(
    (data) =>
      !data.validFrom ||
      !data.validUntil ||
      data.validFrom <= data.validUntil,
    {
      message: "validFrom must be before validUntil.",
      path: ["validUntil"],
    }
  );

export type UpdateCouponInput = z.input<typeof updateCouponSchema>;
export type UpdateCouponData = z.output<typeof updateCouponSchema>;
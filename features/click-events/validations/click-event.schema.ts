import { z } from "zod";

export const createClickEventSchema = z.object({
  entityType: z.enum(["PRODUCT", "DEAL", "COUPON"]),

  entityId: z.string().uuid(),

  userId: z.string().uuid().optional(),

  ipAddress: z.string().max(100).optional(),

  userAgent: z.string().max(1000).optional(),
});

export type CreateClickEventInput =
  z.input<typeof createClickEventSchema>;

export type CreateClickEventData =
  z.output<typeof createClickEventSchema>;
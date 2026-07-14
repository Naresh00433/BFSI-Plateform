import { z } from "zod";

export const updateBankStatusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type UpdateBankStatusInput = z.infer<
  typeof updateBankStatusSchema
>;
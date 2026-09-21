export interface CreateClickEventDto {
  entityType: "PRODUCT" | "DEAL" | "COUPON";
  entityId: string;

  userId?: string;
  ipAddress?: string;
  userAgent?: string;
}
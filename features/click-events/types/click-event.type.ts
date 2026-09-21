import { ClickEntityType } from "@prisma/client";

export interface ClickEventFilter {
  page?: number;
  limit?: number;

  entityType?: ClickEntityType;
  entityId?: string;

  userId?: string;

  sortOrder?: "asc" | "desc";
}
import { DealStatus } from "@prisma/client";

export interface DealFilter {
  page?: number;
  limit?: number;
  search?: string;
  productId?: string;
  status?: DealStatus;
  featured?: boolean;
  sortBy?: "title" | "priority" | "createdAt";
  sortOrder?: "asc" | "desc";
}

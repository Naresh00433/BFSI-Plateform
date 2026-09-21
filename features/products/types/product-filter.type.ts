import { ProductStatus } from "@prisma/client";

export interface ProductFilter {
  page?: number;
  limit?: number;
  search?: string;
  bankId?: string;
  categoryId?: string;
  status?: ProductStatus;
  featured?: boolean;
  sortBy?: "name" | "priority" | "createdAt";
  sortOrder?: "asc" | "desc";
}
import { CategoryStatus } from "@prisma/client";

export interface CategoryFilter {
  page?: number;
  limit?: number;
  search?: string;
  status?: CategoryStatus;
  sortBy?: "name" | "priority" | "createdAt";
  sortOrder?: "asc" | "desc";
}
export interface BankFilter {
  page?: number;
  limit?: number;
  search?: string;
  status?: "ACTIVE" | "INACTIVE";
  sortBy?: "name" | "priority" | "createdAt";
  sortOrder?: "asc" | "desc";
}
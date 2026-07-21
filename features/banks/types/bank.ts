export interface Bank {
  id: string;
  name: string;
  shortName?: string;
  slug: string;
  logo?: string;
  priority: number;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface BankListResponse {
  data: Bank[];
  meta: PaginationMeta;
}
import { api } from "@/lib/api";
import { BankListResponse } from "../types/bank";

interface BankListParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export class BankApi {
  static create(data: unknown) {
    return api.post("/api/banks", data);
  }

  static list(params?: BankListParams): Promise<BankListResponse> {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.set("page", String(params.page));

    if (params?.limit) searchParams.set("limit", String(params.limit));

    if (params?.search?.trim())
      searchParams.set("search", params.search.trim());

    if (params?.sortBy) searchParams.set("sortBy", params.sortBy);

    if (params?.sortOrder) searchParams.set("sortOrder", params.sortOrder);

    const query = searchParams.toString();

    return api.get<BankListResponse>(`/api/banks${query ? `?${query}` : ""}`);
  }

  static get(id: string) {
    return api.get(`/api/banks/${id}`);
  }

  static update(id: string, data: unknown) {
    return api.put(`/api/banks/${id}`, data);
  }

  static delete(id: string) {
    return api.delete(`/api/banks/${id}`);
  }

  static updateStatus(id: string, status: string) {
    return api.patch(`/api/banks/${id}/status`, {
      status,
    });
  }
}

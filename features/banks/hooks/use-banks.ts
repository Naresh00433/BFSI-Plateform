"use client";

import { useQuery } from "@tanstack/react-query";

import { BankApi } from "../api/bank.api";

interface UseBanksParams {
  page: number;
  limit: number;
  search: string;
}

export function useBanks({ page, limit, search }: UseBanksParams) {
  const query = useQuery({
    queryKey: ["banks", page, limit, search],

    queryFn: () =>
      BankApi.list({
        page,
        limit,
        search,
      }),

    placeholderData: (previousData) => previousData,
  });
console.log(query.data);
  return {
    banks: query.data?.data?.data ?? [],
    meta: query.data?.data?.meta ?? {
      page,
      limit,
      total: 0,
      totalPages: 0,
    },
    loading: query.isPending,
    error: query.error,
    refresh: query.refetch,
  };
}

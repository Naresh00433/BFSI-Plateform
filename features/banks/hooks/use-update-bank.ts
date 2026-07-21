"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { BankApi } from "../api/bank.api";

export function useUpdateBank() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: unknown;
    }) => BankApi.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["banks"],
      });
    },
  });
}
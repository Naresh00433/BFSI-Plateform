"use client";

import { BankApi } from "../api/bank.api";

export function useDeleteBank(
  refresh: () => Promise<void>
) {
  async function removeBank(id: string) {
    await BankApi.delete(id);

    await refresh();
  }

  return {
    removeBank,
  };
}
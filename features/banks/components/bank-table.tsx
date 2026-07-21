"use client";

import { DataTable } from "@/components/data-table/data-table";

import { Bank } from "../types/bank";
import { bankColumns } from "./bank-columns";

interface Props {
  banks: Bank[];
  loading?: boolean;

  page: number;
  pageSize: number;
  total: number;

  search: string;

  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function BankTable({
  banks,
  loading = false,

  page,
  pageSize,
  total,

  search,

  onSearchChange,
  onPageChange,
  onPageSizeChange,
}: Props) {
  return (
    <DataTable
      columns={bankColumns}
      data={banks}
      loading={loading}
      page={page}
      pageSize={pageSize}
      total={total}
      search={search}
      searchPlaceholder="Search banks..."
      onSearchChange={onSearchChange}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
    />
  );
}
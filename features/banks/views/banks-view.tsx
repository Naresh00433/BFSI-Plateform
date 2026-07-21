"use client";

import { useState } from "react";

import { CreateBankDialog } from "../components/create-bank-dialog";
import { BankTable } from "../components/bank-table";
import { useBanks } from "../hooks/use-banks";
import { Bank } from "../types/bank";

export function BanksView() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const { banks, meta, loading, refresh } = useBanks({
    page,
    limit: pageSize,
    search,
  });

  console.log("banks:", banks);
  console.log("meta:", meta);
  console.log("loading:", loading);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Banks</h1>

          <p className="text-muted-foreground">Manage all banking partners.</p>
        </div>

        <CreateBankDialog
          onSuccess={() => {
            refresh();
          }}
        />
      </div>

      <BankTable
        banks={banks}
        loading={loading}
        page={page}
        pageSize={pageSize}
        total={meta?.total ?? 0}
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </div>
  );
}

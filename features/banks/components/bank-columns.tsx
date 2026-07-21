"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { Bank } from "../types/bank";
import { BankActions } from "./bank-actions";

export const bankColumns: ColumnDef<Bank>[] = [
  {
    accessorKey: "name",
    header: "Bank",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "ACTIVE" ? "default" : "secondary"}
      >
        {row.original.status}
      </Badge>
    ),
  },

  {
    accessorKey: "priority",
    header: "Priority",
  },

  {
    id: "actions",
    header: "",
    cell: ({ row }) => <BankActions bank={row.original} />,
  },
];

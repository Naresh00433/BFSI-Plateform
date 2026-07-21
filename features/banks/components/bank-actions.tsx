"use client";

import { DotsThreeVertical, PencilSimple, Trash, ArrowsClockwise } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { EditBankDialog } from "../dialogs/edit-bank-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bank } from "../types/bank";

interface Props {
  bank: Bank;
}

export function BankActions({ bank }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
          />
        }
      >
        <DotsThreeVertical size={18} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <EditBankDialog bank={bank} />

        <DropdownMenuItem>
          <ArrowsClockwise className="mr-2" size={16} />
          {bank.status === "ACTIVE"
            ? "Deactivate"
            : "Activate"}
        </DropdownMenuItem>

        <DropdownMenuItem className="text-red-600">
          <Trash className="mr-2" size={16} />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
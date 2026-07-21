"use client";

import { useState } from "react";

import { PencilSimple } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Bank } from "../types/bank";
import { BankForm } from "../components/bank-form";
import { useUpdateBank } from "../hooks/use-update-bank";
import { CreateBankInput } from "../validations/bank.schema";

interface Props {
  bank: Bank;
}

export function EditBankDialog({ bank }: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useUpdateBank();

  async function handleSubmit(values: CreateBankInput) {
    await mutation.mutateAsync({
      id: bank.id,
      data: values,
    });

    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger
        render={<Button variant="ghost" />}
      >
        <PencilSimple size={16} />
        Edit
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Bank</DialogTitle>
        </DialogHeader>

        <BankForm
          defaultValues={{
            name: bank.name,
            slug: bank.slug,
            priority: bank.priority,
          }}
          loading={mutation.isPending}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
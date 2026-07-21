"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import { BankApi } from "../api/bank.api";
import { BankForm } from "./bank-form";
import { CreateBankInput } from "../validations/bank.schema";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  onSuccess?: () => void;
}

export function CreateBankDialog({ onSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: CreateBankInput) {
    try {
      setLoading(true);

      await BankApi.create(values);

      toast.success("Bank created successfully.");

      setOpen(false);

      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create bank.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        Add Bank
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Bank</DialogTitle>
        </DialogHeader>

        <BankForm
          loading={loading}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
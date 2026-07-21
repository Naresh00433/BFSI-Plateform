"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  createBankSchema,
  CreateBankInput,
} from "../validations/bank.schema";

interface Props {
  defaultValues?: Partial<CreateBankInput>;
  loading?: boolean;
  onSubmit: (values: CreateBankInput) => Promise<void>;
}

export function BankForm({
  defaultValues,
  loading = false,
  onSubmit,
}: Props) {
  const form = useForm<CreateBankInput>({
    resolver: zodResolver(createBankSchema),
    defaultValues: {
      name: "",
      slug: "",
      shortName: "",
      description: "",
      website: "",
      supportEmail: "",
      supportPhone: "",
      logo: "",
      priority: 0,
      ...defaultValues,
    },
  });

  useEffect(() => {
    form.reset({
      name: defaultValues?.name ?? "",
      slug: defaultValues?.slug ?? "",
      shortName: defaultValues?.shortName ?? "",
      description: defaultValues?.description ?? "",
      website: defaultValues?.website ?? "",
      supportEmail: defaultValues?.supportEmail ?? "",
      supportPhone: defaultValues?.supportPhone ?? "",
      logo: defaultValues?.logo ?? "",
      priority: defaultValues?.priority ?? 0,
    });
  }, [defaultValues, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Bank Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>

              <FormControl>
                <Input
                  placeholder="HDFC Bank"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>

              <FormControl>
                <Input
                  placeholder="hdfc-bank"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Short Name */}
        <FormField
          control={form.control}
          name="shortName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Name</FormLabel>

              <FormControl>
                <Input
                  placeholder="HDFC"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Website */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>

              <FormControl>
                <Input
                  placeholder="https://www.hdfcbank.com"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Support Email */}
        <FormField
          control={form.control}
          name="supportEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Support Email</FormLabel>

              <FormControl>
                <Input
                  placeholder="support@bank.com"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Support Phone */}
        <FormField
          control={form.control}
          name="supportPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Support Phone</FormLabel>

              <FormControl>
                <Input
                  placeholder="+91 9876543210"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Write a short description..."
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Priority */}
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  value={field.value}
                  onChange={(e) =>
                    field.onChange(Number(e.target.value))
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Bank"}
        </Button>
      </form>
    </Form>
  );
}
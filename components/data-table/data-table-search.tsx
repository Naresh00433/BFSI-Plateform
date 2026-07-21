"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface DataTableSearchProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function DataTableSearch({
  value,
  placeholder = "Search...",
  onChange,
}: DataTableSearchProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />

      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9"
      />
    </div>
  );
}
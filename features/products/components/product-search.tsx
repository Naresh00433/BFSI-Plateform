"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full">

      <MagnifyingGlass
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 shadow-sm outline-none transition focus:border-blue-500"
      />

    </div>
  );
}
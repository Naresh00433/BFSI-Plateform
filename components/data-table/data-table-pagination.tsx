"use client";

import { Button } from "@/components/ui/button";

interface DataTablePaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const PAGE_SIZES = [10, 25, 50, 100];

export function DataTablePagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}: DataTablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const end = Math.min(page * pageSize, total);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col gap-4 border-t px-4 py-3 md:flex-row md:items-center md:justify-between">
      <div className="text-sm text-muted-foreground">
        Showing {start}-{end} of {total} results
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Rows
        </span>

        <select
          value={pageSize}
          onChange={(e) =>
            onPageSizeChange(Number(e.target.value))
          }
          className="h-9 rounded-md border bg-background px-2 text-sm"
        >
          {PAGE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <Button
          variant="outline"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>

        <div className="flex gap-1">
          {pages.map((p) => (
            <Button
              key={p}
              size="sm"
              variant={
                p === page ? "default" : "outline"
              }
              onClick={() => onPageChange(p)}
            >
              {p}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
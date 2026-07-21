"use client";

import { useMemo, useState } from "react";
import { products } from "../data";

export function useProducts() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return products;

    return products.filter((product) =>
      [
        product.bank,
        product.name,
        product.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return {
    products: filtered,
    search,
    setSearch,
  };
}
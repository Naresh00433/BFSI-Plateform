"use client";

import ProductGrid from "@/features/products/components/product-grid";
import ProductSearch from "@/features/products/components/product-search";
import { useProducts } from "@/features/products/hooks/use-products";

export default function ProductsPage() {
  const {
    products,
    search,
    setSearch,
  } = useProducts();

  return (
    
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="border-b bg-white">

        <div className="container-custom py-16">

          <h1 className="text-5xl font-bold">
            Financial Products
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Compare India's best financial products from
            trusted banks and financial institutions.
          </p>

          <div className="mt-10">
            <ProductSearch
              value={search}
              onChange={setSearch}
            />
          </div>

        </div>

      </section>

      {/* Products */}

      <section className="container-custom py-16">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            {products.length} Products Found
          </h2>

        </div>

        <ProductGrid products={products} />

      </section>

    </main>
  );
}
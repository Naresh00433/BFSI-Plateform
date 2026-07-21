import ProductCard from "./product-card";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 p-16 text-center">
        <h3 className="text-2xl font-bold text-slate-800">
          No Products Found
        </h3>

        <p className="mt-3 text-slate-500">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
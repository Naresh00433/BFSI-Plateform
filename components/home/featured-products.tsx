"use client";

import ProductCard from "@/components/cards/product-card";
import { featuredProducts } from "@/data/featured-products";

export default function FeaturedProducts() {
  return (
    <section className="section bg-white">

      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Featured Products
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Handpicked Products

            <span className="gradient-text">
              {" "}For You
            </span>

          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Compare India's most popular financial products
            with detailed benefits, fees and rewards.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Star,
  ArrowRight,
  Scales,
  BookmarkSimple,
  CreditCard,
} from "@phosphor-icons/react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

export default function ProductCard({
  product,
  view = "grid",
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl ${
        view === "list" ? "flex" : ""
      }`}
    >
      {/* Top */}

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6">

        {/* Badge */}

        {product.badge && (
          <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {product.badge}
          </span>
        )}

        {/* Actions */}

        <div className="absolute right-4 top-4 flex gap-2">

          <button className="rounded-xl bg-white/15 p-2 backdrop-blur transition hover:bg-white/25">
            <Heart size={18} />
          </button>

          <button className="rounded-xl bg-white/15 p-2 backdrop-blur transition hover:bg-white/25">
            <Scales size={18} />
          </button>

        </div>

        {/* Fake Bank Card */}

        <motion.div
          whileHover={{
            rotate: -2,
            scale: 1.03,
          }}
          className="mx-auto mt-10 h-44 w-full max-w-[280px] rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-6 text-white shadow-2xl"
        >
          <div className="flex justify-between">

            <CreditCard size={34} />

            <BookmarkSimple
              size={24}
              weight="fill"
            />

          </div>

          <div className="mt-10">

            <p className="text-xs uppercase tracking-widest text-white/60">
              Bank
            </p>

            <h3 className="text-xl font-bold">
              {product.bank}
            </h3>

          </div>

          <p className="mt-5 text-lg font-semibold">
            {product.name}
          </p>

        </motion.div>

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-slate-900">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">

            <Star
              size={16}
              weight="fill"
              className="text-yellow-500"
            />

            <span className="text-sm font-semibold">
              {product.rating}
            </span>

          </div>

        </div>

        <p className="mt-3 leading-7 text-slate-600">
          {product.description}
        </p>

        {/* Highlights */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          {product.cashback && (
            <div className="rounded-2xl bg-blue-50 p-4">

              <p className="text-xs text-slate-500">
                Cashback
              </p>

              <h4 className="mt-1 text-xl font-bold text-blue-700">
                {product.cashback}
              </h4>

            </div>
          )}

          {product.annualFee !== undefined && (
            <div className="rounded-2xl bg-emerald-50 p-4">

              <p className="text-xs text-slate-500">
                Annual Fee
              </p>

              <h4 className="mt-1 text-xl font-bold text-emerald-700">
                ₹{product.annualFee}
              </h4>

            </div>
          )}

          {product.interestRate !== undefined && (
            <div className="rounded-2xl bg-purple-50 p-4 col-span-2">

              <p className="text-xs text-slate-500">
                Interest Rate
              </p>

              <h4 className="mt-1 text-xl font-bold text-purple-700">
                {product.interestRate}% p.a.
              </h4>

            </div>
          )}

        </div>

        {/* Features */}

        <div className="mt-6 flex flex-wrap gap-2">

          {product.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
            >
              {feature}
            </span>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-auto flex gap-3 pt-8">

          <button className="flex-1 rounded-2xl border border-slate-200 py-3 font-semibold transition hover:bg-slate-100">
            View Details
          </button>

          <button className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:shadow-xl">

            Apply Now

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </motion.div>
  );
}
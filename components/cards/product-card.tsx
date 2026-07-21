"use client";

import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ArrowRight,
  CreditCard,
} from "@phosphor-icons/react";

interface Props {
  product: {
    bank: string;
    product: string;
    annualFee: string;
    cashback: string;
    rating: number;
    color: string;
    features: string[];
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: .25,
      }}
      className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      {/* CARD PREVIEW */}

      <div
        className={`relative h-60 overflow-hidden bg-gradient-to-br ${product.color} p-8 text-white`}
      >
        <div className="absolute right-6 top-6 rounded-full bg-white/20 p-2">
          <Heart size={22} />
        </div>

        <CreditCard
          size={40}
          weight="fill"
        />

        <p className="mt-10 text-sm opacity-80">
          {product.bank}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {product.product}
        </h3>

        <div className="mt-10 text-xl tracking-[5px]">
          •••• •••• •••• 5489
        </div>
      </div>

      {/* DETAILS */}

      <div className="p-7">

        <div className="mb-5 flex items-center justify-between">

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-slate-500">
            Cashback {product.cashback}
          </span>

        </div>

        <div className="mb-6 flex flex-wrap gap-2">

          {product.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"
            >
              {feature}
            </span>
          ))}

        </div>

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Annual Fee
            </p>

            <h4 className="text-2xl font-bold">
              {product.annualFee}
            </h4>

          </div>

          <button className="rounded-xl border px-5 py-2 text-sm font-medium transition hover:bg-slate-100">
            Compare
          </button>

        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white transition group-hover:scale-[1.02]">

          Apply Now

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}
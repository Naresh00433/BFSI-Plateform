"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react";

interface Offer {
  bank: string;
  product: string;
  offer: string;
  fee: string;
  badge: string;
  color: string;
}

export default function OfferCard({
  offer,
}: {
  offer: Offer;
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className={`group relative h-[420px] overflow-hidden rounded-[36px] bg-gradient-to-br ${offer.color} p-8 text-white`}
    >
      {/* Background Decorations */}

      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

      <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur">
        {offer.badge}
      </span>

      <div className="mt-10">

        <p className="text-sm text-white/80">
          {offer.bank}
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          {offer.product}
        </h3>

        <div className="mt-8 flex items-center gap-2">

          <Sparkle weight="fill" size={22} />

          <span className="text-xl font-semibold">
            {offer.offer}
          </span>

        </div>

        <p className="mt-3 text-white/80">
          {offer.fee}
        </p>

      </div>

      <button className="absolute bottom-8 left-8 flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition group-hover:gap-4">
        Apply Now
        <ArrowRight size={18} />
      </button>

    </motion.div>
  );
}
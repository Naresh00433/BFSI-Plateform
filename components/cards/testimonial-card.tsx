"use client";

import { Star } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface Props {
  testimonial: {
    name: string;
    role: string;
    review: string;
  };
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="w-[360px] rounded-[30px] bg-white p-8 shadow-sm transition hover:shadow-xl"
    >
      <div className="mb-6 flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} weight="fill" size={18} />
        ))}
      </div>

      <p className="leading-8 text-slate-600">
        {'"'}{testimonial.review}{'"'}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white">
          {initials}
        </div>

        <div>
          <h4 className="font-semibold">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import TestimonialCard from "@/components/cards/testimonial-card";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="section overflow-hidden bg-slate-50">

      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Trusted By Customers Across India
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Thousands of users rely on our platform to compare
            financial products with confidence.
          </p>

        </div>

      </div>

      <div className="flex animate-[marquee_40s_linear_infinite] gap-8 hover:[animation-play-state:paused]">

        {items.map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            testimonial={item}
          />
        ))}

      </div>

    </section>
  );
}
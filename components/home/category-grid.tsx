"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Explore Categories
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Everything You Need
            <span className="gradient-text">
              {" "}Under One Platform
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Compare financial products from trusted banks,
            NBFCs and insurance providers across India.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">

                  <div
                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon size={40} weight="fill" />
                  </div>

                  <h3 className="text-3xl font-bold transition group-hover:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-slate-500 transition group-hover:text-white/80">
                    {category.subtitle}
                  </p>

                  <button className="mt-10 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:text-white">

                    Explore

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-2"
                    />

                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
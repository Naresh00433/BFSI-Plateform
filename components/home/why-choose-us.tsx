"use client";

import { motion } from "framer-motion";
import { whyChoose } from "@/data/why-choose";

export default function WhyChooseUs() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why FinFlow?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Built to Make Financial Decisions
            <span className="gradient-text"> Simpler</span>
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Everything you need to compare, evaluate and apply for financial
            products—all in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[32px] bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div
                  className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white transition duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={38} weight="fill" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
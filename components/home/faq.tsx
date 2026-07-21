"use client";

import { useMemo, useState } from "react";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    if (!search) return faqs;

    return faqs.filter(
      (item) =>
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="section bg-white">
      <div className="container-custom max-w-5xl">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            FAQs
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Everything you need to know before applying.
          </p>

        </div>

        {/* Search */}

        <div className="relative mx-auto mt-12 max-w-xl">

          <MagnifyingGlass
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 py-4 pl-14 pr-5 shadow-sm focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* FAQ */}

        <div className="mt-12 space-y-5">

          {filtered.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <CaretDown size={24} />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <p className="px-7 pb-7 leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-14 rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Still have questions?
          </h3>

          <p className="mt-4 text-blue-100">
            Our financial experts are here to help you choose the right product.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Contact Support
          </button>

        </div>

      </div>
    </section>
  );
}
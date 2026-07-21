"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { banks } from "@/data/banks";

export default function TrustedBanks() {
  const allBanks = [...banks, ...banks];

  return (
    <section className="section overflow-hidden bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Banking Partners
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Partnered with India's
            <span className="gradient-text">
              {" "}
              Leading Financial Institutions
            </span>
          </h2>

          <p className="mt-5 text-slate-500">
            Compare products from India's most trusted banks, NBFCs and
            insurance providers in one place.
          </p>
        </div>

        <div className="relative mt-16">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {allBanks.map((bank, index) => (
              <div
                key={index}
                className="glass flex h-28 w-52 items-center justify-center rounded-3xl transition duration-300 hover:-translate-y-2"
              >
                {/* <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={120}
                  height={60}
                  className="object-contain"
                /> */}
                <span className="text-lg font-semibold text-slate-700">
                  {bank.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

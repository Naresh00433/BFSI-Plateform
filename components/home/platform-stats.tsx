"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { platformStats } from "@/data/platform-stats";

export default function PlatformStats() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[150px]" />

      </div>

      <div className="container-custom relative">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Trusted by Thousands Across India
          </h2>

          <p className="mt-5 text-slate-300">
            Helping users compare and apply for financial
            products with confidence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {platformStats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div
                  className={`mb-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                >
                  <Icon
                    size={34}
                    weight="fill"
                  />
                </div>

                <h3 className="text-5xl font-black">

                  <CountUp
                    end={item.value}
                    duration={2}
                    decimals={item.value % 1 ? 1 : 0}
                  />

                  {item.suffix}

                </h3>

                <p className="mt-4 text-slate-300">
                  {item.title}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}
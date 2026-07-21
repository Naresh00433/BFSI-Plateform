"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/how-it-works";

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Your Financial Journey
            <span className="gradient-text"> Made Simple</span>
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Complete your application in four simple steps.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Connection Line */}

          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 lg:block rounded-full" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
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
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="relative text-center"
                >

                  <div
                    className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-xl`}
                  >
                    <Icon
                      size={42}
                      weight="fill"
                    />
                  </div>

                  <div className="mt-8 rounded-[28px] bg-slate-50 p-8 transition hover:shadow-xl">

                    <span className="text-sm font-bold text-blue-600">
                      STEP {step.step}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
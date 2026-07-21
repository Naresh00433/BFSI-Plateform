"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Buildings,
  Users,
} from "@phosphor-icons/react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700" />

      {/* Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-400/20 blur-[140px]" />

      {/* Floating Shapes */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-20 w-20 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-16 right-16 h-28 w-28 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
      />

      <div className="container-custom relative">

        <div className="mx-auto max-w-4xl text-center text-white">

          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            Get Started Today
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            Ready To Find Your
            <br />
            Perfect Financial Product?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-blue-100">
            Compare products from India's leading financial institutions,
            check eligibility instantly, and complete your application in minutes.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <button className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-5 font-semibold text-slate-900 transition hover:scale-105">

              Compare Products

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-5 font-semibold backdrop-blur transition hover:bg-white/20">

              <Phone weight="fill" size={20} />

              Talk To An Expert

            </button>

          </div>

          {/* Trust Badges */}

          <div className="mt-16 flex flex-wrap justify-center gap-8">

            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur">

              <Buildings
                weight="fill"
                size={22}
              />

              <span>50+ Banking Partners</span>

            </div>

            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur">

              <Users
                weight="fill"
                size={22}
              />

              <span>25K+ Happy Customers</span>

            </div>

            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur">

              <ShieldCheck
                weight="fill"
                size={22}
              />

              <span>100% Secure Applications</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
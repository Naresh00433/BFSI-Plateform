"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MagnifyingGlass,
  CreditCard,
  Bank,
  ShieldCheck,
  Star,
} from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20">

      {/* Background Gradient */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

      </div>

      <div className="container-custom grid min-h-[90vh] items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">

            <Star
              weight="fill"
              size={18}
            />

            Trusted by 50+ Banking Partners

          </div>

          <h1 className="mb-8 text-6xl font-black leading-tight">

            Compare

            <span className="gradient-text">
              {" "}Financial Products
            </span>

            <br />

            in Minutes.

          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600">

            Discover the best Credit Cards,
            Personal Loans, Home Loans,
            Insurance Plans and Savings
            Accounts from India's leading banks.

          </p>

          {/* SEARCH */}

          <div className="glass mt-10 flex rounded-3xl p-3">

            <MagnifyingGlass
              size={24}
              className="mx-4 my-auto text-slate-400"
            />

            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="Search Credit Card, Loan, Insurance..."
            />

            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

              Search

            </button>

          </div>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="primary-button flex items-center gap-2">

              Explore Products

              <ArrowRight size={18} />

            </button>

            <button className="secondary-button">

              Compare Now

            </button>

          </div>

          {/* STATS */}

          <div className="mt-14 flex flex-wrap gap-10">

            <div>

              <h2 className="text-3xl font-bold text-blue-600">

                150+

              </h2>

              <p className="text-slate-500">

                Products

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-blue-600">

                50+

              </h2>

              <p className="text-slate-500">

                Banks

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-blue-600">

                25K+

              </h2>

              <p className="text-slate-500">

                Customers

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative hidden lg:block"
        >

          {/* CENTER CARD */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="glass mx-auto w-[380px] rounded-[32px] p-8"
          >

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  Featured Card

                </p>

                <h3 className="mt-1 text-xl font-bold">

                  Platinum Rewards

                </h3>

              </div>

              <CreditCard
                size={40}
                weight="fill"
                className="text-blue-600"
              />

            </div>

            <div className="mb-10 h-52 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-6 text-white">

              <p className="text-sm opacity-80">

                FinFlow Bank

              </p>

              <div className="mt-12 text-2xl tracking-[4px]">

                •••• •••• •••• 5489

              </div>

              <div className="mt-8 flex justify-between">

                <div>

                  <p className="text-xs opacity-80">

                    Card Holder

                  </p>

                  <p className="font-semibold">

                    Demo User

                  </p>

                </div>

                <div>

                  <p className="text-xs opacity-80">

                    Valid

                  </p>

                  <p className="font-semibold">

                    12/30

                  </p>

                </div>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <span>Cashback</span>

              <strong>5%</strong>

            </div>

            <div className="mt-4 flex justify-between text-sm">

              <span>Annual Fee</span>

              <strong>₹999</strong>

            </div>

            <div className="mt-4 flex justify-between text-sm">

              <span>Rating</span>

              <strong>4.9 ★</strong>

            </div>

          </motion.div>

          {/* FLOATING CARDS */}

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="glass absolute left-0 top-24 rounded-3xl p-5"
          >

            <Bank
              size={34}
              className="mb-3 text-green-600"
            />

            <h4 className="font-bold">

              Home Loan

            </h4>

            <p className="text-sm text-slate-500">

              Starts @ 8.35%

            </p>

          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="glass absolute bottom-12 right-0 rounded-3xl p-5"
          >

            <ShieldCheck
              size={34}
              className="mb-3 text-cyan-600"
            />

            <h4 className="font-bold">

              Health Cover

            </h4>

            <p className="text-sm text-slate-500">

              ₹10L Coverage

            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
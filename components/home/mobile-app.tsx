"use client";

import { motion } from "framer-motion";
import {
  DeviceMobile,
  CheckCircle,
  GooglePlayLogo,
  AppStoreLogo,
  Star,
  DownloadSimple,
} from "@phosphor-icons/react";

const features = [
  "Compare Financial Products",
  "Instant Eligibility Check",
  "Track Loan Applications",
  "Secure Digital Onboarding",
];

export default function MobileApp() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[180px]" />

      <div className="container-custom relative">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              Mobile Experience
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">
              Banking In Your Pocket
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Compare products, check eligibility, calculate EMI,
              and track applications anytime, anywhere.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <CheckCircle
                    weight="fill"
                    size={24}
                    className="text-green-400"
                  />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 text-slate-900 transition hover:scale-105">

                <AppStoreLogo
                  size={34}
                  weight="fill"
                />

                <div className="text-left">

                  <p className="text-xs">
                    Download on the
                  </p>

                  <strong>App Store</strong>

                </div>

              </button>

              <button className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur transition hover:bg-white/20">

                <GooglePlayLogo
                  size={34}
                  weight="fill"
                />

                <div className="text-left">

                  <p className="text-xs">
                    Get it on
                  </p>

                  <strong>Google Play</strong>

                </div>

              </button>

            </div>

            {/* Stats */}

            <div className="mt-12 flex gap-10">

              <div>

                <div className="flex items-center gap-2">

                  <Star
                    weight="fill"
                    className="text-yellow-400"
                  />

                  <span className="text-3xl font-bold">
                    4.9
                  </span>

                </div>

                <p className="text-slate-400">
                  App Rating
                </p>

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <DownloadSimple
                    weight="fill"
                    className="text-green-400"
                  />

                  <span className="text-3xl font-bold">
                    100K+
                  </span>

                </div>

                <p className="text-slate-400">
                  Downloads
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative flex justify-center"
          >

            {/* Floating Cards */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-0 top-10 rounded-2xl bg-white p-4 text-slate-900 shadow-xl"
            >
              <p className="text-xs text-slate-500">
                EMI Calculated
              </p>

              <h4 className="font-bold">
                ₹8,675/month
              </h4>

            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute right-0 bottom-10 rounded-2xl bg-white p-4 text-slate-900 shadow-xl"
            >
              <p className="text-xs text-slate-500">
                Eligibility
              </p>

              <h4 className="font-bold text-green-600">
                92%
              </h4>

            </motion.div>

            {/* Phone */}

            <motion.div
              whileHover={{
                rotate: -3,
                scale: 1.03,
              }}
              className="flex h-[650px] w-[330px] items-center justify-center rounded-[50px] border-[10px] border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_40px_120px_rgba(0,0,0,.5)]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">

                <DeviceMobile
                  size={140}
                  weight="fill"
                  className="text-white/90"
                />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
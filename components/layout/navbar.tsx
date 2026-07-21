"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  List,
  X,
  CaretDown,
  ArrowRight,
} from "@phosphor-icons/react";

const navigation = [
  {
    title: "Products",
    items: [
      "Credit Cards",
      "Personal Loans",
      "Home Loans",
      "Insurance",
      "Savings Accounts",
    ],
  },
  {
    title: "Calculators",
    items: [
      "EMI Calculator",
      "Eligibility",
      "SIP Calculator",
    ],
  },
  {
    title: "Compare",
    href: "/compare",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
              F
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold">
                FinFlow
              </h2>

              <p className="text-xs text-slate-500">
                Compare • Apply • Save
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navigation.map((item) =>
              item.items ? (
                <div
                  key={item.title}
                  className="group relative cursor-pointer"
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-blue-600">
                    {item.title}

                    <CaretDown
                      size={14}
                      weight="bold"
                    />
                  </button>

                  <div className="absolute left-0 top-full mt-4 hidden w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl group-hover:block">

                    {item.items.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href!}
                  className="relative text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="font-medium text-slate-700 transition hover:text-blue-600">
              Login
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg transition hover:scale-105">
              Apply Now

              <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <List size={28} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>

        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="border-t bg-white lg:hidden"
          >
            <div className="container-custom py-6">

              {navigation.map((item) => (
                <div key={item.title}>

                  <div className="py-3 font-semibold">
                    {item.title}
                  </div>

                  {item.items?.map((sub) => (
                    <a
                      href="#"
                      key={sub}
                      className="block py-2 pl-4 text-slate-600"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              ))}

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-3 font-semibold text-white">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
}
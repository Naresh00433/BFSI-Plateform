"use client";

import {
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  ArrowUp,
  PaperPlaneTilt,
  ShieldCheck,
  Lock,
  Buildings,
} from "@phosphor-icons/react";

const footerLinks = {
  Products: [
    "Credit Cards",
    "Personal Loans",
    "Home Loans",
    "Insurance",
  ],
  Company: [
    "About Us",
    "Careers",
    "Partners",
    "Press",
  ],
  Resources: [
    "Blog",
    "Guides",
    "FAQs",
    "Terms",
  ],
  Support: [
    "Help Center",
    "Contact",
    "Privacy Policy",
    "Security",
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.12),transparent_45%)]" />

      <div className="container-custom relative py-20">

        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-5">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="text-3xl font-black gradient-text">
              FinFlow
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Compare, apply and manage financial products
              from India's leading banks and financial institutions
              on one secure platform.
            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="mb-4 font-semibold">
                Subscribe to our newsletter
              </h4>

              <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5">

                <input
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-5 py-4 outline-none"
                />

                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6">

                  <PaperPlaneTilt
                    size={22}
                    weight="fill"
                  />

                </button>

              </div>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              {[

                FacebookLogo,
                InstagramLogo,
                LinkedinLogo,
                XLogo,

              ].map((Icon, index) => (

                <button
                  key={index}
                  className="rounded-2xl bg-white/5 p-4 transition hover:bg-blue-600"
                >
                  <Icon size={22} weight="fill" />
                </button>

              ))}

            </div>

          </div>

          {/* Links */}

          {Object.entries(footerLinks).map(([title, links]) => (

            <div key={title}>

              <h3 className="mb-6 text-lg font-semibold">
                {title}
              </h3>

              <ul className="space-y-4">

                {links.map((item) => (

                  <li key={item}>

                    <button className="text-slate-400 transition hover:text-white">
                      {item}
                    </button>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Trust */}

        <div className="my-16 h-px bg-white/10" />

        <div className="flex flex-wrap justify-center gap-6">

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">

            <ShieldCheck
              size={22}
              weight="fill"
            />

            <span>SSL Secured</span>

          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">

            <Lock
              size={22}
              weight="fill"
            />

            <span>256-bit Encryption</span>

          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">

            <Buildings
              size={22}
              weight="fill"
            />

            <span>50+ Banking Partners</span>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-slate-400">
            © 2026 FinFlow. All rights reserved.
          </p>

          <div className="flex gap-8 text-slate-400">

            <button className="hover:text-white">
              Privacy
            </button>

            <button className="hover:text-white">
              Terms
            </button>

            <button className="hover:text-white">
              Cookies
            </button>

          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 transition hover:scale-110"
          >
            <ArrowUp
              size={20}
              weight="bold"
            />
          </button>

        </div>

      </div>

    </footer>
  );
}
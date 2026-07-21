"use client";

import { useMemo, useState } from "react";
import { Calculator } from "@phosphor-icons/react";
import Slider from "@/components/shared/slider";

export default function EmiCalculator() {
  const [loan, setLoan] = useState([1000000]);
  const [rate, setRate] = useState([8.5]);
  const [years, setYears] = useState([20]);

  const result = useMemo(() => {
    const P = loan[0];
    const r = rate[0] / 12 / 100;
    const n = years[0] * 12;

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const total = emi * n;
    const interest = total - P;

    return {
      emi,
      total,
      interest,
    };
  }, [loan, rate, years]);

  const format = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="section bg-white">
      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            EMI Calculator
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Calculate Your Loan EMI
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Estimate your monthly repayment instantly before applying.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-[36px] bg-slate-50 p-10">

            <label className="font-semibold">
              Loan Amount
            </label>

            <p className="mb-4 mt-2 text-3xl font-bold">
              ₹{format(loan[0])}
            </p>

            <Slider
              value={loan}
              onValueChange={setLoan}
              min={100000}
              max={5000000}
              step={50000}
            />

            <div className="mt-10">

              <label className="font-semibold">
                Interest Rate
              </label>

              <p className="mb-4 mt-2 text-3xl font-bold">
                {rate[0]}%
              </p>

              <Slider
                value={rate}
                onValueChange={setRate}
                min={5}
                max={20}
                step={0.1}
              />

            </div>

            <div className="mt-10">

              <label className="font-semibold">
                Loan Tenure
              </label>

              <p className="mb-4 mt-2 text-3xl font-bold">
                {years[0]} Years
              </p>

              <Slider
                value={years}
                onValueChange={setYears}
                min={1}
                max={30}
              />

            </div>

          </div>

          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white">

            <div className="mb-10 flex items-center gap-4">

              <div className="rounded-2xl bg-white/10 p-4">
                <Calculator
                  size={34}
                  weight="fill"
                />
              </div>

              <h3 className="text-3xl font-bold">
                Loan Summary
              </h3>

            </div>

            <div className="space-y-8">

              <div>
                <p className="text-slate-400">
                  Monthly EMI
                </p>

                <h2 className="mt-2 text-5xl font-black">
                  ₹{format(result.emi)}
                </h2>
              </div>

              <div className="border-t border-white/10 pt-8">

                <div className="flex justify-between">

                  <span>Total Interest</span>

                  <strong>
                    ₹{format(result.interest)}
                  </strong>

                </div>

              </div>

              <div className="flex justify-between">

                <span>Total Payment</span>

                <strong>
                  ₹{format(result.total)}
                </strong>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold">
                Apply For Loan
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
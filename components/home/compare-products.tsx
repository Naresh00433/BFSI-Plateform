"use client";

import { useState } from "react";
import { comparisonData } from "@/data/comparison";
import { Check, X } from "@phosphor-icons/react";

const categories = Object.keys(comparisonData);

export default function CompareProducts() {
  const [category, setCategory] = useState(categories[0]);

  const products =
    comparisonData[
      category as keyof typeof comparisonData
    ];

  return (
    <section className="section bg-white">
      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Compare Products
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Choose The Best Financial Product
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Compare features side by side before making a decision.
          </p>

        </div>

        <div className="mb-10 flex justify-center">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-medium shadow-sm"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">

          <table className="w-full border-collapse">

            <thead className="bg-slate-900 text-white">

              <tr>

                <th className="p-6 text-left">
                  Features
                </th>

                {products.map((product) => (
                  <th
                    key={product.bank}
                    className="p-6 text-center"
                  >
                    {product.bank}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              <Row
                label="Annual Fee"
                values={products.map((p) => p.annualFee)}
              />

              <Row
                label="Cashback"
                values={products.map((p) => p.cashback)}
              />

              <Row
                label="Lounge Access"
                values={products.map((p) =>
                  p.lounge ? (
                    <Check
                      key="check"
                      weight="bold"
                      className="mx-auto text-green-500"
                    />
                  ) : (
                    <X
                      key="x"
                      weight="bold"
                      className="mx-auto text-red-500"
                    />
                  )
                )}
              />

              <Row
                label="Benefits"
                values={products.map((p) => p.rewards)}
              />

              <Row
                label="Rating"
                values={products.map((p) => `⭐ ${p.rating}`)}
              />

            </tbody>

          </table>

        </div>

        <div className="mt-10 text-center">

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Compare More Products
          </button>

        </div>

      </div>
    </section>
  );
}

function Row({
  label,
  values,
}: {
  label: string;
  values: React.ReactNode[];
}) {
  return (
    <tr className="border-t">

      <td className="bg-slate-50 p-6 font-semibold">
        {label}
      </td>

      {values.map((value, index) => (
        <td
          key={index}
          className="p-6 text-center"
        >
          {value}
        </td>
      ))}

    </tr>
  );
}
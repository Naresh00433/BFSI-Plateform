"use client";

import { useMemo, useState } from "react";
import Slider from "@/components/shared/slider";
import { eligibilityCards } from "@/data/eligibility-cards";
import { CheckCircle, CreditCard } from "@phosphor-icons/react";

export default function EligibilityChecker() {
  const [income, setIncome] = useState([80000]);
  const [score, setScore] = useState("Excellent");
  const [employment, setEmployment] = useState("Salaried");
  const [age, setAge] = useState([28]);

  const scoreValue =
    score === "Excellent"
      ? 800
      : score === "Good"
      ? 740
      : score === "Average"
      ? 690
      : 620;

  const eligibleCards = useMemo(() => {
    return eligibilityCards.filter(
      (card) =>
        income[0] >= card.income &&
        scoreValue >= card.score
    );
  }, [income, scoreValue]);

  const eligibilityPercent = Math.min(
    100,
    Math.round(
      ((income[0] / 100000) * 60 +
        (scoreValue / 850) * 40)
    )
  );

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Eligibility Checker
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Find Cards You're Eligible For
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Check your eligibility instantly before applying.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[36px] bg-white p-10 shadow-sm">

            <label className="font-semibold">
              Monthly Income
            </label>

            <p className="mb-4 mt-2 text-3xl font-bold">
              ₹{income[0].toLocaleString("en-IN")}
            </p>

            <Slider
              value={income}
              onValueChange={setIncome}
              min={10000}
              max={300000}
              step={5000}
            />

            <div className="mt-10">

              <label className="font-semibold">
                Credit Score
              </label>

              <select
                className="mt-3 w-full rounded-xl border p-4"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>

            </div>

            <div className="mt-8">

              <label className="font-semibold">
                Employment
              </label>

              <select
                className="mt-3 w-full rounded-xl border p-4"
                value={employment}
                onChange={(e) => setEmployment(e.target.value)}
              >
                <option>Salaried</option>
                <option>Self Employed</option>
                <option>Business</option>
              </select>

            </div>

            <div className="mt-10">

              <label className="font-semibold">
                Age
              </label>

              <p className="mb-4 mt-2 text-3xl font-bold">
                {age[0]} Years
              </p>

              <Slider
                value={age}
                onValueChange={setAge}
                min={18}
                max={65}
              />

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white">

            <div className="flex items-center gap-4">

              <CreditCard
                size={34}
                weight="fill"
              />

              <h3 className="text-3xl font-bold">
                Eligibility Result
              </h3>

            </div>

            <div className="mt-10">

              <div className="mb-3 flex justify-between">
                <span>Eligibility Score</span>
                <strong>{eligibilityPercent}%</strong>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                  style={{
                    width: `${eligibilityPercent}%`,
                  }}
                />
              </div>

            </div>

            <div className="mt-10 space-y-4">

              {eligibleCards.length ? (
                eligibleCards.map((card) => (
                  <div
                    key={card.name}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <CheckCircle
                      weight="fill"
                      className="text-green-400"
                      size={24}
                    />

                    <span>{card.name}</span>

                  </div>
                ))
              ) : (
                <div className="rounded-2xl bg-white/5 p-6 text-slate-300">
                  No eligible cards found. Try adjusting your details.
                </div>
              )}

            </div>

            <button className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold transition hover:scale-[1.02]">
              View Eligible Cards
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
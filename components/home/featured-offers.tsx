"use client";

import OfferCard from "@/components/cards/offer-card";
import { featuredOffers } from "@/data/featured-offers";

export default function FeaturedOffers() {
  return (
    <section className="section bg-slate-50">

      <div className="container-custom">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              🔥 Featured Offers
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Offers You Shouldn't Miss
            </h2>

            <p className="mt-4 text-lg text-slate-500">
              Exclusive deals from India's top financial institutions.
            </p>

          </div>

          <button className="hidden rounded-xl border px-6 py-3 font-semibold transition hover:bg-slate-100 lg:block">
            View All Offers
          </button>

        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">

          {featuredOffers.map((offer) => (
            <div
              key={offer.id}
              className="min-w-[340px] flex-1 snap-start lg:min-w-[380px]"
            >
              <OfferCard offer={offer} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
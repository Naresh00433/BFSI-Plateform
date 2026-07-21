import { Product } from "./types";

export const products: Product[] = [
  {
    id: "hdfc-millennia",

    category: "credit-card",

    bank: "HDFC Bank",

    name: "Millennia Credit Card",

    description:
      "Best cashback card for shopping and online spending.",

    image: "/cards/hdfc-millennia.png",

    annualFee: 999,

    cashback: "5%",

    rating: 4.9,

    badge: "Most Popular",

    featured: true,

    features: [
      "Airport Lounge",
      "Cashback",
      "Fuel Waiver",
    ],

    tags: [
      "shopping",
      "cashback",
    ],
  },

  {
    id: "axis-ace",

    category: "credit-card",

    bank: "Axis Bank",

    name: "ACE Credit Card",

    description:
      "Excellent utility bill cashback and rewards.",

    image: "/cards/axis-ace.png",

    annualFee: 499,

    cashback: "4%",

    rating: 4.8,

    featured: true,

    features: [
      "Google Pay",
      "Cashback",
      "Dining",
    ],

    tags: [
      "utility",
      "cashback",
    ],
  },

  {
    id: "sbi-home-loan",

    category: "home-loan",

    bank: "SBI",

    name: "Home Loan",

    description:
      "Affordable interest rates with flexible tenure.",

    image: "/cards/home-loan.png",

    interestRate: 8.35,

    rating: 4.7,

    featured: false,

    features: [
      "Low Interest",
      "Flexible EMI",
    ],

    tags: [
      "loan",
      "home",
    ],
  },
];
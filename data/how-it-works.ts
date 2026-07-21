import {
  MagnifyingGlass,
  ClipboardText,
  NotePencil,
  SealCheck,
} from "@phosphor-icons/react";

export const steps = [
  {
    step: "01",
    title: "Compare Products",
    description:
      "Browse and compare financial products from India's leading banks.",
    icon: MagnifyingGlass,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Check Eligibility",
    description:
      "Find products you're most likely to qualify for before applying.",
    icon: ClipboardText,
    color: "from-violet-500 to-indigo-500",
  },
  {
    step: "03",
    title: "Apply Online",
    description:
      "Complete a simple digital application in just a few minutes.",
    icon: NotePencil,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "04",
    title: "Get Approved",
    description:
      "Track your application and receive updates until approval.",
    icon: SealCheck,
    color: "from-green-500 to-emerald-500",
  },
];
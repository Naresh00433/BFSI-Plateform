"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export default function Slider({
  value,
  onValueChange,
  min,
  max,
  step,
}: {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <SliderPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      className="relative flex h-6 w-full touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-blue-600 to-indigo-600" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-lg transition hover:scale-110 focus:outline-none" />
    </SliderPrimitive.Root>
  );
}
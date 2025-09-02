"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Default gradients for the sticky preview card
const DEFAULT_LINEAR_GRADIENTS = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
];

export const StickyScroll = ({
  content,
  contentClassName,
  backgroundVars,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  /**
   * Optional list of CSS variable names (with or without leading --) to use for background colors.
   * Example: ["--chart-1", "--chart-2", "--chart-3"] or ["primary", "secondary", "accent"]
   */
  backgroundVars?: string[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Use CSS variables for background colors. Fallback to chart vars if none provided.
  const cssVarList = (backgroundVars && backgroundVars.length > 0
    ? backgroundVars
    : ["--primary", "--muted-foreground", "--sidebar-ring"]).map((v) =>
      v.startsWith("--") ? v : `--${v}`,
    );
  const [backgroundGradient, setBackgroundGradient] = useState(
    DEFAULT_LINEAR_GRADIENTS[0],
  );

  useEffect(() => {
    setBackgroundGradient(
      DEFAULT_LINEAR_GRADIENTS[activeCard % DEFAULT_LINEAR_GRADIENTS.length],
    );
  }, [activeCard]);

  const currentBgVar = cssVarList[activeCard % cssVarList.length];

  return (
    <motion.div
      style={{ backgroundColor: `var(${currentBgVar})` }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto p-10 transition-colors duration-500"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-lg bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

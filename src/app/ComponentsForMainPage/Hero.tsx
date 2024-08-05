
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function AuroraBackgroundDemo() {






  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={ {y} }
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Front-End
          <br/>
          Back-End
          <br />
          Full-Stack 

        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Check out my portfolio to see some cool projects that I did
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Checkout
        </button>
      </motion.div>
      </>
  );
}

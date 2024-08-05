"use client";
import React, { useRef, useState } from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


export function BackgroundBoxesDemo() {
  const [animate, setAnimate] = useState<number>(0)
  const { scrollY } = useScroll()
  //84 1 component
   const ref = useRef(null);
 

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    setAnimate(latest)
  })

  
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);


  
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <motion.div
   
      animate={{ y: -animate }}  
      style={{ pathLength: scrollYProgress }}
      transition={{ ease: "easeOut", duration: 0.1 }}
      >

      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Full-Stack Web Developer
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Create optimal and bealtifull web applications
      </p>
    
      </motion.div>
    </div>
  );
}

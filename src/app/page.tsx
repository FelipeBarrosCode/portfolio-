"use client"
import Image from "next/image";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { AppleCardsCarouselDemo } from "./ComponentsForMainPage/Content";
import Navbar from "./ComponentsForMainPage/Floatnav";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundBoxesDemo } from "./ComponentsForMainPage/bg-boxes";
import { CarouselSpacing } from "./ComponentsForMainPage/carouselAutoScroll";
import { Boxes } from "@/components/ui/background-boxes";
import { PaginationDemo } from "./ComponentsForMainPage/pagination";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useMotionValueEvent, useScroll } from "framer-motion"
import { AboutMe } from "./ComponentsForMainPage/Aboutme";
import ExperienceSection from "./ComponentsForMainPage/ExperienceSection";




export default function Home() {



  const contentTpoRender:Array<any> = []
  return(
    <>
      
      
      <Navbar/>
   
      {/* <BackgroundBoxesDemo/> */}
      

      <AboutMe/>

      <CarouselSpacing/>

      <ExperienceSection/>
      
    

      <span id="content"></span>
      <PaginationDemo/>
      
      
      
    
    
    </>
  )
}

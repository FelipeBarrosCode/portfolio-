"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import RevealBottom from "./RevealBottom";

export function AboutMe() {
  return (
    <>

 
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
   
    <RevealBottom>
      <p className="text-neutral-500 w-11/12 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        
      Hi, I&#39;m Felipe Barros Moura, a Full Stack developer with over a year of experience crafting {" "} 
      <LinkPreview url="https://github.com/FelipeBarrosCode" className="font-bold text-white">
      web applications. 
      </LinkPreview>{" "}
      Currently studying Computer Science at 
      <LinkPreview url="https://langara.ca/" className="font-bold text-white">{" "} 
      Langara College 
      </LinkPreview>{" "}
      in Vancouver, 
      I bring a global perspective shaped by my Brazilian roots from 
      <LinkPreview url="https://www.google.com/maps/place/Belo+Horizonte,+MG,+Brasil/@-19.9027163,-43.9640501,11z/data=!3m1!4b1!4m6!3m5!1s0xa690cacacf2c33:0x5b35795e3ad23997!8m2!3d-19.919052!4d-43.9386685!16zL20vMGwzcTI?entry=ttu" className="font-bold text-white">{" "} 
      Belo Horizonte. 
      </LinkPreview>{" ."} 

      I&#39;ve worked with technologies like 
      
        
        <LinkPreview url="https://nextjs.org/" className="font-bold text-white"> Next.js</LinkPreview>{" ,"}
        <LinkPreview url="https://tailwindcss.com/" className="font-bold text-white">Tailwind CSS</LinkPreview>{" ,"}
        <LinkPreview url="https://expressjs.com//" className="font-bold text-white">Express.js</LinkPreview>{" , and "}
        <LinkPreview url="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_amers-us-ca_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14291004479&adgroup=128837427347&cq_cmp=14291004479&gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqEnnYNGzeR6oolEak11SJb_EMKLpIDHPXhysJ6SDyv_Ux8-OgW3-CsaAs6nEALw_wcB " className="font-bold text-white">MongoDB</LinkPreview>{" "}
        to build dynamic web applications.
     
      </p>
      </RevealBottom>
    </div>
  
    </> 
  );
}

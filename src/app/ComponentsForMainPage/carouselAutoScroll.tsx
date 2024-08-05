"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Boxes } from "@/components/ui/background-boxes"
import { EmblaOptionsType } from 'embla-carousel'
import Image from "next/image"
import RevealBottom from "./RevealBottom"

interface ImageCarousel{
  urlPath:string
}


export function CarouselSpacing() {
   
  const content:Array<ImageCarousel> = [
    {
      urlPath:"/html-svgrepo-com 1HTMLFixed.svg"
    },
    {
      urlPath:"/css-svgrepo-com 1CSSFixed.svg"
    },
    {
      urlPath:"/nodejs.svg"
    },
    {
      urlPath:"/git-svgrepo-com 1GitFixed.svg"
    },
    {
      urlPath:"/js-official-svgrepo-com 1JSFixed.svg"
    },{
      urlPath:"/pgsql-svgrepo-com 1PostgressFixed.svg"
    },
    {
      urlPath:"/typescript-official-svgrepo-com 1TsFixed.svg"
    },{
      urlPath:"/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8 1TailwindFxed.svg"
    },
    {
      urlPath:"/next 1NextFixed.svg"
    },{
      urlPath:"/prisma-svgrepo-com 1PrismaFixed.svg"
    },{
      urlPath:"/reactts-svgrepo-com 1ReactFixed.svg"
    },
    {
      urlPath:"/typescript-official-svgrepo-com 1TsFixed.svg"
    },
    {
      urlPath:"/GroupMongoImage.svg"
    },
    {
      urlPath:"/VectorExpressJs.svg"
    }

    
  ] 

  function CarouselPlugin() {
    var plugin = React.useRef(
      AutoScroll({  playOnInit: true, stopOnInteraction:false })
    )
    
  }

  return (
    <>
     <div className="h-[300px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
     <div className="absolute inset-0 w-full h-[300px] bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
     <RevealBottom>
    <Carousel className="w-screen border-t-2 border-b-2 pt-4 pb-4 hover:border-yellow-400 hover:cursor-grab  active:cursor-grabbing focus-within:border-blue-400 "
    /**  @ts-ignore */
    plugins={[AutoScroll({  playOnInit: true, stopOnInteraction:false })]}>

      <CarouselContent className="-ml-4 flex flex-row items-center  ">
        {content.map((value, index) => (
          <CarouselItem key={index} className="pl-1 max-[767px]:basis-3/12 md:basis-3/12 lg:basis-2/12">
            
              <Card className=" bg-transparent border-none w-fit">
              
                  <Image src={value.urlPath} alt={""} width={80} height={80}/>
           
              </Card>
           
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
    </RevealBottom>
    </div>
    </>
  )
}

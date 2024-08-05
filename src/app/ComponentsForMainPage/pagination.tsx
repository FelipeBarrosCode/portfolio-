"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carouselSlider"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatedModalDemo } from "./githubButton"
import {useRouter} from "next/navigation"
import { MotionValue, useTransform } from "framer-motion"
import RevealBottom from "./RevealBottom"
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';


interface DataFromProjects {
  url: string,
  description: string,
  name: string,
  homepage:string | null
  
}

export function PaginationDemo() {

  const router = useRouter()
  const [data, setData] = useState<Array<DataFromProjects>>([])

  async function getData() {
    const instance = Axios.create(); 
  const axios = setupCache(instance);
  
    const content = await axios.get("/api/dataSource",{cache:false})

    console.log(content)
    setData(content.data)

  }

  useEffect(() => {

    getData()

  }, [])




  

  return (
    <>
      <div className="h-screen relative gap-8 w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <RevealBottom>
          <div className={"flex flex-col  items-center gap-10"}>
        <h1 className="text-white text-5xl"> Side Projects</h1>
        <div className=" flex justify-center items-center">

          {data.length == -1 ? <h1>Not showing</h1> :
            <Carousel className="w-screen hover:cursor-grab  active:cursor-grabbing "

            >

              <CarouselContent className="-ml-1 flex flex-row items-center  ">


                {data.map((value, index) => (
                  <CarouselItem key={index} className=" md:basis-1/3 max-[560px]:basis-full max-[766px]:basis-1/2 lg:basis-1/3 ">

                    <Card className=" shadow-lg shadow-black bg-white border-none justify-between  flex flex-col h-[500px]   p-5">

                      <div>
                        <CardHeader>
                          <CardTitle>{value.name.replaceAll("-", " ").replaceAll("_", " ")}</CardTitle>

                        </CardHeader>
                        <CardContent>
                          <CardDescription>{value.description}</CardDescription>
                        </CardContent>
                      </div>

                      <CardFooter className="flex justify-center items-start  gap-7">
                        <AnimatedModalDemo name={value.name} url={value.url} />
                        <button onClick={()=>{value.homepage? router.push(value.homepage): router.push(value.url) }} className=" h-4/12  w-5/12 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                          {value.homepage?"Online":"In progress"}
                        </button>
                      </CardFooter>


                    </Card>

                  </CarouselItem>
                ))}

              </CarouselContent>

            </Carousel>
          }
        </div>
        </div>
        </RevealBottom>



      </div>

    </>
  )
}

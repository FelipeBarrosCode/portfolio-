"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { AnimatedTooltip } from "./animated-tooltip";
import Image from "next/image"
import ImageGit from "../../../public/github.svg"
import ImageLinkedin from "../../../public/linkedin.svg"
import ImageProjects from "../../../public/blueprint-svgrepo-com.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import profile from "../../../public/myprofile.svg"
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';


interface propsToSubObj{
    id: number;
      name: string;
      designation: string;
      image:  StaticImport;
      urlLink:string;
  }
  
export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {

   

    

    
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);
    const [arrayOfItems, setArrayOfItems] = useState<any>([]);
    const contentTpoRender:Array<propsToSubObj> = [{id:1,name:"Felipe",urlLink:"/",image:profile,designation:"Owner"},{ id:2, name:"Git Hub",urlLink:"https://github.com/FelipeBarrosCode",image:ImageGit, designation:"My Git Hub"},{id:3,name:"LinkedIn",urlLink:"https://www.linkedin.com/in/felipe-barros-moura-773595261/",image:ImageLinkedin, designation:"My Linkedin"}, {id:4,name:"My Projects",urlLink:"/#content",image:ImageProjects, designation:"My Projects"}]
    
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });


    useEffect(() => {
        createComponents()

    },[])

    function createComponents() {

        let people: any = []

        navItems.map((key, index) => {

            people.push({
                id: index,
                name: key.name,
                designation: "My Social Media",
                image: key.icon,
                urlLink: key.link
            })

        })
        setArrayOfItems(people)

    }



    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex w-11/12 fixed top-14 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
                    className
                )}
            >
                
                <div className="flex-row w-full flex  justify-around">
                <AnimatedTooltip items={contentTpoRender} />
                </div>
                
            
                
            </motion.div>
        </AnimatePresence>
    );
};

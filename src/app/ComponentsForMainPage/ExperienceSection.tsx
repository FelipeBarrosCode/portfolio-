
import { useScroll, useInView, motion, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import RevealSide from './RevealSide';

interface ArrayOfExperinece{
    title:string;
        company:string;
        time:string;
        description:string;
        whatILearned:string;
}

export default function ExperienceSection(){

    const ref = useRef(null)
    const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
      const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
   

    const experience:Array<ArrayOfExperinece>=[
        {
            title:"Dishwasher",
            company:"Cactus Club Cafe",
            time:"09-2024 to present",
            description:`I keep the kitchen running smoothly by cleaning and organizing dishes, utensils, and equipment. My role ensures a clean, hygienic workspace, supporting the team and contributing to a great dining experience.`,
            whatILearned:"Time Management, Attention to Detail, Teamwork, Adaptability, Work Ethic, Organization, Problem-Solving, Resilience"
    
    
    
        },
        
        {
        title:"Software Developer",
        company:"Langara Computer Science Club",
        time:"04-2024 to present",
        description:"As part of a team, I was responsible for implementing frontend designs and logic for multiple club websites focused on events and associated tools. To accomplish this, I leveraged a diverse toolset including Tailwind CSS, Next.js, TypeScript, Git, and GitHub",
        whatILearned:"Teamwork, NextJS, TailwindCSS, TypeScript, Communication Skills, Problem-solving, Adaptability"



    },
    {
        title:"Team Member",
        company:"Oakberry",
        time:"04-2024 to present",
        description:"I excelled in a fast-paced environment by efficiently managing tasks such as dishwashing, order fulfillment, and crafting fresh bowls and smoothies. I consistently met production deadlines while maintaining accurate inventory records and upholding strict sanitation standards.",
        whatILearned:"Teamwork, Customer Service, Equipment Operation, Communication Skills, Adaptability"
    }]

    return (

        <div className="h-max relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            
            

            <h1 className='text-white text-5xl'>Experience </h1>
            
           
      {/* Element to stretch vertically */}
      <motion.div
                id="vertical-scroll-indicator"
                style={{
                    scaleY,
                    position: "absolute",
                    top: "10%",
                    left: "50%", // Adjust this value to position between your components
                    width: 5,
                    height: "100vh",
                    originY: 0, // Makes the scaling originate from the top
                    backgroundColor: "white",
                }}
            />

        {
            experience.map((value,index)=>(

                
                <div className={`w-1/2 h-max p-7 max-[751px]:w-full   text-white   ${index%2 ==0? ' self-start flex flex-col ':' self-end  flex flex-col items-end text-end'}`} key={index}>
                        <RevealSide className={`${index%2 ==0? ' text-start self-start':'text-start self-end'} h-max flex flex-col text-white gap-10`}  key={index} leftOrRight={(index%2 == 0 ? "+":"-")}>
                        <>
                        <h1 className='mb-7 text-4xl'> {value.title} </h1>
                        <h3 className='mb-3 text-2xl'> {value.company} </h3>
                        <h4 className='mb-7 text-lg'>{value.time}</h4>

                        <p className='mb-7'>
                            {value.description}
                        </p>

                        <p className='w-full mb-4 '>
                            {value.whatILearned}
                        </p>
                        </>



                        </RevealSide>
                </div>
               


            ))




        }

            


        </div>
    );



}
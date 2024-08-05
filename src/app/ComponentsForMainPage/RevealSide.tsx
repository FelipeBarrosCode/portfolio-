import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"



interface ContentToBeAniamted{

    children:JSX.Element,
    leftOrRight:string,
    className:string



}


export default function RevealSide(content:ContentToBeAniamted){

    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})


    const mainControls = useAnimation()


    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")

        }
    },[isInView])


    return(<>
    
    <div ref={ref} className={content.className} style={{position:"relative"}}>

        <motion.div
        variants={{
            hidden:{
                opacity:0,x:(content.leftOrRight == "+"? 75:-75)
            },
            visible:{
                opacity:1,x:0
            }
            
        }}

        initial="hidden"
        animate= {mainControls}
        transition={{duration:1,delay: 0.25}}
        >

            {content.children}


            
        </motion.div>



    </div>

    
    </>)



}
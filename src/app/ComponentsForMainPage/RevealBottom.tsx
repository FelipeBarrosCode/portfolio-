import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"



interface ContentToBeAniamted{

    children:JSX.Element


}


export default function RevealBottom(content:ContentToBeAniamted){

    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})


    const mainControls = useAnimation()


    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")

        }
    },[isInView])


    return(<>
    
    <div ref={ref} style={{position:"relative", width:"fit-content", overflow:"hidden"}}>

        <motion.div
        variants={{
            hidden:{
                opacity:0,y:75
            },
            visible:{
                opacity:1,y:0
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
import { Hero_Content, About_Text } from './Cntt';
import profilePic from "../profile_photo.png";
import {motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className=" lg:mb-35">
        <div className="flex flex-wrap ">
            <div className="w-full  flex-wrap lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start ">
                    <motion.h1 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                     className="pb-1 pl-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                        Uma Shanker Kori
                    </motion.h1>
                <motion.span 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r pl-5 from-pink-300 via-slate-500 to purple-500 bg-clip-text text-3xl tracking-tight text-transparent" >
                    Full Stack Developer
                </motion.span>

                <motion.p 
                variants={container(1.3)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-2 pl-5 font-light">{Hero_Content}
                </motion.p>

                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}}

                    
                    style={{width:'100%', maxWidth: '350px', height: 'auto', borderRadius:'50%' ,}} src={profilePic} alt="Kelvin Rush" />
                </div>
            </div>

            
        </div>
      
    </div>
  )
}

export default Hero

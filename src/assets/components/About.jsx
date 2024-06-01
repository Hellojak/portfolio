import aboutImg from '../profile img.jpg'
import { About_Text } from './Cntt'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <div className=" pb-4">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1}}
        
        className="my-20 text-center text-4xl">About
        <span className="text-neutral-500">Me</span>
        </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-2xl'  style={{width:"50%"}} src={aboutImg} alt="About" />
          </div>
        </motion.div>


        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 0.5}}
        
        className="w-full lg:w-1/2">
          <div className="flex lg:justify-center justify-center">
            <p className="my-2 maxw-xl py-10 px-10">{About_Text}</p>
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default About

import logo from "../logo.png"
import resumePDF from '../resume.pdf';

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const siconVariants = (duration) => ({
  initial: {y: -5},
  animate: {
      y: [5, -5],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
      }
  }
});



const Navbar = () => {
    return <nav className=" #f0f0f0 mb-20 flex items-center justify-between py-1" >
      <div className="flex flex-shrink-0 items-center ">
        {/* <img src={logo} alt="logo" className="logo mx-2"/> */}
<a href="">        <h1 style={{fontSize:'2.5rem', fontFamily:"georgia", paddingLeft:"1.5rem",
          fontWeight: "900", textOverflow: "clip"
        }}>U
         <span style={{fontWeight:"100", marginLeft:"-9px", fontSize:"2.5rem",
          boxShadow: "0px 4px 0px -1px rgb(5 0 550 / 1.1), 0 0px 0px -2px rgb(0 0 0 / 1.1)"
         }}>S</span>
          
          </h1>
          </a>


    </div>

   
      <motion.div 
      className="m-8 flex items-center justify-center gap-4 text-2xl" >
        
        <a href="https://www.linkedin.com/in/umashanker-kori-457b15220/">
        <motion.div 
         variants={siconVariants(1.5)}
         initial="initial"
         animate="animate"
        className="s1">
        <FaLinkedin/>
        </motion.div>
        </a>

         <a href="https://github.com/Hellojak">
        <motion.div 
         variants={siconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="s1">
        <FaGithub/>
        </motion.div></a>

<a href="https://www.instagram.com/koriumashankar/">
        <motion.div 
         variants={siconVariants(2.6)}
         initial="initial"
         animate="animate"
        className="s1">
        <FaInstagram />
        </motion.div></a>

<a href="https://x.com/DSEUSTUDY">
        <motion.div 
         variants={siconVariants(3)}
         initial="initial"
         animate="animate"
        className="s1">
        <FaSquareXTwitter />
        </motion.div>
        </a>


        <a href={resumePDF} target="_blank" className="text-blue-500 underline">
        <motion.div 
         variants={siconVariants(2)}
         initial="initial"
         animate="animate"
        className="s1">
        <FaDownload/>
        </motion.div>
        </a>
        
        
        
        
      </motion.div>
    </nav>;
  };
  
  export default Navbar;
  
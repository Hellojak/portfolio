import { CONTACTS } from './Cntt';
import { motion } from 'framer-motion';

function Contact() {
  
  const contact = CONTACTS[0];

  return (
    <div className="border-b border-neutral-50 pb-20">
      <motion.h1
whileInView={{opacity:1, y:0}}
initial={{opacity:0, y:-100}}
transition={{duration: 0.5}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1}}
        className="">{contact.address}
        </motion.p>


        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 1.2}}
        className="">{contact.phone}
        </motion.p>


        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1.5}}
        href={`mailto:${contact.email}`}>{contact.email}</motion.p>
      </div>
    </div>
  );
}

export default Contact;
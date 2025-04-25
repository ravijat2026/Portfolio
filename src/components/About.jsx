import React from 'react'
// import Lottie from 'lottie-react'
// import about from '../assets/lottie/about1.json'
import ravi from '../assets/icon.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
     
        <div name = "About" className="mt-10 p-5 mx-20 max-sm:p-2 max-sm:mx-5">
          
  
          <div
            className="flex justify-center gap-14 flex-row-reverse max-sm:flex-col"
            data-aos="fade-right"
          >
            <div className="max-w-[700px] mt-6 p-7 max-sm:p-3">
                <h3 className="text-[#00040f] dark:text-slate-300 font-extrabold text-4xl mb-5 max-sm:text-2xl inline dark:border-white border-[#00040f] border-b-4 ">
                About Me
                </h3>
                <p className='text-[#00040f] dark:text-slate-300 text-[16px] mt-4 md:text-lg'>
                Turning ideas into interactive web apps—front to back. I'm a full stack developer with hands-on experience in building scalable web solutions using React.js, Next.js, TypeScript, Node.js, and Tailwind CSS.</p>
                <p className='text-[#00040f] dark:text-slate-300 text-[16px] mt-2 md:text-lg'>
                I’ve built projects like Jobprepper, QueryMaster, and BlogAura, focusing on AI integration, secure authentication, and performance. I actively solve DSA problems (3⭐ CodeChef, 700+ problems solved) and enjoy building clean, efficient, and user-focused solutions. I’m passionate about learning and sharing knowledge, and I’m always eager to take on new challenges. Let's connect and create something amazing together!
                </p>
            
            </div>
            <img
              src={ravi}
              alt="Ravi jat"
              className="max-h-[320px] max-w-[320px] border-black dark:border-slate-500 border-4 rounded-full m-12"
            />
          </div>
        </div>
    
    );
  }

  export default About;
  

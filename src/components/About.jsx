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
     
        <div name = "About" className="mt-10 p-5 mx-20 min-h-screen max-sm:p-2 max-sm:mx-5">
          
  
          <div
            className="flex justify-center gap-14 flex-row-reverse max-sm:flex-col"
            data-aos="fade-right"
          >
            <div className="max-w-[650px] mt-6 p-7 max-sm:p-3">
                <h3 className="text-[#00040f] dark:text-slate-300 font-extrabold text-4xl mb-5 max-sm:text-2xl inline dark:border-white border-[#00040f] border-b-4 ">
                About Me
                </h3>
                <p className='text-[#00040f] dark:text-slate-300 text-[16px] mt-4 md:text-lg'>
                I am a passionate full stack developer with hands-on experience in building dynamic web applications using React.js, Next.js, Express, Node.js, and Tailwind CSS. My projects reflect a deep understanding of both frontend and backend technologies, and I continuously work on sharpening my skills in Data Structures and Algorithms (DSA) along with competitive programming. Eager to learn and always looking for innovative solutions, I enjoy tackling complex problems and building scalable, efficient applications.
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
  

import React from 'react'
import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
import { FaChevronCircleRight, FaPhone, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import ravi from '../assets/icon.png'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <section
        className="dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="flex flex-wrap justify-center md:ml-16">
        <div className="flex-1 min-w-[22rem] mx-10 my-6 text-gray-600 dark:text-gray-400">
          <div className='flex gap-4 items-center mb-4'>
            <img src={ravi} className='w-20 h-20' alt='Profile Picture' />
            <div className='text-[#00040f] dark:text-white'>
            <h3 className="text-2xl font-bold">Ravi Jat </h3>
            <h3 className="text-lg font-bold">Web Developer </h3>

            </div>
          </div>
          
          <p className="text-lg  mb-4">
          GSC’24 Regionalist | GSSoC'24 | Technical Team Lead - Paryavaran Shakti | Video Editing Lead - Neon | IIIT Kota'26
          </p>
        </div>

        <div className="flex-1 min-w-[22rem] mx-10 my-6 text-[#00040f] dark:text-white">
          <h3 className="text-2xl mb-4 font-bold">Quick Links</h3>
          <Link to="Home" className="text-lg cursor-pointer hover:text-slate-500  dark:hover:text-sky-300 block mb-2 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Home
          </Link>
          <Link to="About" className="text-lg cursor-pointer hover:text-slate-500  dark:hover:text-sky-300 block mb-2 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> About
          </Link>
          <Link to="Skills" className="text-lg cursor-pointer hover:text-slate-500  dark:hover:text-sky-300 block mb-2 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Skills
          </Link>
          <Link to="Projects" className="text-lg cursor-pointer hover:text-slate-500  dark:hover:text-sky-300 block mb-2 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Projects
          </Link>
          <Link to="Contact" className="text-lg cursor-pointer hover:text-slate-500  dark:hover:text-sky-300 block mb-2 hover:scale-y-110 hover:font-semibold">
            <FaChevronCircleRight className="inline pr-2" /> Contact
          </Link>
         
        </div>

        <div className="flex-1 min-w-[22rem] mx-10 my-6 text-[#00040f] dark:text-white">
          <h3 className="text-2xl mb-4 font-bold">Connect with me</h3>
          <p className="text-lg mb-2">
            <FaPhone className="inline size-6 pr-2" /> +91 80786-89615
          </p>
          <p className="text-lg  mb-2">
            <FaEnvelope className="inline size-6 pr-2" /> ravijat2026@gmail.com
          </p>
          <p className="text-lg  mb-2">
            <FaMapMarkedAlt className="inline size-6 pr-2" /> Kota, India-325003
          </p>
          <div className="text-[#00040f] dark:text-white text-2xl flex mt-4 space-x-4">
          <a
                href="https://github.com/ravijat2026"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-jat-420287245/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ravi_jaat_2050/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiInstagram />
              </a>
              <a
                href="https://x.com/ravi__jat_"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiTwitter />
              </a>
              <a
                href="mailto:ravijat2026@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
          </div>
        </div>
      </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2 mt-3 border-t-2 dark:border-sky-800 border-slate-300">
          made with ❤️ by Ravi Jat.All rights reserved.
        </p>
      </section>
    </>
  );
}




    


export default Footer;

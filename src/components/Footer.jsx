import React from 'react'
import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
import ravi from '../assets/icon.png'
const Footer = () => {
  return (
    <>
      <section
        className="dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className=" rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 flex-col-reverse  md:flex md:flex-row max-sm:p-2">
          <div className="p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Ravi Jat
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
            GSC’24 Regionalist | GSSoC'24 | Technical Team Lead - Paryavaran Shakti | Video Editing Lead - Neon
               | IIIT Kota'26
            </p>
            <div className="text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/DhairyaMajmudar"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dhairya-majmudar/"
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
                href="https://twitter.com/majmudar777"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiTwitter />
              </a>
              <a
                href="ravijat2026@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button className="w-fit px-6 py-3 my-2  bg-gradient-to-r from-cyan-500 to-blue-500 text-black dark:text-white outline-none mt-10 mr-3 rounded cursor-pointer ">
                <a href="">Resume</a>
              </button>
              <button className="w-fit px-6 py-3 my-2  bg-gradient-to-r from-cyan-500 to-blue-500 text-black dark:text-white outline-none mt-10 mr-3 rounded cursor-pointer">
                <a
                  href="https://github.com/DhairyaMajmudar/Personal-Portfolio"
                  className="flex gap-2 items-center justify-center"
                >
                  <SiGithub />
                  Github
                </a>
              </button>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={ravi}
              alt="Ravi jat"
              className="h-[200px] border-black dark:border-slate-500 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with ❤️ by Ravi Jat.All rights reserved.
        </p>
      </section>
    </>
  );
}

export default Footer
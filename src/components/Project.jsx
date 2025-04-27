import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Images
import p1 from "../assets/portfolio/p1.png"
import p2 from "../assets/portfolio/p2.png"
import p3 from "../assets/portfolio/p3.png"
import p4 from "../assets/portfolio/p4.png"
import p5 from "../assets/portfolio/p5.png"
import p6 from "../assets/portfolio/p6.png"

import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import tailwind from "../assets/tailwind.png"
import TypeScript from "../assets/TypeScript.jpg"
import PostgreSQL from "../assets/PostgreSQL.jpeg"
import node from "../assets/node.png"
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"



const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const project = [
    {
      imgUrl: p1,
      title: 'JobPrepper',
      description: "Career platform with Next.js, TypeScript, Prisma for resume building and AI interview prep.",
      githubLink: 'https://github.com/ravijat2026/JobPrepper',
      projectLink: 'https://job-prepper.vercel.app/',
      icons: [nextjs, TypeScript,react, tailwind, node, PostgreSQL],
    },
    {
      imgUrl: p2,
      title: 'QueryMaster',
      description: "AI content generator with Gemini API, built using Next.js, TypeScript, Tailwind, PostgreSQL.",
      githubLink: 'https://github.com/ravijat2026/Ai-Content-Generator',
      projectLink: 'https://querymaster.vercel.app/',
      icons: [nextjs,react, tailwind, TypeScript, node, PostgreSQL],
    },
    {
      imgUrl: p3,
      title: 'BlogAura',
      description: "Full-stack blogging platform with authentication (JWT+OTP), React, Node, Express, MongoDB.",
      githubLink: 'https://github.com/ravijat2026/BlogAura',
      projectLink: 'https://blog-aura.vercel.app/',
      icons: [react, tailwind, node, express, mongodb,javascript],
    },
    {
      imgUrl: p4,
      title: 'E-com',
      description: "Complete e-commerce app with admin dashboard using React, Node, Express, MongoDB.",
      githubLink: 'https://github.com/ravijat2026/E-com',
      projectLink: 'https://e-com-murex-two.vercel.app/',
      icons: [react, tailwind, node,javascript, express, mongodb],
    },
    {
      imgUrl: p5,
      title: 'Weather App',
      description: "Real-time weather updates with clean UI built using React and TailwindCSS.",
      githubLink: 'https://github.com/ravijat2026/weather-app',
      projectLink: 'https://password-generator-pearl-omega.vercel.app/',
      icons: [react, tailwind],
    },
    {
      imgUrl: p6,
      title: 'Password Generator',
      description: "This is a Password Generator web app built with React and Tailwind CSS.",
      githubLink: 'https://github.com/ravijat2026/password-generator',
      projectLink: 'https://hospital-website-lake.vercel.app/',
      icons: [react, tailwind],
    },
  ];

  const displayedProjects = isMobile ? (showAll ? project : project.slice(0, 3)) : project;
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div name="Projects" className="p-5 mx-20 mb-10 mt-10 min-h-screen max-sm:p-2 max-sm:mx-5">
      <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl my-5 max-sm:text-4xl">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-16 mt-10" data-aos="fade-right">
        {displayedProjects.map(({ imgUrl, title, description, githubLink, projectLink, icons }) => (
          <div key={title} className="relative w-[390px] lg:w-[480px] xl:w-[500px] rounded-2xl overflow-hidden shadow-2xl dark:bg-[#1c2837] text-[#00040f] dark:text-[#e1e1e1] hover:scale-105 transition-transform duration-300 ease-in-out p-5">
            <div className="relative flex flex-col gap-5 justify-between h-full">
              <div className="wrapper flex gap-4 sm:flex-row flex-col-reverse">
                <div className="flex flex-col sm:w-[40%]">
                  <h1 className="text-2xl font-bold mb-2">{title}</h1>
                  <p className="text-[13px] md:text-[14px]">{description}</p>
                </div>
                <div className="sm:w-[60%]">
                  <a href={projectLink} target="_blank" rel="noopener noreferrer">
                     <img className="rounded-xl cursor-pointer" src={imgUrl} alt={title} />
                   </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <div className="tech-stack flex flex-wrap gap-3 justify-center mt-3 sm:mt-0">
                  {icons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="tech" className="w-8 h-8 object-contain" />
                  ))}
                </div>
                <div className="flex gap-3 mt-4 sm:mt-0 items-center">
                  {isMobile ? (
                    <>
                      <Button variant="outlined" href={githubLink} target="_blank">Github</Button>
                      <Button variant="outlined" href={projectLink} target="_blank">Live</Button>
                    </>
                  ) : (
                    <>
                      <a title="Github" href={githubLink} target="_blank">
                        <FaGithub className="h-8 w-8" />
                      </a>
                      <a title="Live Link" href={projectLink} target="_blank">
                        <TbLogin2 className="h-8 w-8" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show button only on mobile devices */}
      {isMobile && project.length > 3 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <FiChevronUp className="inline" />
              </>
            ) : (
              <>
                See More
                <FiChevronDown className="inline" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default Project;

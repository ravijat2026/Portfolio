import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import github from "../assets/Github.png"
import tailwind from "../assets/tailwind.png"
import TypeScript from "../assets/TypeScript.jpg"
import PostgreSQL from "../assets/PostgreSQL.jpeg"
import node from "../assets/node.png"
import Git from "../assets/Git.png"
import CPP from "../assets/CPP.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);

    const techs = [
      {
        id: 1,
        src: nextjs,
        title: "Next JS",
        style: "shadow-white",
      },
      {
        id: 2,
        src: TypeScript,
        title: "TypeScript",
        style: "shadow-blue-600",
      },
      {
        id: 3,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 4,
        src: CPP,
        title: "CPP",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 6,
        src: node,
        title: "Node JS",
        style: "shadow-green-500",
      },
      {
        id: 7,
        src: Git,
        title: "Git",     
        style: "shadow-orange-500",
      },
      {
          id: 9,
          src: PostgreSQL,
          title: "PostgreSQL",
          style: "shadow-blue-500",
      },

        {
          id: 10,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
  return (
    <div
      name="Skills"
      className="w-full text-[#00040f] dark:text-[#e1e1e1]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Skills
        </h1>
          <p className="py-6 px-11 md:px-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8  px-12 sm:px-0" data-aos = "fade-right">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
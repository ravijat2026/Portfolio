import Lottie from "lottie-react";
import Vtex from "../assets/vtex.png";
import education from "../assets/lottie/Education.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="Experience" className="p-5 mx-20 mb-10 max-sm:p-2 max-sm:mx-5">
      <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
        Experience
      </h1>
      
      <div
        className="flex justify-between items-start max-sm:flex-col"
        data-aos="fade-right"
      >
        {/* Left side with image and title */}
        <div className="w-1/2 p-5 max-sm:w-full max-sm:p-3">
          <div className="flex gap-5">
            <img
              src={Vtex}
              alt="Vtex"
              className="w-[125px] h-[90px]"
            />
            <div className="mt-6">
              <h1 className="max-sm:text-[15px] text-slate-800 dark:text-slate-300 font-semibold text-2xl tracking-wider">
                Vtex.AI
              </h1>
            </div>
          </div>
          
          <div className="mt-7 flex flex-col gap-5 text-left pl-4">
            <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
              Full Stack Developer Intern
            </h3>
            <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
              March 2025 - May 2025
            </p>
          </div>
        </div>

        {/* Right side with description */}
        <div className="w-1/2 p-5 max-sm:w-full max-sm:p-3">
          <p className="text-[#00040f] dark:text-slate-300 text-[16px] mt-2 md:text-lg">
            During my internship at Vtex.AI, I developed and optimized responsive, high-performance user interfaces for their video subscription platform using Next.js, TypeScript, and Tailwind CSS, significantly improving user engagement and experience. I integrated WordPress Tutor LMS with the platform to dynamically fetch and display course content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
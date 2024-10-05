import Lottie from "lottie-react";
import IIIT_KOTA from "../assets/IIIT_Kota.png"
import education from "../assets/lottie/Education.json"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   
      <div className="p-5 mx-20 mb-10 min-h-screen max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-[520px] mt-6 p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={IIIT_KOTA}
                alt="IIIT KOTA"
                className="w-[90px] h-[90px]"
              />
              <h1 className=" max-sm:text-[15px] text-slate-800 dark:text-slate-300  font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
                Indian Institue Of Information Technology Kota
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                bachelor of technology
              </h3>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                November 2022 - may 2026
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                computer science engineering
              </p>
            </div>
          </div>
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px]"
          />
        </div>
      </div>
  
  );
};
export default Education;

import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen text-[#00040f] dark:text-[#e1e1e1]"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Contact
        </h1>
         
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/azyljlkb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-500 dark:border-gray-100 rounded-md text-[#00040f] dark:text-[#e1e1e1] focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gray-500 dark:border-gray-100 rounded-md text-[#00040f] dark:text-[#e1e1e1] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-gray-500 dark:border-gray-100 rounded-md text-[#00040f] dark:text-[#e1e1e1] focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

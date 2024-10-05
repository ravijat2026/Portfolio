import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import Lottie from 'lottie-react'
import about from '../assets/lottie/About.json'


const Home = () => {

    const [text] = useTypewriter({
        words: ["Ravi Jat", "Web Developer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
      });

  return (
    <div name = "Home" className='h-screen w-full text-[#00040f] dark:text-[#e1e1e1]'>
        <div className='w-full mt- mx-auto flex flex-col items-center justify-center h-full  md:flex-row md:gap-24 px-4 ml-4 md:ml-8'>
            <div className='flex flex-col mt-32 md:mt-4 justify-center'>
                <h2 className='text-4xl md:text-6xl font-bold py-4'>
                Hi, there! <br/>
                   I'm 
                    <br /> <span>{text}</span> 
                    <span style={{ color: "gray" }}>
                        <Cursor cursorStyle="|" />
                    </span>
              
                </h2>
             

                <div className='mt-4 flex w-[300px] md:w-[500px] gap-4'>
                    <a href = 'https://drive.google.com/file/d/12ng2pFGMAIPDgc24Mp74fXTf6nZU3PsQ/view'> <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Resume
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                    </button></a>
                   

                    
                </div>
            </div>
                
            <div className=''>
            <Lottie 
            animationData={about}
            loop = {true}
            className='max-w-[500px] mr-10 md:mr-0'
        />
            </div>
        </div>
    </div>
  )
}

export default Home
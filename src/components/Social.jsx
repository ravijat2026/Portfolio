import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Social = () => {

    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://linkedin.com",
          style: "rounded-tr-md bg-blue-500",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          style: "bg-black",
          href: "https://github.com/theyashpatel",
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          style: " bg-red-500",
          href: "mailto:foo@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          style: "rounded-br-md bg-gray-500",
          href: "/resume.pdf",
          download: true,
        },
      ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-10'>
        <ul>

            {links.map((link)=>(

                <li key={link.id} className={
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                    " " +
                    link.style
                  }>
                <a href=''
                className='flex justify-between items-center w-full text-w text-white'
                download={link.download}
                target="_blank"
                rel="noreferrer"
                >
                    {link.child}
                </a>
            </li>

            ))}

            
        </ul>
    </div>
  )
}

export default Social
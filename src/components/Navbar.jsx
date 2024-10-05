import React, { useEffect , useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiSun , HiMoon } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const [theme, setTheme] = useState("light");
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    }, [theme]);
  
    const handleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  
    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "About",
        },
        {
          id: 3,
          link: "Skills",
        },
        {
          id: 4,
          link: "Projects",
        },
        {
          id: 5,
          link: "Contact",
        },
        {
          id:6,
          link: (
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          ),
        },
      ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-[#00040f] dark:text-[#e1e1e1] z-10 fixed 
      bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]
    '>
        <div>
        <h1 className='text-5xl font-signature ml-2'>Ravi</h1>
        </div>

        <ul className="hidden w-[45%] gap-3 text-1.5xl md:flex">
        {links.map(({ id, link }) => (
            <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
            >
              <Link to = {link} smooth duration={200}>{link}</Link>
            </li>
        ))}
        
      </ul>
      

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size = {30} />}
      </div>

        {nav && (
            <ul className='flex cursor-pointer flex-col justify-center items-center absolute top-0 right-0 w-3/5 h-screen bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] text-[#00040f] dark:text-[#e1e1e1]'>

            {links.map(({ id, link }) => (
                  <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
                      <Link to = {link} smooth duration={200}>{link}</Link>
                  </li>
              ))}
      
              </ul>
        )}

    
    </div>
  )
}

export default Navbar
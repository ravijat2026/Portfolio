import React from 'react'
import {FaArrowUp} from 'react-icons/fa'

const ScrollToTop = () => {
      window.scrollTo(0, 0);
    }
const Top = () => {
  return (
    <div className='fixed bottom-0 right-0'>
        <button onClick={ScrollToTop} className='z-10 m-4 text-[#00040f] dark:text-[#e1e1e1] bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] p-3 rounded-full'>
            <FaArrowUp size={20} />
        </button>
    </div>
  )
}

export default Top
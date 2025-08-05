import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (

    <nav className='flex flex-row justify-between items-center bg-white rounded-full p-4 w-full px-10 max-w-[1200px] mx-auto'>
        <Link to="/" >
            <p className='text-2xl font-bold text-gradient'>
                resumemind
            </p>
        </Link>
        <Link to="upload" className="primary-button w-fit">     
            Upload Resume    
       </Link>

    </nav>
  )
}

export default Navbar
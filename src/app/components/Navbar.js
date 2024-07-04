'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";

import { IoClose } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
 const [menu, setMenu] = useState(true)
  return (
    <div>
    <div className={`flex items-center justify-between sm:px-44 px-6 h-24 `}>
        <div className='w-[25%] sm:block hidden'>
            <ul className='flex gap-8 font-semibold'>
                <li><Link href='/' className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'>Home</Link></li>
                <li><Link href='/about' className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'>About</Link></li>
                <li><Link href='/portfolio' className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'>Portfolio</Link></li>
                <li><Link href='/contact' className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'>Contact</Link></li>
                
            </ul>
            
        </div>
        <div >
            <Link href='/'><div className='flex bg-gray-900 rounded text-white text-xs font-bold px-6 py-2 sm:mr-28'>Kajol<div className='bg-white text-black rounded px-2 ml-3'>Kibria</div></div></Link>
        </div>
        <div className='hidden sm:block'>
        <div className='flex gap-10 text-2xl w-[25%] '>
            <a href='https://github.com/Kajol-Kibria' className='hover:py-20 hover:-translate-y-2 transition-all duration-200'><FaGithub/></a>
            <a href='https://www.instagram.com/kajolkibria07/' className='hover:py-20 hover:-translate-y-2 transition-all duration-200'><FaSquareInstagram/></a>
            <a href='https://www.facebook.com/kajol.kibria.77' className='hover:py-20 hover:-translate-y-2 transition-all duration-200'><FaFacebook/></a>
            <a href='https://www.linkedin.com/in/kajol-kibria-8b2004252/' className='hover:py-20 hover:-translate-y-2 transition-all duration-200'><FaLinkedin /></a>
        </div>
        
    </div>
    <div className={`block sm:hidden text-2xl`} onClick={()=>setMenu(!menu)}>
        {menu? <LuMenu/> : <IoClose/>}
    </div>
    
    </div>
    <div className='w-75% '> 
    <ul className={`z-50 flex fixed bg-rose-50 right-6 left-6 rounded px-20 py-10 flex-col gap-10 items-center justify-center font-semibold sm:hidden ${menu?"hidden":"block"}`}>
                <li onClick={()=>setMenu(!menu)} className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'><Link href='/'>Home</Link></li>
                <li onClick={()=>setMenu(!menu)} className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'><Link href='/about'>About</Link></li>
                <li onClick={()=>setMenu(!menu)} className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'><Link href='/portfolio'>Portfolio</Link></li>
                <li onClick={()=>setMenu(!menu)} className='hover:text-white hover:bg-gray-900 transition-colors duration-300 px-3 py-1 rounded'><Link href='/contact'>Contact</Link></li>
                
            </ul>
    </div>
  </div>)
}

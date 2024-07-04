import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className=' sm:flex items-center w-[80%] mx-auto h-[calc(100vh-6rem)]'>
      <div className='sm:w-[50%]'>
        <Image className='hidden sm:block rounded-xl bg-rose-50 pt-4 mt-20 mb-5' src='/images/avatar.png' width={300} height={300}/>
        <h1 className='text-3xl font-bold py-4'>BIOGRAPHY</h1>
        <p className='text-xl text-gray-800 sm:w-[70%]'>I want to dive deep into the sea of web development.<br/>Learnig new technologys and build some real world and usefull web applications.</p>
        <Link href='/contact'><button className='hidden sm:block my-5 w-44 h-16 border border-gray-800 rounded-xl bg-gray-800 text-white hover:bg-rose-50 hover:text-gray-800 transition-all duration-300'>Contact Me</button> </Link>
      </div>
      <div className='sm:w-[40%] py-4'>
        <p className='font-bold sm:text-3xl text-center text-xl '>Skills</p>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>HTML</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[95%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>CSS</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[80%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>JavaScript</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[75%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>Tailwind</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[75%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>React</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[80%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>Next.js</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[70%]'></div>
        </div>
        <div className='sm:mx-5 mx-1 my-1 sm:my-3 text-purple-950 font-bold text-md  sm:text-xl'>Git & Github</div>
        <div className='bg-purple-800/20 rounded-full h-2  sm:h-5'>
          <div className='bg-purple-800 sm:h-5 h-2 rounded-full w-[77%]'></div>
        </div>
        
      </div>
      
     
    </div>
  )
}

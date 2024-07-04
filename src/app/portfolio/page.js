import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-[80%] mx-auto h-[calc(100vh-6rem)]'>
      <h1 className='sm:py-20 pb-4 text-3xl font-bold text-center'>Projects</h1>
      <div className='sm:flex  items-center justify-between'>
        <div className=' sm:w-[50%] flex flex-col items-center '>
      <Image src='/images/Screenshot_1.png' width={600} height={400} className=' rounded-xlsm:mb-10 mb-4 scale-100 hover:scale-110 hover:translate-x-4 hover:skew-y-1 transition-all duration-300'/>
        <a href='https://burger-app-ecru.vercel.app' className='bg-rose-500 text-white mb-3 sm:py-5 sm:px-8 px-4 py-3 rounded-xl'>Check out</a>
      </div>
      <div className=' sm:w-[50%] flex flex-col items-center'>
      <Image src='/images/Screenshot_2.png' width={600} height={400} className='rounded-xl sm:mb-10 mb-4 scale-100 hover:scale-110 hover:translate-x-4 hover:skew-y-1 transition-all duration-300'/>
        <a href='https://kibsa.netlify.app' className='bg-rose-500 text-white sm:py-5 sm:px-8 px-4 py-3 rounded-xl'>Check out</a>
      </div>
      </div>
      <Link href='/contact'><div className='hidden sm:block text-center py-4 sm:px-24 px-10 bg-gray-800 text-white text-xl rounded-xl  sm:w-[25%] mx-auto sm:my-14 my-4 hover:text-gray-800 hover:bg-rose-50 border transition-all hover:scale-105 cursor-pointer duration-300  border-gray-800' >Contact Me</div></Link>
      
      
      
    </div>
  )
}

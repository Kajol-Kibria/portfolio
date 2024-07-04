import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  
  return (
    <div className='h-[calc(100vh-6rem)] flex justify-center items-center p-10 sm:p-0'>
       <div>
        <Image className='sm:block hidden' src="/images/hero.webp" alt='hero-image' width={688} height={300} quality={100}></Image>
       </div>
       <div>
        <h1 className='text-2xl'><span className='text-6xl font-bold py-10'>Hello there, I am <span className='text-rose-600'>Kibria</span></span></h1>
        <p className='w-[70%] py-10 text-xl'>a self taught frontend web developer.Make websites using latest technologys.</p> 
        <Link href='/portfolio'><button className='w-28 h-10 bg-gray-900 text-white rounded-xl mr-5'>Projects</button></Link>
        <Link href='/contact'><button className='w-28 h-10 border border-gray-800 rounded-xl'>Contact Me</button></Link>
        
       </div>
    </div>
  )
}

'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function Contactpage() {
  const form = useRef();
  const [success,setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ango3ty', 'template_5izp1ko', form.current, {
        publicKey: 'ujii2DgAeyiLzWqKn',
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset()
        },
        (error) => {
          
        },
      );
  };
  return (
    <div className='w-[80%] mx-auto h-[calc(100vh-6rem)]'>
      <div className='flex flex-col items-center justify-center'>

      <h1 className='text-3xl font-bold sm:pt-20 pb-6'>Contact Me</h1>
      <p className='tetx-xl font-bold pb-4'>Any question or remarks? Just write me a message!</p>
      <form ref={form} onSubmit={sendEmail} className='space-y-3 sm:pt-10 pt-5 sm:pb-16 pb-12 sm:px-12 px-6 rounded-xl sm:my-10 bg-white'>
      <label className='text-xl'>Name</label><br/>
      <input type="text" name="to_name" className='sm:w-[500px] pl-3 py-3 rounded-xl bg-rose-50'/><br/>
      <label className='text-xl'>Email</label><br/>
      <input type="email" name="user_email" className='sm:w-[500px] pl-3 py-3 rounded-xl bg-rose-50'/>
      <br/>
      <label className='text-xl'>Message</label><br/>
      <textarea name="user_message" className='sm:w-[500px] w-[230px] pl-3 py:3 sm:py-6 rounded-xl bg-rose-50'/><br/>
      <input type="submit" value="Send" className='px-6 py-3 bg-rose-500 text-white rounded-xl w-full cursor-pointer'/><br/>
      {success && <span className='text-green-500 absolute'>Sent successfully</span>}
      
    </form>
    <div className='flex items-center justify-center gap-3 mt-2'>
      <h1 className='sm:text-4xl text-xl text-green-600'><FaPhoneSquareAlt/></h1>
      <p className='sm:text-4xl text-xl text-rose-600 font-bold '>01402874542</p>
    </div>
      </div>
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import WriteForm from './form';
import { useRouter } from 'next/navigation';

const WriteContent = () => {
    const router = useRouter()

    return (
        <div className='w-full h-dvh bg-zinc-800 relative overflow-clip transition-all'>
            <div className={`w-full h-full flex items-center justify-center fade-in-animation-2`}>
                <div className='w-full h-full'>

                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip">
                        <img alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20 pointer-events-none" />
                        <img alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" />
                        <img alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />
                        <img alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />
                    </div>

                    <div className="relative w-full h-dvh flex flex-col items-center justify-center p-2 md:p-0">
                        <div className="w-full flex flex-col items-center justify-center z-10 text-shadow-lg/100 opacity-65 text-shadow-zinc-800 text-white">
                            <h1>Kira Will Deliver</h1>
                            <h3 className='mt-5'>Have you been wronged? Have you witnessed an</h3>
                            <h3>unforgivable crime? Has the ‘justice system’ failed</h3>
                            <h3>to bring the vermin of this world to justice?</h3>
                            <h3 className='mt-5'>Do you want justice?</h3>
                        </div>

                        <div className='relative z-30 cursor-pointer'>
                            <h2 className='mt-5 text-red-500 text-shadow-lg text-shadow-red-700 text-center text-4xl relative z-50 animate-pulse cursor-pointer hover:text-shadow-red-900 hover:text-red-600 transition-all active:scale-[0.9]'>All Kira needs is a name</h2>
                        </div>
                        <WriteForm />
                        <h4 className='text-white relative z-50'>Join to <a href="https://t.me/kira_messages" target='_blank' rel='noopener noreferrer'><span className='text-blue-500 cursor-pointer hover:opacity-80 active:scale-[0.9] transition-all'>TELEGRAM</span></a> to see Writen Names</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteContent

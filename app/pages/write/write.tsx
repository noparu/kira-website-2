'use client'
import React, { useState } from 'react'
import WriteForm from './form';
import Image from 'next/image';

const Write = () => {
    const [write, setWrite] = useState(false);

    const handleToggleForm = () => {
        
        const timer = setTimeout(() => {
            setWrite(!write);
            // setCanClick(true);
        }, 2_000);

        return () => {
            clearTimeout(timer)
        }
    }

    return (
        <div className='w-full h-dvh bg-zinc-800 relative overflow-clip'>
            {/* === SUB CONTAINER === */}
            <div className={`w-full h-full flex items-center justify-center fade-in-animation-2`}>
                {/* === INNER CONTENT === */}
                <div className='w-full h-full'>

                    {/* === BACKGROUND LAYERS === */}
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip">
                        {/* Mist layers */}
                        <Image alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20 pointer-events-none" layout="fill"
                            objectFit="cover" />
                        <Image alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" layout="fill"
                            objectFit="cover" />
                        <Image alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" layout="fill"
                            objectFit="cover" />
                        <Image alt="mist-kira" id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" layout="fill"
                            objectFit="cover" />

                        {/* Center heart image */}
                        {/* <img src='/kira-heart.png' className='w-[800px] zoom-in-animation' /> */}
                    </div>

                    {!write ? 
                    // === TEXT OVERLAY ===
                    <div className="relative w-full h-dvh flex flex-col items-center justify-center p-2 md:p-0">
                        <div className="w-full flex flex-col items-center justify-center z-10 text-shadow-lg/100 opacity-65 text-shadow-zinc-800 text-white">
                            <h1>Kira Will Deliver</h1>
                            <h3 className='mt-5'>Have you been wronged? Have you witnessed an</h3>
                            <h3>unforgivable crime? Has the ‘justice system’ failed</h3>
                            <h3>to bring the vermin of this world to justice?</h3>
                            <h3 className='mt-5'>Do you want justice?</h3>
                        </div>

                        {/* === ENTER BUTTON === */}
                        <div onClick={handleToggleForm} className='relative z-30 cursor-pointer'>
                            <h2 className='mt-5 text-red-500 text-shadow-lg text-shadow-red-700 text-center text-4xl relative z-50 cursor-pointer hover:text-shadow-red-900 hover:text-red-600 transition-all'>All Kira needs is a name</h2>
                        </div>
                    </div>
                    : <WriteForm handleToggleForm={handleToggleForm} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Write

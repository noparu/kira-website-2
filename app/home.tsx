'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Home = () => {
    const router = useRouter()
    const [canClick, setCanClick] = useState(false);
    const [fadeOutAnimation, setFadeOutAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCanClick(true);
        }, 8_000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    const handleAddClass = () => {
        if (!canClick) return;
        if (!fadeOutAnimation) {
            setFadeOutAnimation(true);
            setTimeout(() => {
                router.push('/pages/write')
            }, 5_500);
        } else {
            return;
        }
    }

    return (
        <div className='w-full h-dvh bg-zinc-800 relative overflow-clip'>
            {/* === SUB CONTAINER === */}
            <div className={`w-full h-full flex items-center justify-center fade-in-animation 
                ${fadeOutAnimation ? "fade-out-animation" : ""}
                `}>
                {/* === INNER CONTENT === */}
                <div className='w-full h-full'>

                    {/* === BACKGROUND LAYERS === */}
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip">
                        {/* Mist layers */}
                        <Image alt='kira' id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" layout="fill"
                            objectFit="cover" />
                        <Image alt='kira' id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" layout="fill"
                            objectFit="cover" />
                        <Image alt='kira' id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" layout="fill"
                            objectFit="cover" />
                        <Image alt='kira' id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" layout="fill"
                            objectFit="cover" />

                        {/* Center heart image */}
                        <img alt='kira' src='/kira-heart.png' className='w-[800px] zoom-in-animation' />
                    </div>

                    {/* === TEXT OVERLAY === */}
                    <div className="relative w-full h-dvh flex flex-col items-center justify-center p-2 md:p-0">
                        <div className="w-full flex flex-col items-center justify-center z-10 text-shadow-lg/100 opacity-65 text-shadow-zinc-800 zoom-in-animation text-white">
                            <h1 className='mt-14'>The Legend of Kira</h1>
                            <h1>The Saviour</h1>
                            <h3 className='mt-5'>Criminals worldwide</h3>
                            <h3>Because Kira is among us again</h3>
                            <h3>They are the one who will tolerate no wickedness</h3>
                            <h3>Our messenger from hell</h3>
                            <h3>Only those who believe in his existence and return</h3>
                            <h3 className='mt-5'>MAY ENTER</h3>
                            <h3>THIS SITE</h3>
                        </div>

                        {/* === ENTER BUTTON === */}
                        <div className="z-30 mt-10 zoom-in-animation">
                            {canClick ?
                                <button onClick={handleAddClass} className="text-3xl text-zinc-900 font-black select-none bg-white px-10 shadow-lg/100 shadow-white opacity-70 transition-all ease-in-out hover:shadow-red-600 hover:bg-red-600 hover:text-red-200 cursor-pointer active:bg-red-800 active:shadow-red-800 active:text-red-300 outline-0 active:scale-[0.9]">ENTER</button>
                                :
                                <button className="cursor-not-allowed text-3xl text-zinc-900 font-black select-none bg-white px-10 shadow-lg/100 shadow-white opacity-70 outline-0" >LOADING...</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
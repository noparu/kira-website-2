'use client'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [canClick, setCanClick] = useState(false);
    const [fadeOutAnimation, setFadeOutAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCanClick(true);
        }, 8_000);

        return () => clearTimeout(timer);
    }, []);

    const handleAddClass = () => {
        if (!canClick) return;
        if (!fadeOutAnimation) {
            setFadeOutAnimation(true);
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
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />

                        {/* Center heart image */}
                        <img src='/kira-heart.png' className='w-[800px] zoom-in-animation' />
                    </div>

                    {/* === TEXT OVERLAY === */}
                    <div className="relative w-full h-dvh flex flex-col items-center justify-center p-2 md:p-0">
                        <div className="w-full flex flex-col items-center justify-center z-10 text-shadow-lg/100 opacity-65 text-shadow-zinc-800 zoom-in-animation">
                            <h1>The Legend of Kira</h1>
                            <h1>The Saviour</h1>
                            <h3 className='mt-5'>Criminals worldwide</h3>
                            <h3>Because Kira is among us again</h3>
                            <h3>They are the one who will tolerate no wickedness</h3>
                            <h3>Our messenger from hell</h3>
                            <h3>Only those who believe in his existence and return</h3>
                            <h3>MAY ENTER</h3>
                            <h3>THIS SITE</h3>
                        </div>

                        {/* === ENTER BUTTON === */}
                        <div className="z-30 mt-10 zoom-in-animation">
                            {canClick ? 
                            <button onClick={handleAddClass} className="">ENTER</button>
                            :
                            <button className={`cursor-not-allowed`} >LOADING...</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
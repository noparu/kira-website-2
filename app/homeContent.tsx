'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const HomeContent = () => {
    const router = useRouter()
    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleClickButton = () => {
        if (!isButtonClickable) return;
        if (!isFadingOut) {
            setIsFadingOut(true);
            setTimeout(() => {
                router.push('/pages/write')
            }, 5_500);
        } else {
            return;
        }
    }

    useEffect(() => {
        // Button dapat di klik jika 8 detik pertama telah berlalu
        const timer = setTimeout(() => {
            setIsButtonClickable(true);
        }, 8_000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return (
        <div className={`w-full h-full flex items-center justify-center fade-in-animation ${isFadingOut ? "fade-out-animation" : ""}`}>

            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip" >
                <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation z-20" />
                <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation z-20" />
                <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation-2 z-20" />
                <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation-2 z-20" />
                <img src='/kira-heart.png' alt='kira-heart' className='w-[800px] zoom-in-animation' />
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center p-2 md:p-0" >
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

                <div className="z-30 mt-10 zoom-in-animation">
                    <button onClick={isButtonClickable ? handleClickButton : () => {}} className={`text-3xl text-zinc-900 font-black select-none bg-white px-10 shadow-lg/100 shadow-white opacity-70 transition-all ease-in-out outline-0 ${isButtonClickable ? "hover:shadow-red-600 hover:bg-red-600 hover:text-red-200 cursor-pointer active:bg-red-800 active:shadow-red-800 active:text-red-300 active:scale-[0.9]" : "cursor-not-allowed"}`}>{isButtonClickable ? "ENTER" : "LOADING..."}</button>
                </div>
            </div >
        </div >
    )
}

export default HomeContent
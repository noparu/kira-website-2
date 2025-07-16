'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const HomeContent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter()
    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isVideoHidden, setIsVideoHidden] = useState(false);
    const [isContentHidden, setIsContentHidden] = useState(false);

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

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleToggleVideoVisibility = () => {
        setIsVideoHidden((prev) => {
            const newHidden = !prev;
            if (videoRef.current) {
                videoRef.current.muted = newHidden; // muted kalau disembunyikan
                setIsMuted(videoRef.current.muted);
            }
            return newHidden;
        });
    };

    const handleToggleContentVisibility = () => {
        setIsContentHidden(!isContentHidden)
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
            <video ref={videoRef} className={`w-full h-dvh object-cover absolute left-0 top-0 ${isVideoHidden ? "opacity-0" : ""}`} src="https://raw.githubusercontent.com/noparu/kira-website-2/dev/public/death-note-amv.mp4" autoPlay muted loop></video>
                <div className={`absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip ${isContentHidden ? 'opacity-0' : ''}`}>
                    <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation z-20" />
                    <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation z-20" />
                    <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation-2 z-20" />
                    <img src="/mist-1.jpg" alt='mist' className="absolute mix-blend-plus-lighter w-full h-full object-cover fade-pulse-animation-2 z-20" />
                    <img src='/kira-heart.png' alt='kira-heart' className='w-[800px] zoom-in-animation mix-blend-plus-darker' />
                </div>

                <div className={`relative w-full h-full flex flex-col items-center justify-center p-2 md:p-0 ${isContentHidden ? 'opacity-0' : ''}`}>
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
                        <button onClick={isButtonClickable ? handleClickButton : () => { }} className={`text-3xl text-zinc-900 font-black select-none bg-white px-10 shadow-lg/100 shadow-white opacity-70 transition-all ease-in-out outline-0 ${isButtonClickable ? "hover:shadow-red-600 hover:bg-red-600 hover:text-red-200 cursor-pointer active:bg-red-800 active:shadow-red-800 active:text-red-300 active:scale-[0.9]" : "cursor-not-allowed"}`}>{isButtonClickable ? "ENTER" : "LOADING..."}</button>
                    </div>
                </div >

            <div className="absolute bottom-0 right-0 text-white flex gap-x-3 px-5 py-2 z-50">
                <button onClick={handleToggleContentVisibility} className='underline cursor-pointer hover:opacity-50 transition-all'>{isContentHidden ? "View Content" : "Hide Content"}</button>
                <button onClick={handleToggleVideoVisibility} className='underline cursor-pointer hover:opacity-50 transition-all'>{isVideoHidden ? "View Video" : "Hide Video"}</button>
                <button onClick={handleToggleMute} className='underline cursor-pointer hover:opacity-50 transition-all'>
                    {isMuted ? "Unmute" : "Mute"}
                </button>
            </div>
        </div >
    )
}

export default HomeContent
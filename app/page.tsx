'use client'
import React from 'react'

const HomePage = () => {
    return (
        <div id='container' className='w-full h-dvh bg-zinc-800 relative overflow-clip'>
            <div id='sub-container' className='w-full h-full flex items-center justify-center fade-in'>
                <div className='w-full h-full'>
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip">
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover animate-mist z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover animate-mist z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover animate-mist-2 z-20" />
                        <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover animate-mist-2 z-20" />
                        <img src='/kira-heart.png' className='w-[800px] zoom-in' />
                    </div>
                    <div className="relative w-full h-dvh flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col items-center justify-center z-10 text-shadow-lg/100 opacity-65 text-shadow-zinc-500 zoom-in">
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
                        <div className="z-30 mt-10 zoom-in">
                            <button onClick={() => alert('NIGGA')}>ENTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

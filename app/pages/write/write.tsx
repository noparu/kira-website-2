import React from 'react'

const Write = () => {
    return (
        <div className='w-full h-dvh bg-zinc-800 relative overflow-clip'>
            <div className="w-full h-full flex items-center justify-center fade-in-animation">
                <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center overflow-clip">
                    {/* Mist layers */}
                    <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" />
                    <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation z-20" />
                    <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />
                    <img id="mis-1" src="/mist-1.jpg" className="absolute mix-blend-plus-lighter w-full h-dvh object-cover fade-pulse-animation-2 z-20" />
                </div>
                <div className="text-shadow-lg/100 opacity-65 text-shadow-zinc-800 text-white">
                    <h1>Kira Will Deliver</h1>
                    <h3 className='mt-5'>Have you been wronged? Have you witnessed an</h3>
                    <h3>unforgivable crime? Has the ‘justice system’ failed</h3>
                    <h3>to bring the vermin of this world to justice?</h3>
                    <h3 className='mt-5'>Do you want justice?</h3>
                    <h2 className='mt-5 text-red-500 text-shadow-lg text-shadow-red-400 text-center text-4xl animate-pulse z-50'>All Kira needs is a name</h2>
                </div>
            </div>
        </div>
    )
}

export default Write

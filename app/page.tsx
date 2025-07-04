"use client"
import { useState } from 'react'
import HomePage from './home'

const MainHomePage = () => {
    const [agree, setAgree] = useState(false)
    return (
        <div>
            {!agree ?
                <div className='bg-zinc-800 w-full h-dvh flex items-center justify-center text-center p-2 md:p-0'>
                    <p className='w-[700px] text-white text-xl fade-in-animation-2'>This website was created out of my deep admiration for Death Note. I sincerely apologize if any aspects appear excessive. <span className='cursor-pointer text-red-500' onClick={() => setAgree(true)}>Would you like to proceed?</span></p>
                </div>
                :
                <HomePage />
            }
        </div>
    )
}

export default MainHomePage
import React from 'react'

const WriteForm = ({handleToggleForm}: any) => {
    return (
        <div className='w-fit h-full flex items-center justify-center relative mx-auto'>
            <div className="text-white flex flex-col sm:w-[500px] md:w-[700px] px-2">
                <label htmlFor="write" className='cursor-pointer'><h4 className='text-2xl'>Write all you needs  </h4></label>
                <div className='relative'>
                <textarea name="write" id="write" className='bg-white w-full h-[300px] cursor-not-allowed text-3xl text-zinc-900 font-black px-2 shadow-lg/100 shadow-white opacity-70 outline-0'></textarea>
                <button className="text-3xl text-zinc-900 font-black select-none px-6 py-2 opacity-70 transition-all ease-in-out hover:text-red-600 cursor-pointer active:text-red-800 outline-0 active:scale-[0.9] z-50 absolute bottom-0 left-0" onClick={handleToggleForm}>SEND MESSAGE</button>
                </div>
                <label htmlFor="write">
                    <img src="/light.png" alt="light-yagami" className='invisible md:visible w-[500px] absolute right-0 top-0 bottom-0 my-auto -mr-[100px]' />
                    <span className=' w-full h-[300px] text-3xl text-zinc-900 font-black px-2 shadow-lg/100 shadow-white outline-0 absolute top-0 bottom-0 my-auto z-40 opacity-0'></span>
                </label>
            </div>
        </div>
    )
}

export default WriteForm

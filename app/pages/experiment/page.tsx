import React from 'react'

const Experiment = () => {
    return (
        <div>
            {/* <video className='w-full h-dvh object-cover absolute left-0 top-0' src="https://raw.githubusercontent.com/noparu/kira-website-2/dev/public/death-note-amv.mp4" loop controls></video> */}
            <div className="absolute bottom-0 right-0 text-white flex gap-x-3 px-5 py-2">
                <button className='underline cursor-pointer hover:opacity-50 transition-all'>hide video</button>
                <button className='underline cursor-pointer hover:opacity-50 transition-all'>unmute</button>
            </div>
        </div>
    )
}

export default Experiment

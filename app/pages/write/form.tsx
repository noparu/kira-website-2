'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WriteForm = ({ handleToggleForm }: any) => {
    const [message, setMessage] = useState<string>("")
    const [countdown, setCountdown] = useState(15);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [buttonText, setButtonText] = useState<any>("SEND")
    const [messageStatus, setMessageStatus] = useState<string>('')

    const handleChangeMessage = (e: any) => {
        const value = e.target.value
        if (value.length <= 50) {
            setMessage(value);
        } else {
            setMessage(message.slice(0, 50))
            setMessageStatus('Text must be no longer than 50 characters')
        }
    }

    const handleSubmitForm = async (e: any) => {
        e.preventDefault()
        const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const chatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        try {
            setIsLoading(true)
            if (countdown > 0) {
                setMessageStatus(`To avoid spam please wait`)
                setIsLoading(false)
            }
            else if (message !== '') {
                await axios.post(url, {
                    chat_id: chatID,
                    text: message
                })
                setMessageStatus('Successfully written!')
                setMessage('')
                setCountdown(30)
                setIsLoading(false)
            } else {
                setMessageStatus(`Text must not be empty!`)
                setIsLoading(false)
            }
        } catch (error) {
            setMessageStatus('Unsuccessfully written!')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdown]);

    useEffect(() => {
        if (countdown >= 1) {
            countdown && countdown < 1 ? setButtonText("SEND") : setButtonText('WAIT ' + countdown + "s")
        } else {
            setButtonText("SEND")
        }
    }, [countdown])

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessageStatus('')
        }, 3_000);

        return () => {
            clearTimeout(timer)
        }
    }, [messageStatus]);

    return (
        <>
            <form onSubmit={handleSubmitForm} className="mt-12 relative z-50">
                <input
                    className="w-full sm:max-w-[400px] outline-none border-b-2 border-red-500 pr-12 text-xl text-white"
                    name="message"
                    value={message}
                    onChange={handleChangeMessage}
                />
                <button type={isLoading ? 'button' : 'submit'} className='absolute right-0 top-0 bottom-0 text-xl -mt-1 outline-none text-white font-bold hover:opacity-80 cursor-pointer active:scale-[0.9] transition-all'>{isLoading ? 'SENDING' : buttonText}</button>
            </form>
            <div className={`mt-2 transition-all text-center text-red-500 text-lg font-bold px-2 flex items-center justify-center ${messageStatus == '' ? 'h-0' : 'border border-red-500 h-10'}`}>{messageStatus}</div>
        </>
    )
}

export default WriteForm

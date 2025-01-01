import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si"
const Footer = () => {
    const today = new Date();

    return (
        <div className=' bg-gray-900 flex justify-around items-center py-4'>
            <p className='text-white'><span className='font-medium '>Copyright</span> &copy; {today.getFullYear()}</p>
            <div className='flex text-white justify-center items-center gap-10'>
                <a className='bg-gray-800 p-4 rounded-full animate-pulse' href="https://www.github.com/gitKarasune" target='_blank'>
                    <SiGithub />
                </a>
                <a className='bg-gray-800 p-4 rounded-full animate-pulse' href="https://www.linkedin.com/in/sune-kara" target='_blank'>
                    <SiLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
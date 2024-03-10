import React from 'react'
import Button from '../components/Button'


function pageNotFound() {
    return (
        <div className='h-screen flex justify-center items-center opacity-80 bg-black' >
            <div className='flex flex-col'>
                <h1 className=" text-9xl  font-extrabold text-center bg-clip-text   text-transparent bg-gradient-to-r from-red-400 to-red-700 " >404</h1>
                <div className='flex items-center justify-center gap-9'>
                    <p className='text-white italic text-xl'>E</p>
                    <p className='text-white italic text-xl  '>R</p>
                    <p className='text-white italic text-xl  '>R</p>
                    <p className='text-white italic text-xl  '>0</p>
                    <p className='text-white italic text-xl  '>R</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-slate-400 font-semibold text-4xl flex justify-center m-12'>Page Not Found</h1>
                    <Button BG_COLOR="bg-red-700 text-xl font-semibold w-56  " to="/" text="Go Back To Home Page" />
                </div>
            </div>
        </div>

    )

}
export default pageNotFound
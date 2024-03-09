import React from 'react'
import Button from '../components/Button'


function pageNotFound() {
    return (
        <div className='h-screen flex justify-center items-center bg-black' >
            <div className='flex flex-col'>
                <h1 className="text-yellow-600 text-8xl font-extrabold text-center bg-clip-text  text-transparent bg-gradient-to-r from-red-400 to-red-700 " >404</h1>
                <div className='flex items-center justify-center gap-9'>
                    <p className='text-white font-bold '>E</p>
                    <p className='text-white font-bold  '>R</p>
                    <p className='text-white font-bold  '>R</p>
                    <p className='text-white font-bold  '>0</p>
                    <p className='text-white font-bold  '>R</p>
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
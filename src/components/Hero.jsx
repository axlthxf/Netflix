import Button from "./Button"
import { useState } from 'react'

function Hero() {
    const [color, setcolor] = useState(false);
    const [count, setcount] = useState(0);
    return (
        <div className="text-center h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-white font-bold text-6xl">Welcome to <span onClick={() => {setcolor(!color); setcount(count+1)}} className={`text-${ color ? 'red-600' : 'white' } font-extrabold l`}>Netflix {count}</span></h1>
            <p className="text-white font-semibold text-xl">Enjoy your shows without any limit</p>

            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                    <video
                        autoPlay
                        loop
                        muted
                        className=" h-[140px] md:h-[300px] w-full rounded-xl"
                    >
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                </div>
            </div>
            {/* <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
            <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div> */}
            <Button BG_COLOR="bg-red-500 w-40" to="signup" text="Get Started   >" />

        </div>
    )
}
export default Hero
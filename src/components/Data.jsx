import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";

function Data() {
    const [datas, setDatas] = useState([]);


    useEffect(() => {
        fetch("https://65e48c823070132b3b24e9dc.mockapi.io/movies")
            .then((res) => res.json())
            .then((datas) => {
                setDatas(datas)
                console.log(datas)
            })
    }, [])

    return (
        <div className="flex justify-center items-center ">
            <div className="grid grid-rows-4 grid-cols-4 gap-16 ">
                {
                    datas.map((data) => (
                        <div className='  backdrop-filter backdrop-blur-sm bg-opacity-40 bg-black rounded-lg  border-slate-400 border-4  shadow-lg shadow-red-600/50 flex flex-col justify-center items-center w-64 p-4'>

                            <img src={data.poster_path} />
                            <h1 className='text-white font-bold text-xl my-4 text-center '>{data.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Data

{/* {datas.map((d) => (
    <div className="">
        <h1 className='text-white'>{d.name}</h1>
        <img src={d.image} alt="" />
    </div>
))} */}
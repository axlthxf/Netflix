import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";

function Category() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://65e48c823070132b3b24e9dc.mockapi.io/home")
        .then((res) => res.json())
        .then((datas) => {
            setDatas(datas)
            console.log(datas)
        })
}, [])
  return (
    <div className='text-white'>
      {datas[1]?.title}
    </div>
  )
}

export default Category

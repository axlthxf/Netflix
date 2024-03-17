import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function MovieDetails() {
  const { Movieid } = useParams()
  const [movie, setmovie] = useState({})


  useEffect(() => {
    fetch(`https://65ed55240ddee626c9b1766c.mockapi.io/person/${Movieid}`)
      .then((res) => res.json())
      .then((datas) => {
        setmovie(datas)
        console.log(datas)
      })
  }, [])
  return (
    <div className='bg-black h-full flex justify-center p-4 '>
      <div className='flex flex-col justify-center items-center border w-[50%]  shadow-lg shadow-red-600/50 bg-gray-800  backdrop-filter backdrop-blur-sm bg-opacity-40'>
        <h1 >{movie._id}</h1>
        <div className='flex flex-col justify-center items-center gap-3 '>
          <img className='w-fill  rounded-lg  ' src={movie.backdrop_path} />
          <h1 className=' bg-clip-text   text-transparent  bg-gradient-to-r from-red-900 to-red-500 text-2xl font-extrabold ' >{movie.original_title}</h1>
          <h1 className='text-white text-xl pb-4'>{movie.release_date}</h1>
        </div>
        <h1 className='text-white text-center p-4 ' >{movie.overview}</h1>
        <div className='flex gap-10 '>
          {
            movie.genres?.map((d) => (
              <div>
                <div className='flex items-center  '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fill-yellow-500 text-yellow-500 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>

                  <p className='text-gray-400 text-xs '>{d}</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieDetails


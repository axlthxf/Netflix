import React from 'react'
import Data from '../components/Data'
import { useState, useEffect } from 'react'
import supabase from '../Supabase'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'


function Display() {
  const navigate = useNavigate()
  const [Loading, setLoading] = useState(true)
  async function getdata() {

    const { data: { user } } = await supabase.auth.getUser()
    return user
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    getdata().then((user) => {
      console.log(user)
      if (!user) {
        navigate('/signin')
      }
    })
  }, [])




  return Loading ? (
    <Loader />) : (
    <div>
      <p className='text-2xl fond-extrabold text-white p-4'>ALL MOVIES</p>
      <Data />
    </div>
  )
}

export default Display

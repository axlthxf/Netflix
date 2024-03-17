import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../Supabase'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'


function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
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
            if (user?.aud) {
                navigate('/AllMovies')
            }
        })
    }, [])



    return Loading ? (
        <Loader />) :
        (
            <div className=''>
                <section class=" dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
                            <img src="/asset/netflix.png" className="w-24" />
                        </a>
                        <div class="w-full backdrop-filter backdrop-blur-sm bg-opacity-40 bg-neutral-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-red-700 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-red-600 dark:text-white">Your email</label>
                                        <input onChange={(e) => {
                                            setemail(e.target.value)
                                        }} type="email" name="email" id="email" class="bg-gray-50 border border-red-600 border-2 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-red-600 dark:text-white">Password</label>
                                        <input onChange={(e) => {
                                            setpassword(e.target.value)
                                        }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-red-600 border-2 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-gray-400 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-red-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button
                                        onClick={async (s) => {
                                            s.preventDefault();
                                            const { data, error } = await supabase.auth.signInWithPassword({
                                                email: email,
                                                password: password,
                                            })
                                            console.log(email, password)

                                            if (error) {
                                                console.log(error);
                                                return
                                            }
                                            navigate('/AllMovies')
                                        }}
                                        type="submit" class=" border w-full bg-red-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                    <p class="text-sm font-light text-gray-300 dark:text-gray-300">
                                        Don’t have an account yet?
                                        <Link to="/signup" class="font-medium text-primary-600 hover:text-red-600 hover:underline dark:text-primary-500">Sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}

export default Login

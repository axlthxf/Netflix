import React from 'react'
import { useState } from 'react'
import supabase from '../Supabase'

function SignUp() {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [passwordcheck, setpasswordcheck] = useState(false)
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <section class=" dark:bg-gray-900 w-full sm:w-6/12 xl:px-24 ">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img src="/asset/netflix.png" className="w-24" />

                    </a>
                    <div class="w-full  backdrop-filter backdrop-blur-sm bg-opacity-40 bg-neutral-700 rounded-lg shadow dark:border md:mt-0 sm:min-w-xl xl:p-0 shadow shadow-lg shadow-red-600/50 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6  space-y-4 md:space-y-6 sm:p-8">

                            <form class="space-y-4 md:space-y-6 flex flex-col items-center" action="#">
                                <h1 class=" font-semibold text-2xl leading-tight tracking-tight text-red-500 md:text-2xl dark:text-white">
                                    CREATE ACCOUNT
                                </h1>
                                {/* username */}
                                <div className='w-full'>
                                    <label for="username" class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
                                    <input onChange={(e) => {
                                        setusername(e.target.value)
                                    }} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />

                                </div>
                                {/* fullname */}
                                {/* <div className='w-full'>
                                    <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Full Name</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                                </div> */}
                                <div className='w-full'>
                                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                    <input onChange={(e) => {
                                        setemail(e.target.value)
                                    }} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />

                                </div>
                                <div className='w-full'>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input onChange={(e) => {
                                        setpassword(e.target.value)
                                    }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                                </div>
                                <div className='w-full'>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Confirm Password</label>
                                    <input onChange={(e) => {
                                        setconfirmpassword(e.target.value)
                                    }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    {
                                        passwordcheck && (
                                            <p className='text-blue-400 '>incorrect password entry</p>
                                        )
                                    }
                                </div>
                                <button onClick={async (b) => {
                                    b.preventDefault();
                                    console.log(email, password, username, confirmpassword)
                                    const { data, error } = await supabase.auth.signUp({
                                        email: email,
                                        password: password,
                                    })

                                    if (error) {
                                        console.log("error" + error)
                                    }
                               if(password !== confirmpassword) {

                               setpasswordcheck(true)

                               }
                            } }
                               type="submit" class=" border w-[50%]  bg-red-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp

"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { postGraphQl } from '@/api/graphicql'
import { GET_POSTS_LOGIN_QUERY } from '@/api/query'
import { EmailValidator } from '@/utilities/regexValidation'
export default function Login() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [validCheck,setValidCheck]=useState(0)
    const [loader,setLoader]=useState()
    const [emailValid,setEmailValid]=useState(true)


const setLoginEmail=()=>{
   
 localStorage.setItem('emailvalue',email)}

    
   
    const handleLogin=async()=>{

        const pathname=typeof window!= 'undefined' ? localStorage.getItem('path'):""

   
        setValidCheck(1)
       
        let check=EmailValidator(email)
        setEmailValid(check)
          if(email !==""&&password !==""){
            
            if(check){

            setLoader(true)
            
            setValidCheck(0)
            const inputdata={"email":email,"password":password,"Module": 2}
            postGraphQl(GET_POSTS_LOGIN_QUERY,inputdata,"login",setLoader,pathname,setLoginEmail,"")
            
            }
      
            localStorage.removeItem('path')
           
            
          }
          
      }
      const Onkeydownfunc = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          handleLogin()
        }
      }
const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailValid(true)
}

  return (
   <>
   <main className=" sm:min-h-full min-h-screen  mx-auto mt-1">
        <div className="sm:h-5rem h-full  sm:justify-normal  overflow-auto flex flex-col-reverse md:flex-row">
            <div  className="md:px-[75px] p-4 md:py-[180px] w-full md:w-[60%]">
                <img src="/img/sigin-banner.png" className="w-auto max-w-full" />
            </div>
            <div className="md:py-[120px] md:px-[70px] p-4  bg-blue-100 w-full md:w-[40%]">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-2xl font-medium text-black">Login to your account</h3>
                        <p className="text-gray-500 text-sm font-light">Search & Apply for jobs</p>
                    </div>
                    <div className="flex gap-6 flex-col">
                        <div className="flex flex-col gap-2">
                            <label className="text-black text-sm font-medium">Email ID</label>
                            <input type="text" value={email} onChange={(e)=>handleEmail(e)} onKeyDown={(e) => Onkeydownfunc(e)} className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" placeholder="Enter Email" />
                            {email ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Email id required</p>}
                            {email!==""&&!emailValid?<p className='text-red-600 text-xs font-normal'>Enter valid email</p>:""}
                        
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-black text-sm font-medium">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e) => Onkeydownfunc(e)} type="text" className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" placeholder="Enter Password" />
                            {password ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Password is required</p>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button onClick={()=>handleLogin()} className="w-full h-11 rounded-md hover:bg-blue-600 bg-blue-700 text-white text-sm font-normal flex justify-center items-center">
                        {loader?
                        <div className="loader"></div> :
                            "Login"
                        }
                            </button>
                        <p className="text-base text-black font-light text-center">Don&apos;t Have an account?<Link href="/auth/sign-up" className="text-blue-600 font-medium"> Register Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
   </>
  )
}

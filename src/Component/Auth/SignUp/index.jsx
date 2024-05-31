"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { EmailValidator, lowerPresent, numPresent, specialPresent, upperPresent } from '@/utilities/regexValidation'
import { GET_POSTS_SIGN_QUERY } from '@/api/query'
import { postGraphQl } from '@/api/graphicql'

export default function Signup() {
      const [fisrtName,setFirstName]=useState("")
      const [phNumber,setPhNumber]=useState("")
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const [emailError,setEmailError]=useState("")
      const [valid,setValid]=useState(0)
      const [passwordError,setPasswordError]=useState([])
      const [loader,setLoader]=useState(false)


      useEffect(()=>{
        if(valid==1){
          validCheck()
        }

      },[email,password])
    
      const handlesignup=()=>{
        setValid(1)

        const inputdata={
            "singData": {
              "firstName": fisrtName,
              "email": email,
              "mobile": phNumber,
              "password": password,
             
            },
            "ecomModule": 1
          }
          if(validCheck()){
            setValid(0)
            setLoader(true)
            postGraphQl(GET_POSTS_SIGN_QUERY,inputdata,"signup",setLoader)
          }
      }
    
      const validCheck=()=>{
        let emailcheck=false
        if (email !== "") {
          let emailCheck = EmailValidator(email);
          if (emailCheck) {
            setEmailError("");
            emailcheck=true
          } else {
            emailcheck=false
            setEmailError("Incorrect Email. Please check the email you have entered.");
          }
        } else {
          emailcheck=false
          setEmailError("Email id is required");
        }
        let arrayValue = []
     if (password == "") {
      arrayValue.push("New password is required")
      setPasswordError(["New password is required"])
      
    } else {
      if (!upperPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 in capital case!")
      }
      if (!numPresent(password) && password.length !== 0) {
        arrayValue.push("Must have at least 1 number")
      }
      if (!lowerPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 lower lase!")
      }
      
      if (password.length < 8) {
        arrayValue.push("Must be at least 8 characters!")
      }
      if (!specialPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 special characters!")
      }
      setPasswordError(arrayValue)
    }
        if(fisrtName !==""&&phNumber !==""&&arrayValue.length==0&&emailcheck ==true){
         return true
        }else{
          return false
        }
      }
      const Onkeydownfunc = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          handlesignup()
        }
      }

      const handleNumValid=(e,values)=>{
        var roleExpression = /[^0-9]/g;
        var regex = new RegExp(roleExpression);
        var t = e;
        if (!t.match(regex)) {
          if (values == "number") {
            setPhNumber(e)
          }
        }
      }


  return (
   <>
   <main className="m:h-5rem sm:min-h-full min-h-screen  mx-auto mt-1">
                <div className="h-5rem overflow-auto flex flex-col-reverse md:flex-row">
                    <div className="md:px-[75px] p-4 md:py-[180px] w-full md:w-[60%]">
                        <img src="/img/sigin-banner.png" className="w-auto max-w-full" />
                    </div>
                    <div className="md:py-[120px] md:px-[70px] p-4  bg-blue-100 w-full md:w-[40%]">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-2xl font-medium text-black">Create your account</h3>
                                <p className="text-gray-500 text-sm font-light">Search & Apply for jobs</p>
                            </div>
                            <div className="flex gap-6 flex-col">
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Full Name</label>
                                    <input type="text" value={fisrtName} onKeyDown={(e) => Onkeydownfunc(e)} className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter Name" />
                                    {fisrtName ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Name is required</p>} 
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Email ID</label>
                                    <input type="text" value={email} onKeyDown={(e) => Onkeydownfunc(e)} className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Emailid" />
                                    {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>{emailError}</p>}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Mobile Number</label>
                                    <input type="text" value={phNumber} onKeyDown={(e) => Onkeydownfunc(e)} className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" onChange={(e)=>handleNumValid(e.target.value.trimStart(),"number")} placeholder="Enter Mobile number" />
                                    {phNumber==""&&valid==1&& <p className='text-red-600 text-xs font-normal'>Phone number is required</p>}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Password</label>
                                    <input type="text" value={password} onKeyDown={(e) => Onkeydownfunc(e)}  className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                                    {valid==1&& 
                                    <div class="mt-1">
                                    <ul class="grid grid-cols-1 sm:grid-cols-2  ps-2 gap-y-2">
                                    {passwordError?.map((err)=>(
                                    <li class="text-xs font-normal text-red-600">{err}</li>
                                    ))}
                                    </ul>
                                    </div>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button onClick={()=>handlesignup()} className="w-full h-11 rounded-md hover:bg-blue-600 bg-blue-700 text-white text-sm font-normal flex justify-center items-center">
                                {loader==true?<div className="loader"></div> :" Register Now"}
                                    </button>
                                <p className="text-base text-black font-light text-center">Have an account? <Link href="/auth/login" className="text-blue-600 font-medium"> Login Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
   </>
  )
}

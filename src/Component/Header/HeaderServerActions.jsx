"use client";

import { RemoveToken } from "@/api/serverActions";
import Link from "next/link";
import ToastMessage from "../ToastMessage/ToastMessage";
import { useEffect } from "react";
import { fetchGraphQLDa } from "@/api/clientGraphicql";
import { GET_POST_JOB_APPLY_LIST_QUERY } from "@/api/query";




export default function HeaderServerActions({tokenCheck}) {

const Logout=()=>{
  RemoveToken()
  ToastMessage({type:'success',message:"Logout Successfull"})
  localStorage.removeItem("emailvalue")
}
// const applicantApi=async()=>{
//   const profileData=await fetchGraphQLDa(GET_POST_JOB_APPLY_LIST_QUERY)
// }
// useEffect(()=>{
//   if(tokenCheck){
//     applicantApi()
//   }
  
// },[])
  return (
    <>
    <header className="bg-white shadow-md shadow-black/860">
                <nav
                    className="mx-auto flex max-w-screen-2xl items-center justify-between lg:px-[120px] p-4 lg:py-6 h-[72px]"
                    aria-label="Global"
                >
                    <Link href="/"><img src="/img/job-theme-logo.svg" /></Link>
                    <div className="flex gap-2 items-center text-gray-500 text-sm font-light">
                        <img src="/img/login-user.svg" />
                        {tokenCheck?<span className="cursor-pointer" onClick={Logout}>Logout</span>:<span><Link href="/auth/login">Login\</Link><Link href="/auth/sign-up">Register</Link></span>}
                       
                    </div>
                    {/* <div className="flex lg:hidden ml-auto">
                       
                    </div> */}
                   
                </nav>
               
            </header>
    </>
  )
}

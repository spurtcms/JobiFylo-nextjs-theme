"use client";

import { RemoveToken } from "@/api/serverActions";
import Link from "next/link";
import ToastMessage from "../ToastMessage/ToastMessage";
import { use, useEffect, useState } from "react";
import { fetchGraphQLDa } from "@/api/clientGraphicql";
import { GET_POST_JOB_APPLY_LIST_QUERY } from "@/api/query";
import { imageurl } from "@/utilities/imageurl";




export default function HeaderServerActions({ tokenCheck }) {

  const [jobsId, setJobsId] = useState(typeof window != 'undefined' ? localStorage.getItem("JobId") : "")
  const [profileData, setProfileData] = useState("")
  useEffect(() => {
    if (typeof window != 'undefined') {
      if (localStorage.getItem("JobId")) {
        setJobsId(localStorage.getItem("JobId"))
      }
    }
  }, [typeof window != 'undefined' && localStorage.getItem("JobId")])

  const Logout = () => {
    RemoveToken()
    ToastMessage({ type: 'success', message: "Logout Successfull" })

    localStorage.removeItem("emailvalue")
    localStorage.removeItem("JobId")
    setJobsId("")
  }
  const applicantApi = async () => {
    const variable = {
      "jobId": jobsId,
      "emailId": typeof window != 'undefined' ? localStorage.getItem("emailvalue") : ""
    }
    const profileData = await fetchGraphQLDa(GET_POST_JOB_APPLY_LIST_QUERY, variable)
    setProfileData(profileData?.applicantDetails?.imagePath)
  }
  useEffect(() => {
    if (tokenCheck) {
      applicantApi()
    }

  }, [jobsId])

  return (
    <>
      <header className="bg-white shadow-md shadow-black/860">
        <nav
          className="mx-auto flex max-w-screen-2xl items-center justify-between lg:px-[120px] p-4 lg:py-6 h-[72px]"
          aria-label="Global"
        >
          <Link href="/"><img src="/img/job-theme-logo.svg" /></Link>
          <Link href="/auth/signin">
            {/* // className="p-[10px_32px] inline-block rounded-[50px] text-base font-semibold leading-[27px]   text-[#FFFFFF]  bg-blue-600 whitespace-nowrap max-md:p-[10px_14px] max-md:leading-none  max-md:text-sm hover:bg-blue-600 max-sm:!ml-0" */}

            <img className="w-6 h-6 rounded-full" src={`/img/login-user.svg`} />
          </Link>
          {/* <div className="flex gap-2 items-center text-gray-500 text-sm font-light">
                        {tokenCheck?<span className="cursor-pointer" onClick={Logout}>Logout</span>:<span><Link href="/auth/login">Login\</Link><Link href="/auth/sign-up">Register</Link></span>}
                       
                    </div> */}
          {/* <div className="flex lg:hidden ml-auto">
                       
                    </div> */}

        </nav>

      </header>
    </>
  )
}

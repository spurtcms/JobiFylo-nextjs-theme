"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { useSelector } from 'react-redux';
import HomeHeader from './HomeHeader';
import FilterJob from './FilterJob';


export default function ListView({ListData}) {
    const [listViewData,setListViewData]=useState([]);
    const reduxData=useSelector((s)=>s?.customerRedux?.Entry_List_Api_Data)
    console.log(reduxData,"reduxData")

    useEffect(()=>{
setListViewData(reduxData)
    },[])
  return (
   <>
   <HomeHeader/>
   <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
   <FilterJob/>
   </div>
   <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
    {
        listViewData?.map((data,index)=>(
            <div className="flex flex-col gap-6 mt-6">
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.keyresponsibilities}</span>
                <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                    <Link href="#" className="block text-black text-2xl leading-8 font-normal my-2">{data?.title}</Link>
                    <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">{data?.jobcode}</span></p>
                </div>
                <div className="flex gap-4 mb-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <img src="/img/exp.svg" />
                        <p className="text-sm  leading-4  text-gray-500 font-light">{data?.experiance}</p>
                    </div>
                    <div className="w-0.5 h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-2">
                        <img src="/img/Time.svg" />
                        <p className="text-sm  leading-4 text-gray-500 font-light">{data?.jobtype}</p>
                    </div>
                    <div className="w-0.5 h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-2">
                        <img src="/img/job-type.svg" />
                        <p className="text-sm  leading-4 text-gray-500 font-light">{data?.location}</p>
                    </div>
                </div>
                {/* <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p> */}
                <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                    <h5 className="text-gray-500 text-xs font-light">Posted Date: {data?.posteddate}</h5>
                    <Link href={`/view-job/${data?.slug}`} className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                </div>
            </div>
           

        </div>
        ))
    }
       </div>           
   </>
  )
}

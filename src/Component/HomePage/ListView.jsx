import React from 'react'
import Link from 'next/link'
import moment from 'moment'


export default function ListView({ListData}) {

  return (
   <>
    <div className="flex flex-col gap-6 mt-6 mb-10">
        {ListData.length>0?ListData?.map((data,index)=>(
                    <div className="border-gray-300 border rounded p-4 hover:shadow-lg" key={index}>
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.category?.categoryName}</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href={`view-job/${data?.jobSlug}`} className="block text-black text-2xl leading-8 font-normal my-2">{data?.jobTitle}</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">{data?.minimumYears} - {data?.maximumYears} Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">{data?.jobType}</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">{data?.jobLocation}</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">{data?.jobDescription}</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: {moment(data?.postedDate).format("DD MMMM YYYY")}</h5>
                                <Link href={`view-job/${data?.jobSlug}`} className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
        )):
        <>
        {/* <h1>No data</h1> */}
            <>
            <div className=" px-5 lg:px-20  py-32 col-span-full grid place-items-center">
                <div className="flex flex-col items-center max-w-[408px] ">
                    {/* <img src="\img\noData.svg" alt="nodata" className="dark:hidden" /> */}
                    <img
                        src="/img/nodatafilter.svg"
                        alt="nodata"
                    />
                    <h1 className=" text-2xl leading-6 font-medium text-black  mb-3 mt-6 text-center dark:dark:text-light-1">
                        {/* {search ? "No matching search results" : "No Listing Yet !"} */}
                        No Listing Yet !
                    </h1>
                </div>
            </div>
            </>
        </>}
         
          </div>
   </>
  )
}

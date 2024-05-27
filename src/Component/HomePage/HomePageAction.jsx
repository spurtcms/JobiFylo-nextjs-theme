"use client"
import React from 'react'
import Link from "next/link";
import FilterJob from './FilterJob';
import moment from 'moment';

export default function HomePageAction({ListData}) {
  console.log(ListData,'ListDsaddata')
  return (
   <>
   <main className="min-h-screen">
        <div className="bg-blue-50 w-full ">
          <div className="max-w-screen-2xl m-auto flex  gap-[130.65px] flex-col lg:flex-row lg:pt-[85px] items-start lg:ps-[120px] lg:pe-[234.5px] lg:pb-[26.89px] md:px-10 md:py-20 px-6 py-10 relative">
            <div className="lg:pt-[69px] pt-0">
              <h2 className="mb-1.5 sm:text-[64px] text-4xl font-semibold text-black-100 sm:leading-[80px] leading-10">Find your dreamcareer</h2>
              <p className="text-gray-500 text-sm leading-4 font-normal">Match with Companies that Share Your Values</p>
            </div>
            <img src="/img/banner.svg" className="hidden lg:block" />
            <div className="lg:px-[120px] max-w-screen-2xl m-auto sm:h-[76px] h-auto absolute  w-full left-0 -bottom-[11rem]  sm:-bottom-16  md:px-10 px-6 mb-6">
              <div className="w-full bg-white h-full flex gap-px items-center p-2 rounded-md shadow-500 border border-gray mb-6 flex-col sm:flex-row">

                <div className="w-full relative">
                  <input type="text" className="sm:h-full sm:border-0 border-b border-gray  h-10 py-0 sm:py-7 w-full focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Search by Job Title/Role" />
                  <img src="/img/search.svg" className="absolute top-3 sm:top-[27px] left-6" />
                </div>
                <div className="h-[50px] w-0.5 bg-gray-200 hidden sm:flex"></div>
                <div className="w-full relative">
                  <input type="text" className="sm:h-full h-10 py-0 sm:py-7 w-full sm:border-0 border-b border-gray focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                  <img src="/img/location.svg" className="absolute top-3 sm:top-[27px] left-6" />
                </div>
                <button className="sm:h-full h-10 min-w-[177px] sm:mt-0 mt-3 rounded bg-blue-600 text-white text-base leading-5 font-medium">Search Jobs</button>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
            </div>
          </div>
        </div>

        <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
         <FilterJob/>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10" >
            {ListData&&ListData.map((data,index)=>(
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg" key={index}>
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.category?.categoryName}</span>
              <Link href={`view-job/${data?.jobSlug}`} className="block text-black text-2xl leading-8 font-normal my-2">{data?.jobTitle}</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">{data?.minimumYears} - {data?.maximumYears} Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: <span className="text-gray-500 font-light">{data?.jobType}  </span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: <span className="text-gray-500 font-light">{data?.jobLocation}</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: {moment(data?.postedDate).format("DD MMMM YYYY")}</h5>
              <Link href={`view-job/${data?.jobSlug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
            </div>
            ))}

            {/* <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Security</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Security</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div>
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
              <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">123456852</span></p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img src="/img/exp.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/Time.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: Full-Time <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/job-type.svg" />
                  <p className="text-sm font-normal leading-4 text-blue-600 ">Location: Chennai <span className="text-gray-500 font-light">5 - 7 Years</span></p>
                </div>
              </div>
              <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: 26 Mar 2024</h5>
              <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded  flex justify-center items-center">View Job</Link>
            </div> */}
          </div>
        </div>
      </main>
   </>
  )
}

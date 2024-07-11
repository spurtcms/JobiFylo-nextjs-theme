import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export default function TilteView({ListData}) {
  console.log(ListData,'ListData')
  return (
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

          </div>
  )
}

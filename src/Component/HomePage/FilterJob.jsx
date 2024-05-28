import Link from 'next/link'
import React from 'react'

export default function FilterJob({pathname}) {

  return (
    <>
     <div className="grid md:grid-cols-5fr grid-cols-2  gap-4 mb-4">
            <div className="relative w-full">
              <select className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal">
                <option></option>
                <option></option>
                <option></option>
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <div className='w-full'>
              <input className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent p-3 text-sm font-normal" />
            </div>
            <div className="relative w-full">
              <select className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal">
                <option></option>
                <option></option>
                <option></option>
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <div className="relative w-full">
              <select className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal">
                <option></option>
                <option></option>
                <option></option>
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <button className="min-w-[138px] h-[42px] bg-blue-600 text-white rounded text-sm font-medium md:col-auto col-span-2">Filter Jobs</button>
          </div>
          <div className="flex justify-between sm:items-center items-end pb-6 border-gray border-b">
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4 ">
                Security
                <img src="/img/cancel.svg" className="cursor-pointer" />
              </div>

              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                Chennai
                <img src="/img/cancel.svg" className="cursor-pointer" />
              </div>

              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                2 - 5 Years
                <img src="/img/cancel.svg" className="cursor-pointer" />
              </div>

              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                This Week
                <img src="/img/cancel.svg" className="cursor-pointer" />
              </div>
              <button className="text-sm whitespace-nowrap font-light text-black leading-4 p-3 border-gray-500 rounded-md border bg-white">Clear All</button>
            </div>
            {pathname=="/"?<Link href="/list-view" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md">
            <img src="/img/list.svg" />
            List View 
            </Link>:<Link href="/" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md">
            <img src="/img/title.svg" />
            Tile View
            </Link>}
            
          </div>
    </>
  )
}

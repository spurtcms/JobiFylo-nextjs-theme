import React from 'react'

export default function HomeHeader() {
  return (
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
  )
}

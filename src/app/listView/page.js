import React from 'react'
import Header from '../header/page'
import Link from 'next/link'

export default function page() {
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
                    <div className="flex justify-between items-end sm:items-center pb-6 border-gray border-b">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
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
                        <Link href="listView" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md">
                            <img src="/img/title.svg" />
                            Tile View
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6 mt-6">
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Security</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Security</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Security</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Technology</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">Administrator</span>
                            <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">Crypto PKI und CMS Entwickler (m/w/d)</Link>
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">123456852</span></p>
                            </div>
                            <div className="flex gap-4 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                                </div>
                            </div>
                            <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p>
                            <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                <h5 className="text-gray-500 text-xs font-light">Posted Date: 26 Mar 2024</h5>
                                <Link href="viewJob" className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

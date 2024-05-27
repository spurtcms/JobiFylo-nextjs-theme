import React from 'react'
import Header from '../header/page'
import Link from 'next/link'

export default function applyJob() {
    return (
        <>
          
            <main className="min-h-screen max-w-screen-2xl m-auto md:py-8 lg:px-[120px] md:px-10 p-6">
                <Link href='/' className="flex gap-1 items-center text-gray-500 text-xs font-light leading-4"> <img src="/img/left-arrow.svg" /> Back </Link>

                <div className="flex flex-col items-center border-b border-gray mb-4">
                    <h5 className="mb-4 mt-8 sm:text-2xl sm:leading-[30px] font-normal text-blue-600 text-lg">Crypto PKI und CMS Entwickler (m/w/d)</h5>
                    <div className="flex gap-4 mb-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <img src="/img/exp.svg" />
                            <p className="text-sm  leading-4  text-gray-500 font-light">5 - 7 Years</p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-100"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/Time.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">Full-Time</p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-100"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/job-type.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">Chennai</p>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="text-2xl font-medium leading-[30px] mb-1.5 text-black">Job Application</h2>
                    <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                </div>
                <div className="pb-6 border-b border-gray grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Basic Information</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="relative rounded-full w-[120px] h-[120px]">
                            <img src="/img/profile.svg" />
                            <input type="file"  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Name</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Email ID</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Phone</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1 relative">
                            <label className="font-light text-sm text-black">Gender</label>
                            <select className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none bg-transparent px-4 text-sm leading-4 font-light placeholder:text-slate-300 appearance-none">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <img src="/img/arrow.svg" className="absolute top-11 right-[18px]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Location</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                    </div>
                </div>
                <div className="pb-6 border-b border-gray grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Education Information</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Qualification</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Year of Graduation</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Total Experience</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Skills</label>
                            <input type="text" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" />
                        </div>
                    </div>
                </div>
                <div className="pb-6 flex flex-col gap-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Upload Resume</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex p-6 w-full flex-col gap-1 items-center justify-center border rounded border-gray-200 bg-gray-slate relative">
                        <img src="/img/upload.svg" className="mb-1"/>
                        <h5 className="font-normal text-sm text-gray-500">Browse File</h5>
                        <p className="font-light text-xs text-gray-500">Drag and Drop file here</p>
                        <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                    <div className="flex justify-center gap-4">
                    <button className="w-auto p-4 h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">Apply for Job</button>
                        <button className="w-auto p-4 h-11 bg-slate-50 text-black border border-gray-500 text-base font-normal rounded flex justify-center items-center">Cancel</button>
                    </div>
                </div>
            </main>
        </>
    )
}

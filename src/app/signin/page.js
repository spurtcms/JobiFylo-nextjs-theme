import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <main className="sm:h-5rem sm:min-h-full min-h-screen  mx-auto mt-1">
                <div className="sm:h-5rem h-full  sm:justify-normal  overflow-auto flex flex-col-reverse md:flex-row">
                    <div  className="md:px-[75px] p-4 md:py-[180px] w-full md:w-[60%]">
                        <img src="/img/sigin-banner.png" className="w-auto max-w-full" />
                    </div>
                    <div className="md:py-[120px] md:px-[70px] p-4  bg-blue-100 w-full md:w-[40%]">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-2xl font-medium text-black">Login to your account</h3>
                                <p className="text-gray-500 text-sm font-light">Search & Apply for jobs</p>
                            </div>
                            <div className="flex gap-6 flex-col">
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Email ID</label>
                                    <input type="text" className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" placeholder="Enter Name" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-black text-sm font-medium">Password</label>
                                    <input type="text" className="bg-white text-sm text-black font-light placeholder:text-slate-300 p-3 border border-gray-200 rounded-md focus-visible:outline-0" placeholder="Enter Password" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link href="/" className="w-full h-11 rounded-md hover:bg-blue-600 bg-blue-700 text-white text-sm font-normal flex justify-center items-center">Login</Link>
                                <p className="text-base text-black font-light text-center">Don't Have an account?<Link href="/signup" className="text-blue-600 font-medium"> Register Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

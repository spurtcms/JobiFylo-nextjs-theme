"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TilteView from '../HomePage/TilteView';
import ViewJobsSkeleton from '@/utilities/Skeleton/ViewJobsSkeleton';
import { useRouter } from 'next/navigation';

export default function ViewJobServer({DetailData,ListData,token,params}) {

    console.log(token,'token')

    console.log(DetailData,'DetailData',params)


    const [skeleton,setSketon]=useState(true)
    const [secSkeleton,setSecSkeleton]=useState(true)

    useEffect(()=>{
  if(DetailData!=undefined){
    setSketon(false)
  }
  if(ListData!=undefined){
    setSecSkeleton(false)
  }
    },[])

const relatedData=ListData?.map((data)=>{
 if(DetailData&&data.id !==DetailData.id&&data.categoriesId===DetailData.categoriesId){
         return data
    }else{
        return []
    }
}).flat()

let router=useRouter()
    const handleApply=()=>{
        if(token){
            router.push(`/apply-job/${params}`)
        }
        else{
            router.push('/auth/login')
        }
        
    }
  return (
    <>
                <main className="min-h-screen max-w-screen-2xl m-auto md:py-8 lg:px-[120px] md:px-10 p-6">
                <Link href='/' className="flex gap-1 items-center text-gray-500 text-xs font-light leading-4"> <img src="/img/left-arrow.svg" /> Back </Link>
               {skeleton==true?
               <ViewJobsSkeleton DetailData={DetailData} ListData={ListData}/>
               :
               <>
               <div className="mt-8">
                    <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{DetailData?.category?.categoryName}</span>
                    <h2 className="mt-2 mb-4 sm:text-4xl sm:leading-[45px] font-normal text-blue-600 text-3xl">{DetailData?.jobTitle}</h2>
                    <div className="flex gap-6 mb-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <img src="/img/exp.svg" />
                            <p className="text-sm  leading-4  text-gray-500 font-light">{DetailData?.minimumYears} - {DetailData?.maximumYears} Years</p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/Time.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.jobType}</p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/job-type.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.jobLocation}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center pb-6 border-b border-gray mb-6">
                        <button className="w-auto p-4 h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center" onClick={()=>handleApply()}>Apply Now</button>
                        {/* <Link href="shareJob" className="w-auto p-4 h-11 bg-slate-50 text-blue-600 border border-gray-500 text-base font-normal rounded flex justify-center items-center">Share Job</Link> */}
                    </div>
                    <div className="pb-6 border-b border-gray mb-6">
                        <h2 className="text-2xl font-medium leading-[30px] mb-4 text-black">Job Description</h2>
                        <div className="flex flex-col gap-3 mb-4">
                            <p className="text-gray-500 font-light">{DetailData?.jobDescription}</p>
                            {/* <p className="text-sm font-medium leading-4 text-black ">Project Role Description :  <span className="text-gray-500 font-light">Design, build and configure applications to meet business process and application requirements.</span></p>
                            <p className="text-sm font-medium leading-4 text-black ">Must have skills :  <span className="text-gray-500 font-light">Java Standard Edition</span></p>
                            <p className="text-sm font-medium leading-4 text-black ">Good to have skills :  <span className="text-gray-500 font-light">NA</span></p>
                            <p className="text-sm font-medium leading-[22px] text-black ">Summary:  <span className="text-gray-500 font-light">As an Application Developer, you will be responsible for designing, building, and configuring applications to meet business process and application requirements using Java Standard Edition. Your typical day will involve collaborating with cross-functional teams, analyzing user requirements, and developing high-quality software solutions.</span></p> */}
                        </div>
                        {/* <div className="mb-3">
                            <h4 className="text-sm font-medium leading-4 text-black mb-2">Roles & Responsibilities:</h4>
                            <ul className="list-disc ps-7 flex flex-col gap-2">
                                <li className="text-gray-500 font-light text-sm">Have experience in Java and springboot</li>
                                <li className="text-gray-500 font-light text-sm">Developed and designed applications </li>
                                <li className="text-gray-500 font-light text-sm">Managed a team and quality delivery</li>
                                <li className="text-gray-500 font-light text-sm">Have exposure to Performance</li>
                                <li className="text-gray-500 font-light text-sm">Worked in onshore/offshore model Professional</li>
                            </ul>
                        </div> */}
                        {/* <div className="mb-4">
                            <h4 className="text-sm font-medium leading-4 text-black mb-2">Roles & Responsibilities:</h4>
                            <ul className="list-disc ps-7 flex flex-col gap-2">
                                <li className="text-gray-500 font-light text-sm">Aware of the SDLC process</li>
                                <li className="text-gray-500 font-light text-sm">Have experience in Java and springboot </li>
                                <li className="text-gray-500 font-light text-sm">Developed and unit testing unit applications</li>
                                <li className="text-gray-500 font-light text-sm">Good communication skills</li>
                            </ul>
                        </div>
                        <p className="text-sm font-medium leading-[22px] text-black ">Additional Information: - <span className="text-gray-500 font-light"> The candidate should have a minimum of 3 years of experience in Java Standard Edition. - The ideal candidate will possess a strong educational background in computer science or a related field, along with a proven track record of delivering high-quality software solutions. - This position is based at our Chennai office.</span></p> */}
                    </div>
                    {/* <div className="pb-6 border-b border-gray mb-6">
                        <h2 className="text-2xl font-medium leading-[30px] mb-4 text-black">Qualifications</h2>
                        <p className="text-sm font-medium leading-4 text-black ">Educational Qualification : <span className="text-gray-500 font-light">Engineering</span></p>
                        <div className="flex items-start gap-2 mt-3 flex-col sm:flex-row">
                            <h5 className="text-sm font-medium leading-4 text-black whitespace-nowrap ">Experience :</h5>
                            <div>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Minimum 3 year(s) of experience is required</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">3+ years experience in a product management or product strategy role</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Superior project management, and interpersonal/collaboration skills</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Demonstrated success defining and launching digital productsDeep knowledge of B2B digital marketing, advertising, and lead generation techniques preferred</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Familiarity with Agile concepts and best practices</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">High level of initiative, self-direction and accountability for actions</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Agile professional who excels in a fast-paced environment and thrives on continuously pivoting strategies to drive business needs forward</p>
                                <p className="text-gray-500 font-light leading-[22px] text-sm ">Ability to express observations clearly with supporting facts, assess alternative options, and encourage their acceptance</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                </>}
                {secSkeleton==true?
                <ViewJobsSkeleton DetailData={DetailData} ListData={ListData}/>
                :
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-medium leading-[30px]  text-black">Related Jobs</h2>
                        <Link href="/" className="flex items-center gap-2 text-xs font-light text-blue-600"> View All <img src="/img/right-arrow.svg" /> </Link>
                    </div>
                    <TilteView ListData={relatedData}/>
                    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
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
                            <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
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
                            <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
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
                            <Link href="viewJob" className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">View Job</Link>
                        </div>
                    </div> */}
                </div>
                }
                
               
               
                
                
            </main>
    </>
  )
}

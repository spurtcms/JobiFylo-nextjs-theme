import { fetchGraphQl } from '@/api/graphicql'
import { GET_POST_CATEGORIES_LIST, GET_POST_LIST_QUERY } from '@/api/query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function FilterJob({pathname,setList}) {

  const [catList,setCatList]=useState()
  const [jobName,setJobName]=useState("")
  const [location,setLocation]=useState("")
  const [expYear,setExpYear]=useState("")
  const [postDate,setPostDate]=useState("")
  const [inputJob,setInputJob]=useState()
  const [inputData,setInputData]=useState()
  const [inputExp,setInputExp]=useState()
  const [inputDate,setInputDate]=useState()

  const [trigger,setTrigger]=useState(false)

  const ExpStatus=[
    {id:0, name: "Experienced Level",apiName:""}, 
    {id:1, name: "1-3",minDate:1,maxDate:3},
    {id:2, name: "3-5",minDate:3,maxDate:5},
    {id:3, name: "5-7",minDate:5,maxDate:7},
    {id:4, name: "7-10",minDate:7,maxDate:10},
    ]

    const ExpDate=[   
      {id:0, name: "Date Posted",apiName:""}, 
      {id:1, name: "This Week",apiName:""},
      {id:2, name: "This Month",apiName:""},
      {id:3, name: "This Year",apiName:""},
      {id:4, name: "Today",apiName:""},
      ]

      // const Filters = [
      //   {orderjob: false},
      //   {orderloca: false},
      //   {orderyear: false},
      //   {orderdate:false}
      // ]
      
      const CategorieApi=async()=>{
        let variable={
          "hierarchylevel": 1
        }
        let CategorieList=await fetchGraphQl(GET_POST_CATEGORIES_LIST,variable)
        setCatList(CategorieList?.categoriesList?.categories&&CategorieList?.categoriesList?.categories)
      }
      useEffect(()=>{
        CategorieApi()
      },[])

      console.log(catList,'catList')


      const handleJobName=(e)=>{
     
      if(e!="Job Category"){
        setJobName(e)
        console.log(e,'2wsedsed')
   
      }
      }

      const handleLocation=(e)=>{
        console.log(e,'2wsedsed')
        // if(e!=""){
          setLocation(e)
         
        // }
       
      }
      const handleExpYear=(e)=>{ 
        if(e!="Experienced Level"){
          console.log(e,'2wsedsed')
          setExpYear(e)
          
        }
        
      }
      const handleMonth=(e)=>{
        // console.log(e,'ertfvghftdrtc')
        if(e!="Date Posted"){
          console.log(e,'2wsedsed')
          setPostDate(e)
          
        }
        
      }
      

      const handleFilter=async()=>{
        
        setInputData(location)
        setInputJob(jobName)
        setInputExp(expYear)
        setInputDate(postDate)
        console.log(postDate,'expYesdsfar')
        let filterExp=ExpStatus.filter((data)=>data.name==expYear)

console.log(filterExp?.[0]?.maxDate,'e3edewewerw')
        if(jobName!="Job Category"||location!=""||expYear!="Experienced Level"||postDate!="Date Posted"){
          setTrigger(true)
          
          let variable={
            "limit":5,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              "categoryId": 2,
              "categorySlug":jobName,
              "keyWord": "",
              "datePosted": postDate,
              "minimumYears": filterExp?.[0]?.minDate,
              "maximumYears": filterExp?.[0]?.maxDate
            }
          }

          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          console.log(filterListData,'filterListData')
          setList(filterListData?.jobsList?.jobs)
        }

      }


      const handleClear=async()=>{
        setTrigger(false)
        setJobName("")
        setLocation("")
        setExpYear("")
        setPostDate("")

        let variables={
          "limit":10,
          "offset":0 
      }
      let ListData=await fetchGraphQl(GET_POST_LIST_QUERY,variables)
      setList(ListData?.jobsList?.jobs)
      }


      const handleClose=async(data)=>{
        if(data=="Job Category"){
          setJobName("")
          setInputJob(data)
          let filterExp=ExpStatus.filter((data)=>data.name==expYear)
          let variable={
            "limit":5,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              "categoryId": 2,
              "categorySlug":"",
              "keyWord": "",
              "datePosted": postDate,
              "minimumYears": filterExp?.[0]?.minDate,
              "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          console.log(filterListData,'filterListData')
          setList(filterListData?.jobsList?.jobs)
        }
      else if(data==""){
          setLocation("")
          setInputData(data)

          let filterExp=ExpStatus.filter((data)=>data.name==expYear)
          let variable={
            "limit":5,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":"",
              "categoryId": 2,
              "categorySlug":jobName,
              "keyWord": "",
              "datePosted": postDate,
              "minimumYears": filterExp?.[0]?.minDate,
              "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          console.log(filterListData,'filterListData')
          setList(filterListData?.jobsList?.jobs)
          
        }
        else if(data=="Experienced Level"){
          setExpYear("")
          setInputExp(data)
          // let filterExp=ExpStatus.filter((data)=>data.name==expYear)
          let variable={
            "limit":5,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              "categoryId": 2,
              "categorySlug":jobName,
              "keyWord": "",
              "datePosted": postDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          console.log(filterListData,'filterListData')
          setList(filterListData?.jobsList?.jobs)
        }
        else if(data=="Date Posted"){
          setPostDate("")
          setInputDate(data)

          let filterExp=ExpStatus.filter((data)=>data.name==expYear)
          let variable={
            "limit":5,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              "categoryId": 2,
              "categorySlug":jobName,
              "keyWord": "",
              "datePosted": "",
              "minimumYears": filterExp?.[0]?.minDate,
              "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          console.log(filterListData,'filterListData')
          setList(filterListData?.jobsList?.jobs)
        }
       
      }

      useEffect(()=>{
        console.log(jobName,location,expYear,postDate,"asdsdfsdf")
        if(jobName==""&&expYear==""&&postDate==""&&location==""){
          setTrigger(false)
        }
      },[jobName,expYear,postDate,location])
            
  return (
    <>
     <div className="grid md:grid-cols-5fr grid-cols-2  gap-4 mb-4">
            <div className="relative w-full">
              <select  className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal p-3" 
              value={jobName} onChange={(e)=>handleJobName(e.target.value)}>
                <option>Job Category</option>
                {catList?.map((data,index)=>(
                  <option>{data?.categorySlug}</option>
                ))}
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <div className='w-full'>
              <input className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent p-3 text-sm font-normal placeholder:text-slate-300" placeholder="Location" value={location} onChange={(e)=>handleLocation(e.target.value)}/>
            </div>
            <div className="relative w-full">
              <select className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal p-3"
             value={expYear} onChange={(e)=>handleExpYear(e.target.value)}>
                {ExpStatus.map((data,index)=>(
                <option>{data?.name}</option>))}
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <div className="relative w-full">
              <select className="h-[42px] rounded-md border-gray-300 border w-full focus-visible:outline-none bg-transparent appearance-none text-sm font-normal p-3"
             value={postDate} onChange={(e)=>handleMonth(e.target.value)}>
                {ExpDate.map((data,index)=>(
                  <option>{data?.name}</option>
                ))}
              </select>
              <img src="/img/arrow.svg" className="absolute top-[19px] right-[18px]" />
            </div>
            <button className="min-w-[138px] h-[42px] bg-blue-600 text-white rounded text-sm font-medium md:col-auto col-span-2" onClick={()=>handleFilter()}>Filter Jobs</button>
          </div>
          <div className="flex justify-between sm:items-center items-end pb-6 border-gray border-b">
           {trigger==true&&
            <div className="flex flex-wrap gap-4">
               {inputJob!="Job Category"&&inputJob!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4 ">
                {inputJob}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("Job Category")}/>
              </div>}
              {inputData!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputData}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("")}/>
              </div>}
              
              {inputExp!="Experienced Level"&&inputExp!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputExp} Years
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("Experienced Level")}/>
              </div>}

              {inputDate!="Date Posted"&&inputDate!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
               {inputDate}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("Date Posted")}/>
              </div>}

              <button className="text-sm whitespace-nowrap font-light text-black leading-4 p-3 border-gray-500 rounded-md border bg-white" onClick={()=>handleClear()}>Clear All</button>
            </div>}
            
            {pathname=="/"?<Link href="/list-view" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md ml-auto">
            <img src="/img/list.svg" />
            List View 
            </Link>:<Link href="/" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md ml-auto">
            <img src="/img/title.svg" />
            Tile View
            </Link>}
            
          </div>
    </>
  )
}

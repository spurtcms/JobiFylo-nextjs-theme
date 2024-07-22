import { fetchGraphQl } from '@/api/graphicql'
import { GET_POST_CATEGORIES_LIST, GET_POST_LIST_QUERY } from '@/api/query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';

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

      // const Filters = [
      //   {orderjob: false},
      //   {orderloca: false},
      //   {orderyear: false},
      //   {orderdate:false}
      // ]
      
      const CategorieApi=async()=>{
        let variable={
          "hierarchylevel": 1,  
          "categoryGroupId": 15
        }
        let CategorieList=await fetchGraphQl(GET_POST_CATEGORIES_LIST,variable)

        setCatList(CategorieList?.categoriesList?.categories&&CategorieList?.categoriesList?.categories)
      }
      useEffect(()=>{
        CategorieApi()
      },[])

      const handleJobName=(e)=>{
     
      if(e!="Job Category"){
        setJobName(e)
   
      }
      }
      const handleLocation=(e)=>{
        // if(e!=""){
          setLocation(e)
         
        // }
       
      }
      const handleExpYear=(e)=>{ 
        if(e!="Experienced Level"){
          setExpYear(e)
          
        }
        
      }
      const handleMonth=(e)=>{
        if(e!="Date Posted"){
          setPostDate(e)
          
        }
        
      }
      
      const handleFilter=async()=>{
        
        setInputData(location)
        setInputJob(jobName?.label)
        setInputExp(expYear?.label)
        setInputDate(postDate?.label)
        let filterExp=ExpStatus.filter((data)=>data?.id==expYear.value)
        if(jobName!=""||location!=""||expYear!=""||postDate!=""){
          setTrigger(true)
          
          let variable={
            "limit":10,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              "categorySlug":jobName?.label,
              "keyWord": "",
              "datePosted": postDate?.label,
              "minimumYears": filterExp?.[0]?.minDate
              // "maximumYears": filterExp?.[0]?.maxDate
            }
          }

          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
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
          setInputJob("")
          let filterExp=ExpStatus.filter((data)=>data?.id==expYear.value)
          let variable={
            "limit":10,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              // "categoryId": 2,
              "categorySlug":"",
              "keyWord": "",
              "datePosted": postDate?.label,
              "minimumYears": filterExp?.[0]?.minDate
              // "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          setList(filterListData?.jobsList?.jobs)
        }
      else if(data==""){
          setLocation("")
          setInputData("")

          let filterExp=ExpStatus.filter((data)=>data?.id==expYear.value)
          let variable={
            "limit":10,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":"",
              // "categoryId": 2,
              "categorySlug":jobName?.label,
              "keyWord": "",
              "datePosted": postDate?.label,
              "minimumYears": filterExp?.[0]?.minDate
              // "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          setList(filterListData?.jobsList?.jobs)
          
        }
        else if(data=="Experienced Level"){
          setExpYear("")
          setInputExp("")
          // let filterExp=ExpStatus.filter((data)=>data.name==expYear)
          let variable={
            "limit":10,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              // "categoryId": 2,
              "categorySlug":jobName?.label,
              "keyWord": "",
              "datePosted": postDate?.label
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          setList(filterListData?.jobsList?.jobs)
        }
        else if(data=="Date Posted"){
          setPostDate("")
          setInputDate("")

          let filterExp=ExpStatus.filter((data)=>data?.id==expYear.value)
          let variable={
            "limit":10,
            "offset":0,
            "filter": {
              "jobTitle":"",
              "jobLocation":location,
              // "categoryId": 2,
              "categorySlug":jobName?.label,
              "keyWord": "",
              "datePosted": "",
              "minimumYears": filterExp?.[0]?.minDate
              // "maximumYears": filterExp?.[0]?.maxDate
            }
          }
          let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
          setList(filterListData?.jobsList?.jobs)
        }
       
      }

      useEffect(()=>{
        if(jobName==""&&expYear==""&&postDate==""&&location==""){
          setTrigger(false)
        }
      },[jobName,expYear,postDate,location])
            

      let jobFilterOption=catList?.map((list)=>({
        value:list.id,
        label:list.categorySlug
      }))


    const ExpStatus=[
      // {id:0, name: "Experienced Level",apiName:""}, 
      {id:1, name: "1 Years",minDate:1},
      {id:2, name: "3 Years",minDate:3},
      {id:3, name: "5 Years",minDate:5},
      {id:4, name: "10 Years",minDate:10},
      // {id:4, name: "10+ Years",minDate:10,maxDate:10},
      // {id:5, name: "10+ Years",minDate:10,maxDate:15}
      ]

      let expFilterOption=ExpStatus?.map((list)=>({
        value:list.id,
        label:list.name
       }))


    const ExpDate=[   
      // {id:0, name: "Date Posted",apiName:""}, 
      {id:1, name: "This Week",apiName:""},
      {id:2, name: "This Month",apiName:""},
      {id:3, name: "This Year",apiName:""},
      {id:4, name: "Today",apiName:""},
      ]

      let dateFilterOption=ExpDate?.map((list)=>({
        value:list.id,
        label:list.name
       }))

    


    //  const customstyles = {

    //  }

  return (
    <>
     <div className="grid md:grid-cols-5fr grid-cols-2  gap-4 mb-4">
              <Select className='text-sm'
              placeholder="Job Category" options={jobFilterOption} value={jobName} onChange={(e)=>handleJobName(e)}>
               
              </Select>
             
            <div className='w-full'>
              <input className="h-[38px] rounded-[4px] border-gray-500 border w-full focus-visible:outline-none bg-transparent focus:border-[#2684FF] hover-blue p-3 text-sm font-normal placeholder:text-slate-300" placeholder="Location" value={location} onChange={(e)=>handleLocation(e.target.value)}/>
            </div>
              <Select placeholder="Experienced Level" className='text-sm'
               value={expYear} options={expFilterOption} onChange={(e)=>handleExpYear(e)}>
            
              </Select>
              
              <Select placeholder="Date Posted" className='text-sm'
             value={postDate} options={dateFilterOption} onChange={(e)=>handleMonth(e)}>
                
              </Select>
             
            <button className="min-w-[138px] h-[42px] bg-blue-600 text-white rounded text-sm font-medium md:col-auto col-span-2" onClick={()=>handleFilter()}>Filter Jobs</button>
          </div>
          <div className="flex justify-between sm:items-center items-end pb-6 border-gray border-b">
           {trigger==true&&
            <div className="flex flex-wrap gap-4">
               {inputJob!=undefined&&inputJob!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4 ">
                {inputJob}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("Job Category")}/>
              </div>}
              {inputData!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputData}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("")}/>
              </div>}
              
              {inputExp!=undefined&&inputExp!=""&&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputExp}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={()=>handleClose("Experienced Level")}/>
              </div>}

              {inputDate!=undefined&&inputDate!=""&&
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

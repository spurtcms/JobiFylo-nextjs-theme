"use client"
import { fetchGraphQl } from '@/api/graphicql'
import { GET_JOB_LIST_QUERY, GET_POST_CATEGORIES_LIST, GET_POST_CATEGORY_NAME, GET_POST_LIST_QUERY } from '@/api/query'
import { Entry_List_Api_Data } from '@/StoreConfiguration/slices/customer'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select';

export default function FilterJob({ pathname, setList }) {

  const [catList, setCatList] = useState([])
  const [jobName, setJobName] = useState("")
  const [location, setLocation] = useState("")
  const [expLevel, setExpLevel] = useState("");
  const [expYear, setExpYear] = useState()
  const [expOption, setExpOption] = useState([])
  const [postDate, setPostDate] = useState()
  const [inputJob, setInputJob] = useState()
  const [inputData, setInputData] = useState()
  const [inputExp, setInputExp] = useState()
  const [inputDate, setInputDate] = useState()
  const [categoryName, setCategoryName] = useState();
  const [trigger, setTrigger] = useState(false)
  const [ExpStatus, setExpStatus] = useState([])
  const Category = useSelector((s) => s?.customerRedux?.Category_Slug_Data)
  const listAdditionalData = useSelector((s) => s?.customerRedux?.Entry_List_Api_Data)
  console.log(location, "jnbvbfbgffj")
  console.log(ExpStatus, "ndjkfjkd")
  // const Filters = [
  //   {orderjob: false},
  //   {orderloca: false},
  //   {orderyear: false},
  //   {orderdate:false}
  // ]

  //       const CategorieApi=async()=>{
  //         let variable={
  //           "hierarchylevel": 1,  
  //           "categoryGroupId": 15
  //         }
  //         let CategorieList=await fetchGraphQl(GET_POST_CATEGORIES_LIST,variable)
  // console.log(CategorieList,"dksjncskdjvnv")
  //         setCatList(CategorieList?.CategoryList?.categories&&CategorieList?.CategoryList?.categories)
  //       }

  const handleCategory = async () => {
    let cardParams = {
      "entryFilter": {
        "Status": "published",
        "categorySlug": "jobs"
      },
      "AdditionalData": {
        "categories": true,
        "additionalFields": true
      },
    }

    const cardListPage = await fetchGraphQl(GET_JOB_LIST_QUERY, cardParams)

    console.log(cardListPage, "cardListPage")
    console.log(GET_JOB_LIST_QUERY, "cbsjsd")
    // setCardData(transformData(cardListPage));
    setExpStatus(transformData(cardListPage))
    // console.log(transformData(cardListPage)?.experiance, "dnvcndfbdv")
  }
  useEffect(() => {
    handleCategory()
  }, [])
  const transformData = (apiResponse) => {
    return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {
      console.log(entry, "vfdkvfd")
      let transformedEntry = {
        id: entry.id,
        title: entry.title,
        coverImage: entry.coverImage || "",
        channelId: entry.channelId,
        slug: entry.slug,
      };
      entry.additionalFields.fields.forEach((field) => {
        const key = field.fieldName
          .toLowerCase()
          .replace(/\s+/g, "");
        transformedEntry[key] = field.fieldValue?.fieldValue || "";
      });

      return transformedEntry;
    });
  };

  const handleJobName = (e) => {
    if (e != "categorySlug") {
      setJobName(e)
    }
  }

  console.log(ExpStatus, "jdfhjfdf")
  const handleExpYear = (e) => {
    console.log(e, "xvddfvfd")
  
      setExpYear(e?.label)
      // setExpLevel(e?.label)
      // console.log(ExpStatus?.filter((data)=>data?.experiance==experiance?.name),"dbsdbsds")
      // handleFilter()
    
  }
  const handleMonth = (e) => {
    if (e != "datePosted") {
      setPostDate(e)

    }

  }


  const handleFilter = async () => {
    let filterExp = ExpStatus?.filter((data) => data?.experiance == experiance?.name)
    setInputData(location)
    setInputJob(jobName?.label)
    setInputExp(expYear?.label)
    // setInputDate(postDate?.label)
    let variable_list = {
      entryFilter: {
        categorySlug: jobName?.label,
      },
      commonFilter: {
        location: location,
        Experience: expYear,
        posteddate: postDate
      },
      AdditionalData: {
        additionalFields: true,
        categories: true
      },
    };
    if (variable_list) {
      const res = await fetchGraphQl(GET_JOB_LIST_QUERY, variable_list);
      // setSearchKeyword(res?.ChannelEntriesList?.channelEntriesList); // Update state with fetched data
      setList(transformData(res))
      console.log(transformData(res), "ndbcsn")
      // setPostDate(reduxData?.posteddate);
      // setExpYear(filterExp)
      console.log(res, "cbjdchsb")
    }
    //         setInputData(location)
    //         setInputJob(jobName?.label)
    //         setInputExp(expYear?.label)
    //         setInputDate(postDate?.label)
    //         let filterExp=ExpStatus.filter((data)=>data?.id==expYear.value)
    //         if(jobName!=""||location!=""||expYear!=""||postDate!=""){
    //           setTrigger(true)

    //           let variable={
    //             "limit":10,
    //             "offset":0,
    //             "filter": {
    //               "jobTitle":"",
    //               "jobLocation":location,
    //               "categorySlug":jobName?.label,
    //               "keyWord": "",
    //               "datePosted": postDate?.label,
    //               "minimumYears": filterExp?.[0]?.minDate
    //               // "maximumYears": filterExp?.[0]?.maxDate
    //             }
    //           }
    // if(variable){
    //   let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
    //   setList(filterListData?.jobsList?.jobs)
    // }       
    //         }
  }
  useEffect(() => {
    if (jobName && location) {
      handleFilter()
    }
  }, [jobName, location])

  // useEffect(()=>{
  //   if(location){
  //    handleFilter()
  //   }
  // },[])
  const categoryFun = async () => {

    let variable_category = {
      "categoryFilter": {
        "categoryGroupSlug": "jobs",
        "excludeGroup": true,
        "hierarchyLevel": 2

      }
    }
    const jobCategoryApi = await fetchGraphQl(GET_POST_CATEGORY_NAME, variable_category)
    setCatList(jobCategoryApi?.CategoryList?.categorylist)
    console.log(catList, "dhbcsjdfhjsd")
  }
  useEffect(() => {
    categoryFun()
  }, [])


  const handleClear = async () => {
    setTrigger(false)
    setJobName("")
    setLocation("")
    setExpYear("")
    setPostDate("")

    let variables = {
      "limit": 10,
      "offset": 0
    }
    let ListData = await fetchGraphQl(GET_POST_LIST_QUERY, variables)
    setList(ListData?.jobsList?.jobs)
  }


  const handleClose = async (data) => {
    if (data == "Job Category") {
      setJobName("")
      setInputJob("")
      let filterExp = ExpStatus.filter((data) => data?.id == expYear.value)
      let variable = {
        "limit": 10,
        "offset": 0,
        "filter": {
          "jobTitle": "",
          "jobLocation": location,
          // "categoryId": 2,
          "categorySlug": "",
          "keyWord": "",
          "datePosted": postDate?.label,
          "minimumYears": filterExp?.[0]?.minDate
          // "maximumYears": filterExp?.[0]?.maxDate
        }
      }
      let filterListData = await fetchGraphQl(GET_POST_LIST_QUERY, variable)
      setList(filterListData?.jobsList?.jobs)
    }
    else if (data == "") {
      setLocation("")
      setInputData("")

      let filterExp = ExpStatus.filter((data) => data?.id == expYear.value)
      let variable = {
        "limit": 10,
        "offset": 0,
        "filter": {
          "jobTitle": "",
          "jobLocation": "",
          // "categoryId": 2,
          "categorySlug": jobName?.label,
          "keyWord": "",
          "datePosted": postDate?.label,
          "minimumYears": filterExp?.[0]?.minDate
          // "maximumYears": filterExp?.[0]?.maxDate
        }
      }
      let filterListData = await fetchGraphQl(GET_POST_LIST_QUERY, variable)
      setList(filterListData?.jobsList?.jobs)
    }
    else if (data == "Experienced Level") {
      setExpYear("")
      setInputExp("")
      // let filterExp=ExpStatus.filter((data)=>data.name==expYear)
      let variable = {
        "limit": 10,
        "offset": 0,
        "filter": {
          "jobTitle": "",
          "jobLocation": location,
          // "categoryId": 2,
          "categorySlug": jobName?.label,
          "keyWord": "",
          "datePosted": postDate?.label
        }
      }
      let filterListData = await fetchGraphQl(GET_POST_LIST_QUERY, variable)
      setList(filterListData?.jobsList?.jobs)
    }
    else if (data == "Date Posted") {
      setPostDate("")
      setInputDate("")

      let filterExp = ExpStatus.filter((data) => data?.id == expYear.value)
      let variable = {
        "limit": 10,
        "offset": 0,
        "filter": {
          "jobTitle": "",
          "jobLocation": location,
          // "categoryId": 2,
          "categorySlug": jobName?.label,
          "keyWord": "",
          "datePosted": "",
          "minimumYears": filterExp?.[0]?.minDate
          // "maximumYears": filterExp?.[0]?.maxDate
        }
      }

      let filterListData = await fetchGraphQl(GET_POST_LIST_QUERY, variable)
      setList(Category)

    }

  }

  useEffect(() => {
    if (jobName == "" && expYear == "" && postDate == "" && location == "") {
      setTrigger(false)
    }
  }, [jobName, expYear, postDate, location])
  const jobFilterOption = catList?.map((data) => (
    {
      value: data.id,
      label: data.categorySlug
    }
  ))
  console.log(expYear, "fdjdf")
  const expFilterOption = expOption?.map((data) => ({
    value: data?.id,
    label: data?.experiance
  }))
  console.log(expOption, "jvhfbdvhfbf")
  const expOptions = [
    { id: 1, name: "0-1 Years" },
    { id: 2, name: "1-2 Years" },
    { id: 3, name: "2-3 Years" },
    { id: 4, name: "3-4 Years" },
    { id: 5, name: "4-5 Years" },
    { id: 6, name: "5-6 Years" },
    { id: 7, name: "6-7 Years" },
    { id: 8, name: "7-8 Years" },
    { id: 9, name: "8-9 Years" },
    { id: 10, name: "9-10 Years" }
  ]
  const experiance = expOptions?.map((data) => (
    {
      value: data?.id,
      label: data?.name
    }
  ))
  const postedD = [
    { id: 1, name: "This Week", apiName: "" },
    { id: 2, name: "This Month", apiName: "" },
    { id: 3, name: "This Year", apiName: "" },
    { id: 4, name: "Today", apiName: "" },
  ]
  let dateFilterOption = postedD?.map((data) => (
    {
      value: data?.id,
      label: data?.name
    }
  ))
  return (
    <>
      <div className="grid md:grid-cols-5fr grid-cols-2  gap-4 mb-4">
        <Select className='text-sm'
          placeholder="Job Category" options={jobFilterOption} value={jobName} onChange={(e) => handleJobName(e)}>

        </Select>

        <div className='w-full'>
          <input className="h-[38px] rounded-[4px] border-gray-500 border w-full focus-visible:outline-none bg-transparent focus:border-[#2684FF] hover-blue p-3 text-sm font-normal placeholder:text-slate-300" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <Select className='text-sm' placeholder="Experienced Level"
          value={expYear} options={experiance} onChange={(e) => handleExpYear(e)}>

        </Select>

        <Select placeholder="Date Posted" className='text-sm'
          value={postDate} options={dateFilterOption} onChange={(e) => handleMonth(e)}>

        </Select>

        <button className="min-w-[138px] h-[42px] bg-blue-600 text-white rounded text-sm font-medium md:col-auto col-span-2" onClick={handleFilter}>Filter Jobs</button>
      </div>
      <div className="flex justify-between sm:items-center items-end pb-6 border-gray border-b">
        {trigger == true &&
          <div className="flex flex-wrap gap-4">
            {inputJob != undefined && inputJob != "" &&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4 ">
                {inputJob}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={() => handleClose("Job Category")} />
              </div>}
            {inputData != "" &&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputData}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={() => handleClose("")} />
              </div>}

            {inputExp != undefined && inputExp != "" &&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputExp}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={() => handleClose("Experienced Level")} />
              </div>}

            {inputDate != undefined && inputDate != "" &&
              <div className="flex gap-2 p-3 whitespace-nowrap bg-slate-50 border-gray-500 border rounded-md text-sm font-light text-black leading-4">
                {inputDate}
                <img src="/img/cancel.svg" className="cursor-pointer" onClick={() => handleClose("Date Posted")} />
              </div>}

            <button className="text-sm whitespace-nowrap font-light text-black leading-4 p-3 border-gray-500 rounded-md border bg-white" onClick={() => handleClear()}>Clear All</button>
          </div>}

        {pathname == "/" ? <Link href="/list-view" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md ml-auto">
          <img src="/img/list.svg" />
          List View
        </Link> : <Link href="/" className="p-3 flex gap-2 justify-center items-center min-w-[110px] whitespace-nowrap h-[42px] text-blue-600 border-blue-600 border rounded-md ml-auto">
          <img src="/img/title.svg" />
          Tile View
        </Link>}

      </div>
    </>
  )
}

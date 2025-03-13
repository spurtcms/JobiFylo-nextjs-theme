"use client"
import { fetchGraphQl } from '@/api/graphicql'
import { GET_JOB_LIST_QUERY, GET_POST_CATEGORIES_LIST, GET_POST_CATEGORY_NAME } from '@/api/query'
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
  const [expYear, setExpYear] = useState("")
  const [expOption, setExpOption] = useState([])
  const [postDate, setPostDate] = useState("")
  const [inputJob, setInputJob] = useState()
  const [inputLoc, setInputLoc] = useState()
  const [inputExp, setInputExp] = useState()
  const [inputDate, setInputDate] = useState()
  const [categoryName, setCategoryName] = useState();
  const [trigger, setTrigger] = useState(false)
  const [ExpStatus, setExpStatus] = useState([])
  const Category = useSelector((s) => s?.customerRedux?.Category_Slug_Data)
  const listAdditionalData = useSelector((s) => s?.customerRedux?.Entry_List_Api_Data)
  console.log(inputJob, "jnbvbfbgffj")
  console.log(ExpStatus, "ndjkfjkd")

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
    setExpStatus(transformData(cardListPage))
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
      setInputJob(e?.label)
    }
  }
  const handleLocation = (e) => {
    if (e != "location") {
      setLocation(e.target.value)
      setInputLoc(e.target.value)
    }
  }
  const handleExpYear = (e) => {
    console.log(e, "xvddfvfd")
    if (e !== "Experience")
      setExpYear(e)
    setInputExp(e?.label)
  }
  const handleMonth = (e) => {
    if (e != "datePosted") {
      setPostDate(e)
      setInputDate(e?.label)
    }
  }

  const handleFilter = async () => {
    let variable_list = {
      entryFilter: {
        categorySlug: jobName?.label,
      },
      commonFilter: {
        location: location,
        Experience: expYear?.value,
        posteddate: postDate?.label
      },
      AdditionalData: {
        additionalFields: true,
        categories: true
      },
    };
    if (jobName !== "" || location !== "" || expYear !== "" || postDate !== "") {
      const res = await fetchGraphQl(GET_JOB_LIST_QUERY, variable_list);
      setList(transformData(res))
      setJobName("");
      setLocation("");
      setExpYear("");
      setPostDate("");
    }
  }
  // const categoryFun = async () => {

  //   let variable_category = {
  //     "categoryFilter": {
  //       "categoryGroupSlug": "jobs",
  //       "excludeGroup": true,
  //       "hierarchyLevel": 2

  //     }
  //   }
  //   const jobCategoryApi = await fetchGraphQl(GET_POST_CATEGORY_NAME, variable_category)
  //   setCatList(jobCategoryApi?.CategoryList?.categorylist)
  //   console.log(catList, "dhbcsjdfhjsd")
  // }
  // useEffect(() => {
  //   categoryFun()
  // }, [])
  // const handleClear = async () => {
  //   setInputDate("")
  //   setInputExp("")
  //   setInputJob("")
  //   setInputLoc("")

  //   let variables = {
  //     entryFilter: {
  //       categorySlug: "",
  //     },
  //     commonFilter: {
  //       location: "",
  //       Experience: "",
  //       posteddate: ""
  //     },
  //     AdditionalData: {
  //       additionalFields: true,
  //       categories: true
  //     },
  //   }
  //   let ListData = await fetchGraphQl(GET_JOB_LIST_QUERY, variables)
  //   setList(transformData(ListData))
  // }


  // const handleClose = async (data) => {
  //   if (data == inputJob?.label) {
  //     setJobName("")
  //     setInputJob("")
  //   }
  //   else if (data == inputLoc?.data?.target?.value) {
  //     setLocation("")
  //     setInputLoc("")
  //   }
  //   else if (data == inputExp?.label) {
  //     setExpYear("")
  //     setInputExp("")
  //   }

  //   else if (data == inputDate?.label) {
  //     setPostDate("")
  //     setInputDate("")
  //     let variable = {
  //       entryFilter: {
  //         categorySlug: jobName?.label,
  //       },
  //       commonFilter: {
  //         location: location,
  //         Experience: expYear?.value,
  //         posteddate: ""
  //       },
  //       AdditionalData: {
  //         additionalFields: true,
  //         categories: true
  //       },
  //     }
  //     let filterListData = await fetchGraphQl(GET_JOB_LIST_QUERY, variable)
  //     setList(transformData(filterListData))
  //   }
  // }
  const jobFilterOption = catList?.map((data) => (
    {
      value: data.id,
      label: data.categorySlug
    }
  ))
  console.log(expOption, "jvhfbdvhfbf")
  const expOptions = [
    { id: 1, name: "0-1 Years", key: "0-1" },
    { id: 2, name: "1-2 Years", key: "1-2" },
    { id: 3, name: "2-3 Years", key: "2-3" },
    { id: 4, name: "3-4 Years", key: "3-4" },
    { id: 5, name: "4-5 Years", key: "4-5" },
    { id: 6, name: "5-6 Years", key: "5-6" },
    { id: 7, name: "6-7 Years", key: "6-7" },
    { id: 8, name: "7-8 Years", key: "7-8" },
    { id: 9, name: "8-9 Years", key: "8-9" },
    { id: 10, name: "9-10 Years", key: "9-10" }
  ]
  const experiance = expOptions?.map((data) => (
    {
      value: data?.key,
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
          <input className="h-[38px] rounded-[4px] border-gray-500 border w-full focus-visible:outline-none bg-transparent focus:border-[#2684FF] hover-blue p-3 text-sm font-normal placeholder:text-slate-300" placeholder="Location" value={location} onChange={(e) => handleLocation(e)} />
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

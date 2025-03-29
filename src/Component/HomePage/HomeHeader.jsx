"use client"
import { fetchGraphQl } from '@/api/graphicql'
import { GET_JOB_LIST_QUERY } from '@/api/query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CardListViewPage from './CardListPage'
import { useDispatch, useSelector } from 'react-redux'
import { Entry_List_Api_Data, search_Keyword_List, searchApi_List } from '@/StoreConfiguration/slices/customer'
import HomePageLoader from '../skeleton/homePageLoader'


export default function HomeHeader({ setList }) {
  const [jobTitle, setJobTitle] = useState('')
  const [location, setLocation] = useState('')
  const [searchList, setSearchList] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const dispatch = useDispatch();
  const SearchApiList = useSelector((s) => s?.customerRedux?.searchApi_List)
  console.log(SearchApiList, "cbfhbefjehnrfn")
  const handleJobTitle = (e, value) => {
    if (value == "jobTitle") {
      setJobTitle(e)
    }
    else if (value == "jobLocation") {
      setLocation(e)
    }
  }

  const transformData = (apiResponse) => {
    return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {
      console.log(entry, "vfdkvfd")
      let transformedEntry = {
        id: entry?.id,
        title: entry?.title,
        coverImage: entry?.coverImage || "",
        channelId: entry.channelId,
        slug: entry?.slug,
        description: entry?.description,
        categories: entry?.categories?.[0]?.[0]
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
  const handleSearchList = async () => {

    let variable_list = {
      entryFilter: {
        categorySlug: "jobs",
      },
      commonFilter: {
        keyword: jobTitle,
        location: location,

      },
      AdditionalData: {
        additionalFields: true,
        categories: true
      },
    };
    if (jobTitle !== "" || location !== "") {
      const res = await fetchGraphQl(GET_JOB_LIST_QUERY, variable_list);
      // setSearchKeyword(res?.ChannelEntriesList?.channelEntriesList); // Update state with fetched data
      setList(transformData(res));
      dispatch(searchApi_List(transformData(res)))
      // setListData(transformData(res));
      dispatch(search_Keyword_List(res?.ChannelEntriesList?.channelEntriesList));
      // setJobTitle("");
      // setLocation("");
    }
  }

  // const handleSearch=async()=>{
  //   // setJobTitle("")
  //   // setLocation("")
  //   let variable={
  //     "limit":10,
  //     "offset":0,
  //     "filter": {
  //       "jobTitle":jobTitle,
  //       "jobLocation":location

  //     }
  //   }
  //       if(jobTitle&&location){

  //   let filterListData=await fetchGraphQl (GET_POST_LIST_QUERY,variable)
  //   setList(filterListData?.jobsList?.jobs)
  //       }
  // }

  // useEffect(() => {
  //   if (jobTitle && location) {
  //     handleSearchList()
  //   }
  // }, [jobTitle, location])

  const enterKeyEvent = (e) => {
    console.log(e, "eventeee")
    if (e.key == "Enter") {
      if (e.target.value == location) {
        handleSearchList();
      }
    }
    if (e.key == "Enter") {
      if (e.target.value == jobTitle) {
        handleSearchList();
      }
    }
  }

  return (
    <>

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
                <input type="text"
                  className="sm:h-full sm:border-0 border-b border-gray  h-10 py-0 sm:py-7 w-full focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300"
                  placeholder="Search by Job Title/Role"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  onKeyDown={(e) => enterKeyEvent(e)}
                />
                <img src="/img/search.svg" className="absolute top-3 sm:top-[27px] left-6" />
              </div>
              <div className="h-[50px] w-0.5 bg-gray-200 hidden sm:flex"></div>
              <div className="w-full relative">
                <input type="text"
                  className="sm:h-full h-10 py-0 sm:py-7 w-full sm:border-0 border-b border-gray focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => enterKeyEvent(e)}
                />
                <img src="/img/location.svg" className="absolute top-3 sm:top-[27px] left-6" />
              </div>
              <button className="sm:h-full h-10 min-w-[177px] sm:mt-0 mt-3 rounded bg-blue-600 text-white text-base leading-5 font-medium" onClick={handleSearchList}>Search Jobs</button>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        </div>
      </div>


    </>

  )
}
{/* // <div className="bg-blue-50 w-full ">
    //       <div className="max-w-screen-2xl m-auto flex  gap-[130.65px] flex-col lg:flex-row lg:pt-[85px] items-start lg:ps-[120px] lg:pe-[234.5px] lg:pb-[26.89px] md:px-10 md:py-20 px-6 py-10 relative">
    //         <div className="lg:pt-[69px] pt-0">
    //           <h2 className="mb-1.5 sm:text-[64px] text-4xl font-semibold text-black-100 sm:leading-[80px] leading-10">Find your dreamcareer</h2>
    //           <p className="text-gray-500 text-sm leading-4 font-normal">Match with Companies that Share Your Values</p>
    //         </div>
    //         <img src="/img/banner.svg" className="hidden lg:block" />
    //         <div className="lg:px-[120px] max-w-screen-2xl m-auto sm:h-[76px] h-auto absolute  w-full left-0 -bottom-[11rem]  sm:-bottom-16  md:px-10 px-6 mb-6">
    //           <div className="w-full bg-white h-full flex gap-px items-center p-2 rounded-md shadow-500 border border-gray mb-6 flex-col sm:flex-row">

    //             <div className="w-full relative">
    //               <input value={jobTitle} type="text" className="sm:h-full sm:border-0 border-b border-gray  h-10 py-0 sm:py-7 w-full focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Search by Job Title/Role" onChange={(e)=>handleJobTitle(e.target.value,"jobTitle")}/>
    //               <img src="/img/search.svg" className="absolute top-3 sm:top-[27px] left-6" />
    //             </div>
    //             <div className="h-[50px] w-0.5 bg-gray-200 hidden sm:flex"></div>
    //             <div className="w-full relative">
    //               <input value={location} type="text" className="sm:h-full h-10 py-0 sm:py-7 w-full sm:border-0 border-b border-gray focus-visible:outline-none ps-14 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" onChange={(e)=>handleJobTitle(e.target.value,"jobLocation")}/>
    //               <img src="/img/location.svg" className="absolute top-3 sm:top-[27px] left-6" />
    //             </div>
    //             <button className="sm:h-full h-10 min-w-[177px] sm:mt-0 mt-3 rounded bg-blue-600 text-white text-base leading-5 font-medium" onClick={handleSearch}>Search Jobs</button>
    //           </div>
    //           <div className="w-full h-px bg-gray-200"></div>
    //         </div>
    //       </div>
    //     </div> */}


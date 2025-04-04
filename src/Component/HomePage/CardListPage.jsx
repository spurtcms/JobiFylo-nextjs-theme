"use client"
import { fetchGraphQl } from "@/api/graphicql";
import { GET_JOB_LIST_QUERY, GET_POST_JOB_APPLY_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from "@/api/query";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ViewJobPage from "../ViewJob";
import { Category_Slug_Data, Entry_Detail_api_Data_redux, Entry_List_Api_Data, Related_Jobs_redux } from "@/StoreConfiguration/slices/customer";
import HomePageLoader from "../skeleton/homePageLoader";
import { channelName } from "@/api/url";
import ReactPaginate from "react-paginate";
// import { fetchGraphQLDa } from "@/api/clientGraphicql";

export default function CardListViewPage({ params, List, searchStatus }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [cardData, setCardData] = useState([]);
  const [viewJob, setViewJob] = useState("");
  const [loader, setLoader] = useState(false);
  const [offset, setOffset] = useState(0)
  const dispatch = useDispatch();
  console.log(searchStatus, "searchStatus1234")
  // let passParams = cardData.filter((item) => item.title !== params);
  // console.log(cardListPage,"jnksdhskd")
  // const searchData=useSelector((s)=>s.search_Keyword_List)
  const transformData = (apiResponse) => {
    return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {

      let transformedEntry = {
        id: entry?.id,
        title: entry?.title,
        coverImage: entry?.coverImage || "",
        channelId: entry?.channelId,
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

  const cardPageApi = async () => {
    setLoader(true)
    let cardParams = {
      "entryFilter": {
        "Status": "published",
        "categorySlug": "jobs",
        "ChannelName": channelName
      },
      // "commonFilter": {
      //   "limit": 6,
      //   "offset": offset
      // },
      "AdditionalData": {
        "categories": true,
        "additionalFields": true
      },


    }

    const cardListPage = await fetchGraphQl(GET_JOB_LIST_QUERY, cardParams)
    console.log(cardListPage, "cardListPage")
    if (cardListPage) {

      setLoader(false)
    }

    setCardData(transformData(cardListPage));
    dispatch(Entry_List_Api_Data(transformData(cardListPage)))
  }
  useEffect(() => {
    cardPageApi()

  }, [])

  //   useEffect(()=>{
  // setSearchFil(transformData(List))
  //   },[])

  const transformDetailData = (apiResponse) => {


    let detail = apiResponse?.ChannelEntryDetail;

    let transformedEntry = {
      id: detail?.id,
      title: detail?.title,
      coverImage: detail?.coverImage || "",
      channelId: detail?.channelId,
      slug: detail?.slug,
      description: detail?.description,
      ctaLink: detail?.ctaLink,
      categories: detail?.categories?.[0]?.[0]
    };

    detail?.additionalFields?.fields.forEach((field) => {
      const key = field.fieldName
        .toLowerCase()
        .replace(/\s+/g, "");
      transformedEntry[key] = field.fieldValue?.fieldValue || "";
    });

    detail?.categories?.forEach((value) => {



      {
        value?.map((values) => {
          dispatch(Category_Slug_Data(values?.categorySlug))
        })
      }


    })
    return transformedEntry;

  };



  const handleViewJobClick = async (id, slug, channelId) => {
    let variable_slug = { "id": id, "slug": slug, "AdditionalData": { additionalFields: true, categories: true }, "channelId": channelId, };
    const postes = await fetchGraphQl(GET_VIEW_DETAIL_QUERY, variable_slug)
    console.log(postes?.ChannelEntryDetail?.categories?.[0]?.[0]?.categorySlug, "posts")

    setViewJob(transformDetailData(postes));
    dispatch(Related_Jobs_redux(postes?.ChannelEntryDetail?.categories?.[0]?.[0]?.categorySlug))
    dispatch(Entry_Detail_api_Data_redux(transformDetailData(postes)));
    if (!postes) {
      return notFound();
    }
  }
  const handlePageClick = () => {


  }
  return (
    <div>

      {
        searchStatus == true ?
          <>
            {searchStatus == true && List <= 0 ?
              <>
                <div className=" px-5 lg:px-20  py-32 col-span-full grid place-items-center">
                  <div className="flex flex-col items-center max-w-[408px] ">
                    <img src="\img\noData.svg" alt="nodata" className="dark:hidden" />
                    <img
                      src="/img/nodatafilter.svg"
                      alt="nodata"
                    />
                    <h1 className=" text-2xl leading-6 font-medium text-black  mb-3 mt-6 text-center dark:dark:text-light-1">
                      No Listing Yet !
                    </h1>
                  </div>
                </div>

              </> : <>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
                  {
                    List?.map((data, index) => (
                      <div className="border-gray-300 border rounded p-4 hover:shadow-lg flex flex-col" key={index}>
                        {console.log(data, "nckdsjfcnskjw")}
                        <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal w-fit">{data?.categories?.categoryName}</span>
                        <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2 " onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                        <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">{data?.jobcode}</span></p>
                        <div className="flex flex-col gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <img src="/img/exp.svg" />
                            <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">{data?.experiance}</span></p>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/img/Time.svg" />
                            <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type:  <span className="text-gray-500 font-light">{data?.jobtype}</span></p>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/img/job-type.svg" />
                            <p className="text-sm font-normal leading-4 text-blue-600 ">Location:  <span className="text-gray-500 font-light">{data?.location}</span></p>
                          </div>
                        </div>
                        <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: {data?.posteddate}</h5>
                        <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center mt-auto" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>View Job</Link>
                      </div>
                    ))
                  }
                </div>


              </>

            }

          </> : <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
              {console.log(List, "jhcdfjd")}
              {
                loader ?
                  (
                    arr?.map((index, id) => (
                      <HomePageLoader key={id} />
                    ))
                  )
                  :
                  (
                    <>
                      {
                        cardData && cardData?.map((data, index) => (
                          <div className="border-gray-300 border rounded p-4 hover:shadow-lg flex flex-col" key={index}>
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal w-fit">{data?.categories?.categoryName}</span>
                            <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2  " onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                            <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">{data?.jobcode}</span></p>
                            <div className="flex flex-col gap-4 mb-6">
                              <div className="flex items-center gap-2">
                                <img src="/img/exp.svg" />
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">{data?.experiance}</span></p>
                              </div>
                              <div className="flex items-center gap-2">
                                <img src="/img/Time.svg" />
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type:  <span className="text-gray-500 font-light">{data?.jobtype}</span></p>
                              </div>
                              <div className="flex items-center gap-2">
                                <img src="/img/job-type.svg" />
                                <p className="text-sm font-normal leading-4 text-blue-600 ">Location:  <span className="text-gray-500 font-light">{data?.location}</span></p>
                              </div>
                            </div>
                            <h5 className="text-gray-500 text-xs font-light mb-4 ">Posted Date: {data?.posteddate}</h5>
                            <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center mt-auto" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>View Job</Link>
                          </div>
                        ))
                      }
                    </>
                  )
              }

              {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                // pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              /> */}
            </div>
          </>

      }


      {/* {
        List == "" ? <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
            {console.log(List, "jhcdfjd")}
            {
              loader ?
                (
                  arr?.map((index, id) => (
                    <HomePageLoader key={id} />
                  ))
                )
                :
                (
                  <>
                    {
                      cardData && cardData?.map((data, index) => (
                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg flex flex-col" key={index}>
                          <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal w-fit">{data?.categories?.categoryName}</span>
                          <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2  " onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                          <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">{data?.jobcode}</span></p>
                          <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-center gap-2">
                              <img src="/img/exp.svg" />
                              <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">{data?.experiance}</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src="/img/Time.svg" />
                              <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type:  <span className="text-gray-500 font-light">{data?.jobtype}</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src="/img/job-type.svg" />
                              <p className="text-sm font-normal leading-4 text-blue-600 ">Location:  <span className="text-gray-500 font-light">{data?.location}</span></p>
                            </div>
                          </div>
                          <h5 className="text-gray-500 text-xs font-light mb-4 ">Posted Date: {data?.posteddate}</h5>
                          <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center mt-auto" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>View Job</Link>
                        </div>
                      ))
                    }
                  </>
                )
            }
          </div>
        </> : <>
          {
            List?.length > 0 ? <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
                {
                  List?.map((data, index) => (
                    <div className="border-gray-300 border rounded p-4 hover:shadow-lg flex flex-col" key={index}>
                      {console.log(data, "nckdsjfcnskjw")}
                      <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal w-fit">{data?.categories?.categoryName}</span>
                      <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2 " onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                      <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">{data?.jobcode}</span></p>
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <img src="/img/exp.svg" />
                          <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: <span className="text-gray-500 font-light">{data?.experiance}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/img/Time.svg" />
                          <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type:  <span className="text-gray-500 font-light">{data?.jobtype}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src="/img/job-type.svg" />
                          <p className="text-sm font-normal leading-4 text-blue-600 ">Location:  <span className="text-gray-500 font-light">{data?.location}</span></p>
                        </div>
                      </div>
                      <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: {data?.posteddate}</h5>
                      <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center mt-auto" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>View Job</Link>
                    </div>
                  ))
                }
              </div>
            </> : <>
              <h1>No data found</h1>
            </>
          }
        </>
      } */}
    </div >
  )
}
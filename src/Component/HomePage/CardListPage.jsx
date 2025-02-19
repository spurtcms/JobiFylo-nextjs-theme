"use client"
import { fetchGraphQl } from "@/api/graphicql";
import { GET_JOB_LIST_QUERY, GET_POST_JOB_APPLY_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from "@/api/query";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ViewJobPage from "../ViewJob";
import { Entry_Detail_api_Data_redux } from "@/StoreConfiguration/slices/customer";
// import { fetchGraphQLDa } from "@/api/clientGraphicql";

export default async function CardListViewPage({ params }) {

  const [cardData, setCardData] = useState("");
  const [viewJob, setViewJob] = useState("");
  const dispatch = useDispatch();
  // let passParams = cardData.filter((item) => item.title !== params);
  // console.log(cardListPage,"jnksdhskd")
  const searchData=useSelector((s)=>s.search_Keyword_List)
  console.log(searchData,"cjjbdfhsfhskjf")
  const transformData = (apiResponse) => {
    return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {
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

  const cardPageApi = async () => {
    let cardParams = {
      "entryFilter": {
        "Status": "published",
        "categorySlug": "jobs"
      },
      "AdditionalData": {
        "categories": true
      },

      "AdditionalData": {
        "additionalFields": true

      }
    }

    const cardListPage = await fetchGraphQl(GET_JOB_LIST_QUERY, cardParams)
    console.log(cardListPage, "cardListPage")
    console.log(GET_JOB_LIST_QUERY,"cbsjsd")
    setCardData(transformData(cardListPage));

  }
  useEffect(() => {
    cardPageApi()

  }, [])

  const transformDetailData = (apiResponse) => {
    // return apiResponse?.ChannelEntryDetail?.map((entry) => {
    let detail = apiResponse?.ChannelEntryDetail;
    let transformedEntry = {
      id: detail?.id,
      title: detail?.title,
      coverImage: detail?.coverImage || "",
      channelId: detail?.channelId,
      slug: detail?.slug,
      description: detail?.description,
     
    };
console.log(detail?.categorySlug,"hgfvhgjb")
console.log(detail?.categories.forEach((fields)=>{
  const key =fields?.categorySlug
  .toLowerCase()
  .replace(/\s+/g, "");
transformedEntry[key] = fields.categorySlug?.categorySlug || "";
}),"cjskdfsdfskjdf")
    detail?.additionalFields?.fields.forEach((field) => {
      const key = field.fieldName
        .toLowerCase()
        .replace(/\s+/g, "");
      transformedEntry[key] = field.fieldValue?.fieldValue || "";
    });
    console.log( detail?.categories,"jcnvdjfhsjfh")
    console.log(transformedEntry, "cjhbcjshncjs")
    return transformedEntry;
    // });
  };



  const handleViewJobClick = async (id, slug, channelId) => {
    console.log(id, "ncsdjfhsudfjn")
    let variable_slug = { "id": id, "slug": slug, "AdditionalData": { additionalFields: true }, "channelId": channelId, };
    const postes = await fetchGraphQl(GET_VIEW_DETAIL_QUERY, variable_slug)
    console.log(postes, "chennelEntryDetail")

    setViewJob(transformDetailData(postes));
    dispatch(Entry_Detail_api_Data_redux(transformDetailData(postes)));
    console.log(transformDetailData(postes), "cskjdksjdns")
    if (!postes) {
      return notFound();
    }
  }

  console.log(viewJob, "kjdskjcndv")

  return (

    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10">
        {
          cardData && cardData?.map((data, index) => (
            <div className="border-gray-300 border rounded p-4 hover:shadow-lg" key={index}>
              {/* {console.log( data?.additionalFields?.fields,"nckdsjfcnskjw")} */}
              <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.keyresponsibilities}</span>
              <Link href="javascript:void(0)" className="block text-black text-2xl leading-8 font-normal my-2">{data?.title}</Link>
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
              <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>View Job</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
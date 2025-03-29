"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import HomeHeader from './HomeHeader';
import FilterJob from './FilterJob';
import DOMPurify from 'dompurify';
import { fetchGraphQl } from '@/api/graphicql';
import { GET_VIEW_DETAIL_QUERY } from '@/api/query';
import { Entry_Detail_api_Data_redux, List_Detail_api_Data_redux } from '@/StoreConfiguration/slices/customer';
import ListPageLoader from '../skeleton/listPageLoader';

export default function ListView({ listData, setListData }) {
    const [listViewData, setListViewData] = useState([]);
    const reduxData = useSelector((s) => s?.customerRedux?.Entry_List_Api_Data)
    const [loader, setLoader] = useState(false);
    const [viewJob, setViewJob] = useState({})
    const dispatch = useDispatch();
    console.log(listData, "djnvdj")
    const arr = [1, 2, 3, 4, 5, 6];
    useEffect(() => {
        setLoader(true)
        setListViewData(reduxData)
        if (listViewData) {
            setLoader(false);
        }
    }, [])
    // const sanitizeHTML = (html) => {
    //     const sanitized = DOMPurify.sanitize(html, {
    //         FORBID_TAGS: ['img'], // Remove <h1> and <img> tags
    //         FORBID_ATTR: ['style'], // Remove inline styles for consistency
    //     });
    //     // Remove first <img> tag found in the sanitized HTML
    //     return sanitized
    //         .replace(/<br>/g, ' ') // Replace <br> with spaces
    //         .replace(/<div class="card[^"]*"(.*?)<\/div>/g, '') // Remove specific <div> tags
    //         .replace(/<h1[^>]*>.*?<\/h1>/, "") // Remove the first <h1> tag and its content
    //         .replace(/<img[^>]*>/, ""); // Remove the first <img> tag, regardless of where it is
    // };
    const sanitizeHTML = (html) => {
        const sanitized = DOMPurify.sanitize(html, {
            // FORBID_TAGS: ['h1', 'img'], // Remove <h1> and <img> tags
            FORBID_ATTR: ['style'], // Remove inline styles for consistency
        });
        // Remove first <img> tag found in the sanitized HTML
        return sanitized
            .replace(/<br\s*\/?>/g, " ") // Replace <br> tags with spaces
            .replace(/<div className="card[^"]*"(.*?)<\/div>/g, '') // Remove specific <div> tags
            .replace(/<img[^>]*>/g, "") // Remove all <img> tags
            .replace(/<h1[^>]*>.*?<\/h1>/, "") // Remove the first <h1> tag and its content
            .replace(/p-\[24px_60px_10px\]/g, "") // Remove specific styles
            .replace(/<\/?[^>]+(>|$)/g, "") // Remove all remaining HTML tags
            .split(/\s+/) // Split text into words
            .slice(0, 32) // Limit to the first 35 words
            .join(" ") // Join the words back into a string
            .concat("...") // Add ellipsis if text is truncated
    };
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
        console.log(detail, "cjhvndjsfn")

        detail?.categories?.forEach((value) => {
            console.log(value, "jncsbdj")


            {
                value?.map((values) => {
                    // dispatch(Category_Slug_Data(values?.categorySlug))
                    console.log(values?.categorySlug, "djfncnsjnhfb")


                })
            }


        })
        return transformedEntry;

    };

    const handleViewJobClick = async (id, slug, channelId) => {
        console.log(id, "ncsdjfhsudfjn")
        let variable_slug = { "id": id, "slug": slug, "AdditionalData": { additionalFields: true, categories: true }, "channelId": channelId, };
        const postes = await fetchGraphQl(GET_VIEW_DETAIL_QUERY, variable_slug)
        console.log(postes, "chennelEntryDetail")

        setViewJob(transformDetailData(postes));

        dispatch(Entry_Detail_api_Data_redux(transformDetailData(postes)));
        console.log(transformDetailData(postes), "cskjdksjdns")
        if (!postes) {
            return notFound();
        }
    }
    return (
        <>
            <HomeHeader setList={setListData} />
            <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
                <FilterJob setList={setListData} />
            </div>

            <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
                {
                    listData == "" ?
                        <>
                            {
                                loader ?
                                    (arr?.map(() => (
                                        <ListPageLoader />
                                    )))

                                    : <>
                                        {
                                            listViewData?.map((data, index) => (
                                                <div className="flex flex-col gap-6 mt-6" key={index}>
                                                    <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                                                        <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.categories?.categoryName}</span>
                                                        <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                                            <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                                                            <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">{data?.jobcode}</span></p>
                                                        </div>
                                                        <div className="flex gap-4 mb-6 flex-wrap">
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/exp.svg" />
                                                                <p className="text-sm  leading-4  text-gray-500 font-light">{data?.experiance}</p>
                                                            </div>
                                                            <div className="w-0.5 h-4 bg-gray-200"></div>
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/Time.svg" />
                                                                <p className="text-sm  leading-4 text-gray-500 font-light">{data?.jobtype}</p>
                                                            </div>
                                                            <div className="w-0.5 h-4 bg-gray-200"></div>
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/job-type.svg" />
                                                                <p className="text-sm  leading-4 text-gray-500 font-light">{data?.location}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3 mb-4 ">
                                                            <div
                                                                className="pr-[12px] max-[700px]:pr-0 line-clamp-2 text-gray-500"
                                                                // style={{ color: 'black' }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: sanitizeHTML(data?.description)
                                                                }}
                                                            >
                                                            </div>
                                                        </div>
                                                        {/* <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p> */}
                                                        <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                                            <h5 className="text-gray-500 text-xs font-light">Posted Date: {data?.posteddate}</h5>
                                                            <Link href={`/view-job/${data?.slug}`} className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)} >View Job</Link>
                                                        </div>
                                                    </div>


                                                </div>
                                            ))
                                        }

                                    </>
                            }
                        </> : <>

                            {
                                listData?.length ?
                                    <>
                                        {
                                            listData?.map((data, index) => (

                                                <div className="flex flex-col gap-6 mt-6" key={index}>
                                                    <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                                                        <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{data?.categories?.categoryName}</span>
                                                        <div className="mb-4 mt-2 flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
                                                            <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                                                            <p className="text-sm font-normal leading-4 text-blue-600 ">Job code: <span className="text-gray-500 font-light">{data?.jobcode}</span></p>
                                                        </div>
                                                        <div className="flex gap-4 mb-6 flex-wrap">
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/exp.svg" />
                                                                <p className="text-sm  leading-4  text-gray-500 font-light">{data?.experiance}</p>
                                                            </div>
                                                            <div className="w-0.5 h-4 bg-gray-200"></div>
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/Time.svg" />
                                                                <p className="text-sm  leading-4 text-gray-500 font-light">{data?.jobtype}</p>
                                                            </div>
                                                            <div className="w-0.5 h-4 bg-gray-200"></div>
                                                            <div className="flex items-center gap-2">
                                                                <img src="/img/job-type.svg" />
                                                                <p className="text-sm  leading-4 text-gray-500 font-light">{data?.location}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3 mb-4 ">
                                                            <div
                                                                className="pr-[12px] max-[700px]:pr-0 line-clamp-2 text-gray-500"
                                                                // style={{ color: 'black' }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: sanitizeHTML(data?.description)
                                                                }}
                                                            >
                                                            </div>
                                                        </div>
                                                        {/* <p className="text-sm font-normal leading-4 text-blue-600 mb-6">Skill Required: <span className="text-gray-500">Solution Architect Project Role Description: Own the overall solution blueprint and roadmap, work closely with clients to articulate business problems and into translate them into an appropriate solution design. Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them wasn't  into Must have skills: Solution Architecture work closely with clients to articulate business problems and translate them into...</span> </p> */}
                                                        <div className="flex justify-between sm:items-center items-start gap-4 flex-col sm:flex-row">
                                                            <h5 className="text-gray-500 text-xs font-light">Posted Date: {data?.posteddate}</h5>
                                                            <Link href={`/view-job/${data?.slug}`} className="min-w-full sm:min-w-[352px] h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)} >View Job</Link>
                                                        </div>
                                                    </div>


                                                </div>


                                            ))
                                        }

                                    </> :
                                    <>

                                        <h1>No Data Found</h1>

                                    </>
                            }

                        </>
                }


            </div>
        </>
    )
}

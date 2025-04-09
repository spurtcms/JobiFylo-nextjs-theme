"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TilteView from '../HomePage/TilteView';
import ViewJobsSkeleton from '@/utilities/Skeleton/ViewJobsSkeleton';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import { GET_JOB_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from '@/api/query';
import { fetchGraphQl } from '@/api/graphicql';
import { channelName, form_Base_url } from '@/api/url';
import { Entry_Detail_api_Data_redux, Related_Detail_api_Data_redux } from '@/StoreConfiguration/slices/customer';
export default function ViewJobServer({ ListData, token, params, viewJobApi }) {
    const [relatedList, setRelatedList] = useState([])
    const Category = useSelector((s) => s?.customerRedux?.Category_Slug_Data)
    const [viewJob, setViewJob] = useState({})
    const DetailData = useSelector((s) => s?.customerRedux?.Entry_Detail_api_Data_redux);
    const RelatedDataSlug = useSelector((s) => s?.customerRedux?.Related_Jobs_redux);
    console.log(RelatedDataSlug, "slugSlugSlug")
    const ListDetailData = useSelector((s) => s?.customerRedux?.List_Detail_api_Data_redux);
    const dispatch = useDispatch()

    const transformData = (apiResponse) => {
        return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {
            console.log(entry, "vfdkvfd")
            let transformedEntry = {
                id: entry?.id,
                title: entry?.title,
                coverImage: entry?.coverImage || "",
                channelId: entry?.channelId,
                slug: entry?.slug,
                categories: entry?.categories?.[0]?.[0],
                count:apiResponse?.ChannelEntriesList?.count
            };
            entry.additionalFields.fields.forEach((field) => {
                const key = field.fieldName
                    .toLowerCase()
                    .replace(/\s+/g, "");
                transformedEntry[key] = field.fieldValue?.fieldValue || "";
            });

            console.log(transformedEntry, "dfbdf")
            return transformedEntry;
        });
    };

    useEffect(() => {
        const relatedJobs = async () => {

            let relatedValues = {
                "entryFilter": {
                    "Status": "published",
                    "categorySlug": RelatedDataSlug,
                    "ChannelName": channelName
                },
                "AdditionalData": {
                    "categories": true,
                    "additionalFields": true
                },

            }
            const RelatedPageApi = await fetchGraphQLDa(GET_JOB_LIST_QUERY, relatedValues)
            setRelatedList(transformData(RelatedPageApi))
        }
        relatedJobs()
    }, [])

    const sanitizeHTML = (html) => {
        const sanitized = DOMPurify.sanitize(html, {
            // FORBID_TAGS: ['h1', 'img'], // Remove <h1> and <img> tags
            FORBID_ATTR: ['style'], // Remove inline styles for consistency
        });
        // Remove first <img> tag found in the sanitized HTML
        return sanitized
            .replace(/<br>/g, ' ') // Replace <br> with spaces
            .replace(/<div class="card[^"]*"(.*?)<\/div>/g, '') // Remove specific <div> tags
            .replace(/<h1[^>]*>.*?<\/h1>/, "") // Remove the first <h1> tag and its content
            .replace(/<img[^>]*>/, ""); // Remove the first <img> tag, regardless of where it is
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
            <main className="min-h-screen max-w-screen-2xl m-auto md:py-8 lg:px-[120px] md:px-10 p-6">
                <Link href='/' className="flex gap-1 items-center text-gray-500 text-xs font-light leading-4"> <img src="/img/left-arrow.svg" /> Back </Link>
                {
                    DetailData ? <>
                        <div className="mt-8">
                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal">{DetailData?.categories?.categoryName}</span>
                            <h2 className="mt-2 mb-4 sm:text-4xl sm:leading-[45px] font-normal text-blue-600 text-3xl">{DetailData?.title}</h2>
                            <div className="flex gap-6 mb-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <img src="/img/exp.svg" />
                                    <p className="text-sm  leading-4  text-gray-500 font-light">{DetailData?.experiance}</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/Time.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.jobtype}</p>
                                </div>
                                <div className="w-0.5 h-4 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <img src="/img/job-type.svg" />
                                    <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.location}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center pb-6 border-b border-gray mb-6">
                                <Link href={`${form_Base_url}${DetailData?.ctaLink}?id=${DetailData?.id}`} target='_blank' className="w-auto p-4 h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center">Apply Now</Link>
                                {/* <Link href="shareJob" className="w-auto p-4 h-11 bg-slate-50 text-blue-600 border border-gray-500 text-base font-normal rounded flex justify-center items-center">Share Job</Link> */}
                            </div>
                            <div className="pb-6 border-b border-gray mb-6">
                                <h2 className="text-2xl font-medium leading-[30px] mb-4 text-black">Job Description </h2>
                                <div className="flex flex-col gap-3 mb-4">
                                    <div
                                        className="pr-[12px] max-[700px]:pr-0 "
                                        style={{ color: 'black' }}
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHTML(DetailData?.description)
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-medium leading-[30px]  text-black">Related Jobs</h2>
                                <Link href="/" className="flex items-center gap-2 text-xs font-light text-blue-600"> View All <img src="/img/right-arrow.svg" /> </Link>
                            </div>


                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10" >
                                {
                                    relatedList?.map((data, index) => (
                                        <div className="border-gray-300 border rounded p-4 hover:shadow-lg flex flex-col" key={index}>
                                            <span className="px-2.5 py-1 rounded-3xl bg-blue-100 text-black text-xs font-normal w-fit">{data?.categories?.categoryName}</span>
                                            <Link href={`/view-job/${data?.slug}`} className="block text-black text-2xl leading-8 font-normal my-2" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)}>{data?.title}</Link>
                                            <p className="text-sm font-light leading-4 text-blue-600 mb-4">Job code: <span className="text-gray-500">{data?.jobcode}</span></p>
                                            <div className="flex flex-col gap-4 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <img src="/img/exp.svg" />
                                                    <p className="text-sm font-normal leading-4 text-blue-600 ">Experience: {data?.experiance}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <img src="/img/Time.svg" />
                                                    <p className="text-sm font-normal leading-4 text-blue-600 ">Job Type: {data?.jobtype} </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <img src="/img/job-type.svg" />
                                                    <p className="text-sm font-normal leading-4 text-blue-600 ">Location: {data?.location} </p>
                                                </div>
                                            </div>
                                            <h5 className="text-gray-500 text-xs font-light mb-4">Posted Date: {data?.posteddate}</h5>
                                            <Link href={`/view-job/${data?.slug}`} className="w-full h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center mt-auto" onClick={() => handleViewJobClick(data?.id, data?.slug, data?.channelId)} >View Job</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </>
                        : <></>
                }

            </main >
        </>
    )
}

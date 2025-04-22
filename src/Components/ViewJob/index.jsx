import ViewJobServer from "./ViewJobServer";
import { fetchGraphQl } from "@/api/graphicql";
import { GET_JOB_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from "@/api/query";
import { channelName } from "@/api/url";

export default async function ViewJobPage({ params }) {
  let cardParams = {
    entryFilter: {
      Status: "published",
      categorySlug: "jobs",
      ChannelName: channelName,
    },
    AdditionalData: {
      categories: true,
      additionalFields: true,
    },
  };

  const cardListPage = await fetchGraphQl(GET_JOB_LIST_QUERY, cardParams);
  let variable_slug = {
    id: cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.id,
    channelId:
      cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.channelId,
    slug: cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.slug,
    AdditionalData: { categories: true, additionalFields: true },
  };
  const viewJobApi = await fetchGraphQl(GET_VIEW_DETAIL_QUERY, variable_slug);

  // let relatedValues = {
  //     "entryFilter": {
  //         "Status": "published",
  //         "categorySlug": viewJobApi?.ChannelEntryDetail?.categories?.[0]?.[0]?.categorySlug,
  //         "ChannelName": channelName
  //     },
  //     "AdditionalData": {
  //         "categories": true,
  //         "additionalFields": true
  //     },

  // }
  // const RelatedPageApi = await fetchGraphQLDa(GET_JOB_LIST_QUERY, relatedValues)
  // console.log(viewJobApi?.ChannelEntryDetail?.categories?.categorySlug, "jhbdfshbfhsj")

  return (
    <>
      <ViewJobServer
        params={params}
        cardListPage={cardListPage}
        viewJobApi={viewJobApi}
      />
    </>
  );
}

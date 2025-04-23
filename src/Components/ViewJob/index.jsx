import ViewJobServer from "./ViewJobServer";
import { fetchGraphQl } from "@/api/graphicql";
import { GET_JOB_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from "@/api/query";
import { channelName } from "@/api/url";
import Header from "../Header";

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

  return (
    <>
      <Header />
      <ViewJobServer
        params={params}
        cardListPage={cardListPage}
        viewJobApi={viewJobApi}
      />
    </>
  );
}

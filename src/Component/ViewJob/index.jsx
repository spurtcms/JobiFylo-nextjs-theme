import ViewJobServer from './ViewJobServer'
import { Token, fetchGraphQLDa } from '@/api/clientGraphicql';
import { GET_JOB_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from '@/api/query';
import { channelName } from '@/api/url';


export default async function ViewJobPage({ params }) {
    const token = await Token()



    let cardParams = {
        "entryFilter": {
            "Status": "published",
            "categorySlug": "jobs",
            "ChannelName": channelName
        },
        "AdditionalData": {
            "categories": true,
            "additionalFields": true
        },


    }

    const cardListPage = await fetchGraphQLDa(GET_JOB_LIST_QUERY, cardParams)



    console.log(cardListPage?.ChannelEntriesList?.channelEntriesList?.id, "setCardData")
    let variable_slug = { "id": cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.id, "channelId": cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.channelId, "slug": cardListPage?.ChannelEntriesList?.channelEntriesList[0]?.slug, "AdditionalData": { "categories": true, "additionalFields": true } };

    const viewJobApi = await fetchGraphQLDa(GET_VIEW_DETAIL_QUERY, variable_slug)

    let relatedValues = {
        "entryFilter": {
            "Status": "published",
            "categorySlug": viewJobApi?.ChannelEntryDetail?.categories?.[0]?.[0]?.categorySlug,
            "ChannelName": channelName
        },
        "AdditionalData": {
            "categories": true,
            "additionalFields": true
        },

    }
    const RelatedPageApi = await fetchGraphQLDa(GET_JOB_LIST_QUERY, relatedValues)
    console.log(RelatedPageApi, "jhbdfshbfhsj")

    return (
        <>
            <ViewJobServer token={token} params={params} cardListPage={cardListPage} RelatedPageApi={RelatedPageApi} viewJobApi={viewJobApi} />
        </>
    )
}

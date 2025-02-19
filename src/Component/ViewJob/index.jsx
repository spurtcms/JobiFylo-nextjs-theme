import ViewJobServer from './ViewJobServer'
import { Token, fetchGraphQLDa } from '@/api/clientGraphicql';
import { GET_JOB_LIST_QUERY, GET_VIEW_DETAIL_QUERY } from '@/api/query';

export default async function ViewJobPage({ params }) {
    const token = await Token()
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

    const cardListPage = await fetchGraphQLDa(GET_JOB_LIST_QUERY, cardParams)
    console.log(cardListPage, "cardListPage")
    console.log(cardListPage?.ChannelEntriesList?.channelEntriesList, "setCardData")
    let variable_slug = { "id": "id", "channelId": "channelId", "slug": params?.slug, "AdditionalData": {  "categories": true,"additionalFields": true } };
    console.log(params?.slug, "bjvdfhdhf")
    const viewJobApi = await fetchGraphQLDa(GET_VIEW_DETAIL_QUERY, variable_slug)

const relatedCardList=await fetchGraphQLDa(GET_JOB_LIST_QUERY)
console.log(relatedCardList,"jbchdnsj")


    return (
        <>
            <ViewJobServer token={token} params={params} cardListPage={cardListPage} viewJobApi={viewJobApi} relatedCardList={relatedCardList} />
        </>
    )
}

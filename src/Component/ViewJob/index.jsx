import React from 'react'
import ViewJobServer from './ViewJobServer'
import { fetchGraphQl } from '@/api/graphicql';
import { GET_POST_DETAIL_QUERY } from '@/api/query';


export default async function ViewJobPage({params}) {
  let variables={
    "jobSlug":params
}
let DetailData=await fetchGraphQl(GET_POST_DETAIL_QUERY,variables)

  return (
  <>
  <ViewJobServer DetailData={DetailData?.jobDetail}/>
  </>
  )
}

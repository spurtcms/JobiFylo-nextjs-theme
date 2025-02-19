import React, { Suspense } from 'react'
import HomePageAction from './HomePageAction'
import { fetchGraphQl } from '@/api/graphicql'
import { GET_JOB_LIST_QUERY, GET_POST_LIST_QUERY } from '@/api/query'

export default async function Home() {
  let variables={
      "limit":10,
      "offset":0 
  }
  let ListData=await fetchGraphQl(GET_POST_LIST_QUERY,variables)
  console.log(GET_POST_LIST_QUERY,"xjkksdsnxsdf")


  return (
   <>
          <Suspense fallback={null}>
           <HomePageAction ListData={ListData?.jobsList?.jobs}/>
         </Suspense>

   </>
  )
}

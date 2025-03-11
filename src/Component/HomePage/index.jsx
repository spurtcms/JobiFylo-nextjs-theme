import React, { Suspense } from 'react'
import HomePageAction from './HomePageAction'
import { fetchGraphQl } from '@/api/graphicql'


export default async function Home() {
  // let variables={
  //     "limit":10,
  //     "offset":0 
  // }
  // let ListData=await fetchGraphQl(GET_POST_LIST_QUERy,variables)
  // console.log(GET_POST_LIST_QUERY,"xjkksdsnxsdf")


  return (
    <>
      <Suspense fallback={null}>
        <HomePageAction />
      </Suspense>

    </>
  )
}

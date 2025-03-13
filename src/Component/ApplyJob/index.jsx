import React from 'react'
import ApplyJobServer from './ApplyJobServer'
import { fetchGraphQl } from '@/api/graphicql'
import { GET_POST_DETAIL_QUERY } from '@/api/query'

export default async function ApplyJob({ params }) {
  //   let variables={
  //     "jobSlug":params
  // }
  // let DetailData=await fetchGraphQl(GET_POST_DETAIL_QUERY,variables)
  return (
    <>
      <ApplyJobServer />
    </>
  )
}


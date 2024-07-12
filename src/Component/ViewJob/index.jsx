
import ViewJobServer from './ViewJobServer'
import { fetchGraphQl } from '@/api/graphicql';
import { GET_POST_DETAIL_QUERY, GET_POST_LIST_QUERY } from '@/api/query';
import { Token, fetchGraphQLDa } from '@/api/clientGraphicql';



export default async function ViewJobPage({params}) {
  let variables={
    "jobSlug":params
}
let DetailData=await fetchGraphQl(GET_POST_DETAIL_QUERY,variables)
let varible={
  "limit":10,
  "offset":0 
}
let ListData=await fetchGraphQLDa(GET_POST_LIST_QUERY,varible)

const token=await Token()
  return (
  <>
        
  <ViewJobServer DetailData={DetailData?.jobDetail} ListData={ListData?.jobsList?.jobs} token={token} params={params}/>
  
  </>
  )
}

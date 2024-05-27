"use server"

import { cookies } from "next/headers";
import { apiinstance } from "./interceptor";



export async function fetchGraphQLDa (GET_POSTS_QUERY_LIST,varPos) {

    try {
      
      const entries = await apiinstance("",{
        method: 'POST',
        body: JSON.stringify({
          query: GET_POSTS_QUERY_LIST,
          variables: varPos
        })
      });
     
     return entries?.data
     
    } catch (error) {
      throw error;
    }
  }

  export async function BearerToken(data) {
    cookies().set("Token",data) 
}
  

  export async function Token() {
    const cookiesdata = cookies()
    const token = cookiesdata.get("Token")
    if(token){
        return token?.value
    }
  
}
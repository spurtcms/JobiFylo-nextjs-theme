'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export async function Redirect(data){
    redirect(data)
}

export async function RemoveToken(){
    cookies().delete("Token")
    redirect("/")
    
}

export async function TokenGetValue(){
   const tokenValue=cookies().get('Token')
   return tokenValue&&tokenValue?.value;
}
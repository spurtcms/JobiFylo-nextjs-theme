'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function Rememberme(data) {
   let sess= cookies().get("remeber-key")
if(data){
}else{
    if(sess?.value==="remeber"){
    }
    if(sess?.value==="not-rember"){
        cookies().set("remeber-key","")
        redirect("/auth/login")
    }
}
    
}

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
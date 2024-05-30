
import Login from '@/Component/Auth/Login'
import React from 'react'
import { cookies } from "next/headers";

export const metadata = {
    title: "Login"
  };

export default function page() {
    let tokenCheck=cookies().get("Token")
    return (
        <>
        <Login/>
        </>
    )
}

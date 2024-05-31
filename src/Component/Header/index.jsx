import React from 'react'
import HeaderServerActions from './HeaderServerActions'
import { cookies } from 'next/headers'

export default function Header() {
  let tokenCheck=cookies().get("Token")
  return (
    <HeaderServerActions tokenCheck={tokenCheck?.value}/>
  )
}

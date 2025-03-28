"use client"
import React, { useState } from 'react'
import Home from '@/Component/HomePage'
import ListView from '@/Component/HomePage/ListView'
import HomeHeader from '@/Component/HomePage/HomeHeader'
import FilterJob from '@/Component/HomePage/FilterJob'

export default function Page() {
    const [listData,setListData]=useState([]);

    return (
        <>
        {/* <HomeHeader/> */}
        {/* <FilterJob/> */}
       <ListView  listData={listData} setListData={setListData}/>
        </>
    )
}

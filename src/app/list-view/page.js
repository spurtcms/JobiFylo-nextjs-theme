import React from 'react'
import Home from '@/Component/HomePage'
import ListView from '@/Component/HomePage/ListView'
import HomeHeader from '@/Component/HomePage/HomeHeader'
import FilterJob from '@/Component/HomePage/FilterJob'

export default function page() {
    
    return (
        <>
        <HomeHeader/>
        <FilterJob/>
       <ListView/>
        </>
    )
}

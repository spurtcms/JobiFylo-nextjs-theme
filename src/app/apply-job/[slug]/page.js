import ApplyJob from '@/Component/ApplyJob'
import React from 'react'


export default function applyJob({params}) {
    return (
        <>
          <ApplyJob params={params?.slug}/>
           
        </>
    )
}

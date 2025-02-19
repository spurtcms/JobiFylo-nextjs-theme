"use client"
import { usePathname } from 'next/navigation';
import FilterJob from './FilterJob';
import HomeHeader from './HomeHeader';
import ListView from './ListView';
import TilteView from './TilteView';
import { useState } from 'react';
import CardListViewPage from './CardListPage';

export default function HomePageAction({ListData,cardListPage}) {

  const[List,setList]=useState(ListData)
  const[jobListPage,setJobListPage]=useState(cardListPage)
  const pathname=usePathname()

console.log(jobListPage,"cnkdjshfjsf")


  
  return (
   <>
   <main className="min-h-screen">
       
        <HomeHeader setList={setList}/>
        <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
         {/* <FilterJob pathname={pathname} setList={setList} /> */}
          
         {pathname=="/"?<TilteView ListData={List}/>:<ListView ListData={List}/>}
          
         <CardListViewPage cardListPage={cardListPage}/>
         
        </div>
      </main>
   </>
  )
}

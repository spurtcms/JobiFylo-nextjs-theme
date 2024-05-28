"use client"
import { usePathname } from 'next/navigation';
import FilterJob from './FilterJob';
import HomeHeader from './HomeHeader';
import ListView from './ListView';
import TilteView from './TilteView';

export default function HomePageAction({ListData}) {
  console.log(ListData,'ListDsaddata')
  const pathname=usePathname()
  return (
   <>
   <main className="min-h-screen">
       
        <HomeHeader />
        <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
         <FilterJob pathname={pathname}/>
          
         {pathname=="/"?<TilteView ListData={ListData}/>:<ListView ListData={ListData}/>}
          
         
        </div>
      </main>
   </>
  )
}

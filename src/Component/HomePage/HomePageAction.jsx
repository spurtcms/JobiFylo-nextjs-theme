"use client"
import { usePathname } from 'next/navigation';
import FilterJob from './FilterJob';
import HomeHeader from './HomeHeader';
import ListView from './ListView';
import TilteView from './TilteView';
import { Suspense, useState } from 'react';
import CardListViewPage from './CardListPage';

export default function HomePageAction({ ListData, cardListPage }) {

  const [List, setList] = useState([])
  const [loaderSearch, setLoaderSearch] = useState(false)
  const [searchStatus, setSearchStatus] = useState(false);
  const pathname = usePathname()
  console.log(List, "nbdjkfvnkdf")
  return (
    <>
      <main className="min-h-screen">

        <HomeHeader setList={setList} setSearchStatus={setSearchStatus} setLoaderSearch={setLoaderSearch} />
        <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
          <FilterJob pathname={pathname} setList={setList} setSearchStatus={setSearchStatus} setLoaderSearch={setLoaderSearch} />

          {/* {pathname == "/" ? <TilteView ListData={List} /> : <ListView ListData={List} setList={setList} />} */}

          {pathname == "/" ? <Suspense fallback={<div>Loading...</div>}>
            <CardListViewPage cardListPage={cardListPage} List={List} searchStatus={searchStatus} loaderSearch={loaderSearch} />
          </Suspense> : <ListView />
          }


        </div>
      </main>
    </>
  )
}

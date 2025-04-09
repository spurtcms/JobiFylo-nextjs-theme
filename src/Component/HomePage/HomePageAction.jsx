"use client"
import { usePathname } from 'next/navigation';
import FilterJob from './FilterJob';
import HomeHeader from './HomeHeader';
import ListView from './ListView';
import { Suspense, useEffect, useState } from 'react';
import CardListViewPage from './CardListPage';
import { useSelector } from 'react-redux';
import { GET_JOB_LIST_QUERY } from '@/api/query';
import { fetchGraphQl } from '@/api/graphicql';
import { channelName } from '@/api/url';
import ReactPaginate from 'react-paginate';

export default function HomePageAction({ ListData, cardListPage }) {

  const [List, setList] = useState([])
  const [loaderSearch, setLoaderSearch] = useState(false)
  const [searchStatus, setSearchStatus] = useState(false);
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(false)
  const pathname = usePathname()
  const viewPage = useSelector((s) => s?.customerRedux?.Homepage_View_redux)
   const pagination_Num = 1;
  const pageCount = Math.ceil(cardData?.[0]?.count / limit);
 const transformData = (apiResponse) => {
    return apiResponse?.ChannelEntriesList?.channelEntriesList?.map((entry) => {
      let transformedEntry = {
        id: entry?.id,
        title: entry?.title,
        coverImage: entry?.coverImage || "",
        channelId: entry?.channelId,
        slug: entry?.slug,
        description: entry?.description,
        categories: entry?.categories?.[0]?.[0],
        count: apiResponse?.ChannelEntriesList?.count,
      };

      entry.additionalFields.fields.forEach((field) => {
        const key = field.fieldName.toLowerCase().replace(/\s+/g, "");
        transformedEntry[key] = field.fieldValue?.fieldValue || "";
      });

      return transformedEntry;
    });
  };

 const cardPageApi = async () => {
    setLoader(true);
    let cardParams = {
      entryFilter: {
        Status: "published",
        categorySlug: "jobs",
        ChannelName: channelName,
      },
      commonFilter: {
        limit: limit,
        offset: offset,
      },
      AdditionalData: {
        categories: true,
        additionalFields: true,
      },
    };

    const cardListPage = await fetchGraphQl(GET_JOB_LIST_QUERY, cardParams);
    console.log(cardListPage?.ChannelEntriesList?.count, "cardListPage");
    if (cardListPage) {
      setLoader(false);
    }

    setCardData(transformData(cardListPage));
    // dispatch(Entry_List_Api_Data(transformData(cardListPage)));
  };
  useEffect(() => {
    cardPageApi();
  }, [offset, limit]);

    const handlePageClick = (event) => {
    console.log(event, "selectedPage");
    let off = (event.selected * limit) % cardData?.[0]?.count;
    setOffset(off);
  };
  
  return (
    <>
      <main className="min-h-screen">
        <HomeHeader setCardData={setCardData} limit={limit} offset={offset} setLoader={setLoader} />
        <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
          <FilterJob pathname={pathname} setCardData={setCardData} limit={limit} offset={offset} setLoader={setLoader} />
          {/* {pathname == "/" ? <TilteView ListData={List} /> : <ListView ListData={List} setList={setList} />} */}
          {viewPage == "tile-view"
            ?
            <Suspense fallback={<div>Loading...</div>}>
              <CardListViewPage cardData={cardData} setCardData={setCardData} limit={limit} offset={offset} setOffset={setOffset} setLoader={setLoader} loader={loader} />
            </Suspense>
            :
            <ListView  cardData={cardData} setCardData={setCardData} loader={loader}setLoader={setLoader}  />

          }
               </div>
 {    viewPage=="tile-view"  ? 
 <>
       {
        cardData?.[0]?.count>=6?
        <>
 <ReactPaginate
            previousLabel={<img src="/img/icon-arrow-left-sharp-pag.svg" />}
            nextLabel={<img src="/img/icon-arrow-right-sharp-pag.svg" />}
            pageCount={pageCount}
            // marginPagesDisplayed={3}
            // pageRangeDisplayed={6}
            // onClick={() => setButtonLoader(true)}
            initialPage={pagination_Num ? pagination_Num - 1 : 0}
            onPageChange={handlePageClick}
            containerClassName={"pagination flexx "}
            previousLinkClassName={"pagination-new-anchor"}
            nextLinkClassName={"pagination-new-anchor"}
            disabledClassName={"paginations__link--disabled"}
            pageLinkClassName={"pagination-new-anchor"}
            activeClassName={"pagination-new-active"}
          />
        </>:<></>
       }
        </>:<>

          {
        cardData?.[0]?.count>=6?
        <>
 <ReactPaginate
            previousLabel={<img src="/img/icon-arrow-left-sharp-pag.svg" />}
            nextLabel={<img src="/img/icon-arrow-right-sharp-pag.svg" />}
            pageCount={pageCount}
            // marginPagesDisplayed={3}
            // pageRangeDisplayed={6}
            // onClick={() => setButtonLoader(true)}
            initialPage={pagination_Num ? pagination_Num - 1 : 0}
            onPageChange={handlePageClick}
            containerClassName={"pagination flexx "}
            previousLinkClassName={"pagination-new-anchor"}
            nextLinkClassName={"pagination-new-anchor"}
            disabledClassName={"paginations__link--disabled"}
            pageLinkClassName={"pagination-new-anchor"}
            activeClassName={"pagination-new-active"}
          />
        </>:<></>
       }
        
        </>
      }

   
      </main>
    </>
  )
}
{/* <main className="min-h-screen">
  <HomeHeader setList={setList} setSearchStatus={setSearchStatus} setLoaderSearch={setLoaderSearch} limitList={limit} offsetList={offset} />
  <div className="lg:px-[120px] max-w-screen-2xl m-auto md:px-10 px-6 mt-[11rem] sm:mt-20">
    <FilterJob pathname={pathname} setList={setList} setSearchStatus={setSearchStatus} setLoaderSearch={setLoaderSearch} limitList={limit} offsetList={offset} />
    {/* {pathname == "/" ? <TilteView ListData={List} /> : <ListView ListData={List} setList={setList} />} */}
//     {pathname == "/" ? <Suspense fallback={<div>Loading...</div>}>
//       <CardListViewPage cardListPage={cardListPage} List={List} searchStatus={searchStatus} loaderSearch={loaderSearch} setOffsetList={setOffset} limitList={limit} />
//     </Suspense> : <ListView />
//     }
//   </div>
// </main> */}
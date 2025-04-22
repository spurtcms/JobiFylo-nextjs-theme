import React, { Suspense } from "react";
import HomePageAction from "./HomePageAction";

export default async function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <HomePageAction />
      </Suspense>
    </>
  );
}

import ViewJob from "@/Components/ViewJob";
import React from "react";

export default function page({ params }) {
  return (
    <>
      <ViewJob params={params?.slug} />
    </>
  );
}

import ChangePassword from "@/Components/ChangePassword";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ChangePassword />
      </Suspense>
    </div>
  );
};

export default Page;

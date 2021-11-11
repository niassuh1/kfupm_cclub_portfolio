import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-auto mb-auto px-11 h-[100%]">
      <Image
        src="/images/not-found.svg"
        layout="intrinsic"
        width={600}
        height={600}
        alt="page not found"
      />
      <h1 className="text-3xl font-bold">Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;

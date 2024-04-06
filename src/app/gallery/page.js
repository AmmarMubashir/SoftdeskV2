import React from "react";
import GallerySlider from "../components/Gallery/GallerySlider";
import GalleryImgBox from "../components/Gallery/GalleryImgBox";

const page = () => {
  return (
    <>
      <div className="w-full h-[1100px]  lg:h-[550px]  overflow-hidden bg-[#191A19] flex flex-col lg:flex-row relative z-9">
        <GallerySlider />
        <GalleryImgBox />
      </div>
    </>
  );
};

export default page;

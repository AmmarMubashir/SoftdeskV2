import React from "react";
import GallerySlider from "../components/Gallery/GallerySlider";
import Image from "next/image";

import img3 from "../assets/gallery/img3.png";

const page = () => {
  return (
    <>
      <div className="w-full h-[1100px]  lg:h-[550px]  overflow-hidden bg-[#191A19] flex flex-col lg:flex-row relative z-9">
        <div className="div-3 h-[1100px]  lg:h-[500px] flex justify-center items-center">
          <GallerySlider />
        </div>
        <div className="div-4 h-[1100px]  lg:h-[500px] flex justify-center ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 md:w-[90%]  lg:w-[70%] h-screen mt-[10px]  p-6  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            <div className="bg-red-500">
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
            <div className="bg-red-500">
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
            <div>
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
            <div>
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
            <div>
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
            <div>
              <Image
                src={img3}
                height={140}
                width={180}
                alt="img1"
                className="w-[100%] h-[100%] bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

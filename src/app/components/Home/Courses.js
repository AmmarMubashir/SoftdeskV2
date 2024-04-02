import React from "react";
import Slider from "./Slider";

const Courses = () => {
  return (
    <div className="min-h-[80vh] w-full ">
      <div className="flex flex-col gap-9 w-[90%] mx-auto">
        <div className="mx-auto text-center w-[60%]">
          <h2 className=" text-[1.3rem] sm:text-[1.8rem] font-bold  text-black">
            Courses <span className="text-[#FF7420]">Tech Spectrum</span>
          </h2>
          <p className="h-[2px] w-[50px] bg-[#FF7420] mx-auto translate-x-[-80px] sm:translate-x-[-140px] translate-y-[10px]"></p>
        </div>
        <div>
          <p className="text-[#667085]">
            {"Let's"} explore our courses class, the knowledge provided will
            definitely be useful for you.
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Courses;

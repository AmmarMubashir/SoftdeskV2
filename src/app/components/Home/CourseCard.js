import Image from "next/image";
import React from "react";
import design from "../../assets/home/CourseCard/design.png";
import { HiDocumentDownload } from "react-icons/hi";
import { Avatar, Rating } from "@mui/material";

const CourseCard = ({ data }) => {
  const {
    courseImageUrl,
    courseTitle,
    courseHeading,
    courseDocumentUrl,
    courseDescription,
    courseHeadName,
    courseHeadSession,
    courseHeadImgUrl,
  } = data;
  return (
    <div className="flex justify-between">
      <div className="w-[320px] xl:w-[310px] flex flex-col gap-3 bg-white p-3 rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <div className="">
          <Image
            src={courseImageUrl}
            height={250}
            width={300}
            alt="design"
            className="mx-auto h-[200px] w-[300px]"
          />
        </div>
        <div>
          <span className="text-[#1A906B]">{courseTitle}</span>
        </div>
        <div className="flex justify-between items-center">
          <h3>{courseHeading}</h3>
          <button className="h-[3rem] w-[3rem]">
            <a href={courseDocumentUrl} download>
              <HiDocumentDownload className="h-[3rem] w-[3rem] text-[#00CE62]" />
            </a>
          </button>
        </div>
        <div>
          <p className="text-[#667085] text-sm h-[100px]">
            {courseDescription}
          </p>
        </div>
        <div className="flex items-center">
          <span>4.2</span>
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            size="medium"
          />
          <span>(125)</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {/* <Avatar
              alt="Remy Sharp"
              src={courseHeadImgUrl}
              sx={{ width: 50, height: 50 }}
            /> */}
            <Image
              src={courseHeadImgUrl}
              height={50}
              width={50}
              alt="Course Head"
              className="rounded-full h-[50px] w-[50px]"
            />
            <div className="flex flex-col gap-0">
              <h3 className="text-sm">{courseHeadName}</h3>
              <p className="text-[#667085] text-sm">{courseHeadSession}</p>
            </div>
          </div>
          <button className="bg-[#FF7420] text-white px-1 h-[40px] rounded">
            <a href={courseDocumentUrl} download>
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

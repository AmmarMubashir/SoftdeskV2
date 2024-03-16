import React from "react";
import Image from "next/image";
import { EventButton } from "../shared/button";
import { FaArrowRight } from "react-icons/fa6";
import pic1 from "../../assets/events/hero-pic-1.png";
import pic2 from "../../assets/events/hero-pic-2.png";
import pic3 from "../../assets/events/hero-pic-3.png";
import heroBg from "../../assets/events/hero-event.png";
import orangeSvg from "../../assets/events/svg-circle.png";
import mouse from "../../assets/events/mouse.png";
import triangle from "../../assets/events/triangle.png";
import clock from "../../assets/events/clock.png";
const Hero = () => {
  return (
    <>
      <section className="w-[90%] mx-auto    sm:h-[calc(100vh-60px)] wraper ">
        <div className="flex flex-col xl:flex-row  ">
          <div className=" h-full w-full px-8  py-12 bg-secondary flex-[2]">
            <div className="flex flex-col">
              <h2 className="text-primary font-bold text-[40px]   ">
                DEEPFAKE WORKSHOP
              </h2>
              <h3 className="text-white font-semibold text-[34px]">
                <span className="text-primary">WEEKEND UX </span>providing the
                best opportunities to the students around the glob.
              </h3>
              <p className="text-white text-[16px] font-light">
                Weekend UX, is a UI/UX Design Academy in Delhi involved in User
                Experience and User Interface Training and Consulting. It was
                started in 2023 and passionate towards User Interface Design/
                User Experience Design, Human Computer Interaction Design.
                Humanoid is gushing towards competence to acquire knowledge and
                have a wide understanding towards the sphere through the
                foremost courses in the area of UI/UX Design, by strengthening
                up your skills, for your golden future
              </p>
              <EventButton
                styles={"mt-2  justify-center  flex items-center gap-1"}
              >
                <span>Images</span>
                <FaArrowRight className="text-white" />
              </EventButton>
            </div>
          </div>
          <div className="w-full div-2-events bg-secondary flex-[0.5] -z-30 hidden xl:flex "></div>
          <div className="w-full flex-[2] relative items-center ">
            <div className="flex flex-col px-12 py-10 relative items-center  xl:items-start">
              <div className="relative w-[250px] sm:w-[300px] h-[180px] rounded-md">
                <Image
                  src={pic1}
                  alt="pic1"
                  fill
                  className="object-cover w-full h-full rounded-md z-30"
                />
              </div>
              <div className="relative w-[250px] sm:w-[300px] h-[180px] -translate-y-5 -translate-x-40 rounded-md">
                <Image
                  src={pic2}
                  alt="pic1"
                  fill
                  className="object-cover w-full h-full rounded-md z-20"
                />
              </div>
              {/*  Absolute pic secondary */}
              <div className="relative w-[250px] sm:w-[330px] h-[180px] -translate-y-[280px] -translate-x-[120px]  -z-10">
                <Image
                  src={heroBg}
                  alt="pic1"
                  className="object-cover  w-full h-full  rounded-t-2xl"
                  fill
                />
              </div>

              <div className="relative  w-[250px] sm:w-[300px] h-[180px] rounded-md -translate-y-[280px] translate-x-20 ">
                <Image
                  src={pic3}
                  alt="pic1"
                  fill
                  className="object-cover w-full h-full rounded-md z-30"
                />
              </div>
              <Image
                src={mouse}
                alt="pic1"
                className="absolute top-60 right-[290px] z-100"
                height={30}
                width={30}
              />
            </div>
            {/*  Abdolute small images */}
            <Image
              src={orangeSvg}
              alt="pic1"
              className="absolute top-0 right-0"
              height={100}
              width={100}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

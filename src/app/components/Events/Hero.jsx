import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-[90%] mx-auto    h-[calc(100vh-60px)] wraper ">
      <div className="flex  ">
        <div className=" h-full w-full pl-4 sm:px-8  py-12 bg-secondary ">
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
              started in 2023 and passionate towards User Interface Design/ User
              Experience Design, Human Computer Interaction Design. Humanoid is
              gushing towards competence to acquire knowledge and have a wide
              understanding towards the sphere through the foremost courses in
              the area of UI/UX Design, by strengthening up your skills, for
              your golden future
            </p>
          </div>
        </div>
        <div className="w-full div-2-events bg-secondary "></div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import community from "../../assets/home/community.png";
import code from "../../assets/home/code.png";
import events from "../../assets/home/events.png";

const About = () => {
  return (
    <div className="pt-6 flex flex-col gap-[50px]">
      <h2 className="font-bold text-[2.1rem] text-center">
        About <span className="text-[#FF7420]">Softdesk</span>
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#FFBF22] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={community} height={100} width={100} alt="community" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              We foster a vibrant community of passionate and curious students.
              We share a common love for technology, innovation, and creativity.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#19D6D4] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={code} height={100} width={100} alt="code" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              Whether you&apos;re into coding, content creation, design, or
              marketing, there&apos;s a spot for you. Our events cover diverse
              interests and skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#FF8155] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={events} height={100} width={100} alt="events" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              Join us for coding challenges, hackathons, workshops, and guest
              speaker events. Our activities are designed to inspire, challenge,
              and nurture your talents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

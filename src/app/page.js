import Image from "next/image";
import Navbar from "../components/layout/Navbar.js";
import softdesk_advisor from "../assets/advisor.png";
import advisor_bg from "../assets/advisor_bg.png";
import vp_hero from "../assets/vp_hero.png";
import president_hero from "../assets/president_hero.png";
import community from "../assets/community.png";
import code from "../assets/code.png";
import events from "../assets/events.png";
import ellipse78 from "../assets/Ellipse78.png";
import ellipse79 from "../assets/Ellipse79.png";
import ellipse80 from "../assets/Ellipse80.png";
import president from "../assets/president.png";
import vice_president from "../assets/vice_president.png";
import joint_secretary from "../assets/joint_secretary.png";
import general_secretary from "../assets/general_secretary.png";
import top_lead_icon from "../assets/top_lead_icon.png";
import secretary_icon from "../assets/secretary_icon.png";
import it_head from "../assets/it_head.png";
import head_inner_icon from "../assets/head_inner_icon.png";
import head_outer_icon from "../assets/head_outer_icon.png";
import management from "../assets/management.png";

// import { HiUserGroup } from "react-icons/hi";
// import { HiMiniCodeBracket } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="flex">
        <div className="custom-clip-path min-h-[100vh] w-[70%] pt-[120px]">
          <div className="flex justify-between p-9">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg w-[60%]">
                <p>👋 Welcome to the Softdesk</p>
              </div>
              <div>
                <h1 className="text-[3rem] text-white font-bold">
                  Work the <span className="text-[#FF7420]">way</span> that{" "}
                  <br />
                  works for you
                </h1>
                <p className="text-white text-[1.3rem] w-[55%] font-normal">
                  In the dynamic landscape of progress, vision serves as the
                  guiding beacon, propelling change and inspiring empathy.
                </p>
              </div>
              <div>
                <button className="bg-[#FF7420] px-6 text-xl rounded-xl h-[50px] text-white">
                  Join Softdesk
                </button>
              </div>
            </div>
            <div className="">
              <Image
                src={softdesk_advisor}
                height={100}
                width={100}
                alt="Softdesk advisor"
              />
            </div>
          </div>
        </div>
        <div className="w-[30%] min-h-[100vh] bg-red-400 ">
          {" "}
          <h1>Right</h1>
        </div>
      </div> */}

      <div className="wraper">
        <div className="div-1">
          <div className="flex justify-between pl-[10px] sm:pl-[70px] pt-[50px] md:pt-[60px]">
            <div className="w-full md:w-[90%] lg:w-[70%] flex flex-col gap-4">
              <p className=" text-sm sm:text-lg p-2 bg-white text-black rounded-lg w-[120%] sm:w-[60%] relative z-10  md:w-[80%] ">
                👋 Welcome to the Softdesk
              </p>
              <h1 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] text-white font-bold translate-y-[-10px] sm:translate-y-0">
                Works the <span className="text-[#FF7420]">way</span> that{" "}
                <br /> works for you
              </h1>
              <p className="text-white w-[100%] sm:w-[75%]">
                In the dynamic landscape of progress, vision serves as the
                guiding beacon, propelling change and inspiring empathy.
              </p>
              <button className="bg-[#FF7420] w-[140px] text-white px-3 rounded-xl h-[40px]">
                Join Softdesk
              </button>
            </div>
            <div>
              <div className="p-2 rounded-full absolute sm:translate-x-[-20px] translate-y-[60px] sm:translate-y-[120px] md:translate-y-0">
                <Image
                  src={advisor_bg}
                  height={170}
                  width={170}
                  alt="advisor_bg"
                  className="rounded-full"
                />
                <Image
                  src={softdesk_advisor}
                  height={120}
                  width={120}
                  alt="Softdesk Advisor"
                  className="rounded-full absolute top-7 left-7"
                />
                <p className="p-1 bg-white rounded-full absolute top-[120px] left-[-30px]">
                  Dr. Ali Javed
                </p>
                <div className="bg-white rounded-lg hidden md:flex flex-col gap-3 w-[270px] lg:w-[350px] p-3 translate-x-[-80px] shadow-2xl ">
                  <div className="flex justify-between items-center">
                    <p className="text-[#4B55B7]">Dr. Ali Javed</p>
                    <p className="bg-[#397907] p-2 rounded-lg">Advisor</p>
                  </div>
                  <div>
                    <p>
                      Where innovation meets passion, and dreams become reality.
                      Connect, learn, and achieve greatness with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="flex flex-col gap-[150px] lg:gap-6 ">
            <div className="w-[80%] mx-auto">
              <div className="hidden md:flex justify-end">
                <Image src={vp_hero} height={100} width={100} alt="vp_hero" />
              </div>
              <div className="w-[80%] hidden lg:flex flex-col gap-2 bg-white shadow-lg h-[120px]">
                <div className="flex justify-between items-center">
                  <p className="text-[#6C71A1]">Tech Spectrum</p>
                  <p className="bg-[#FF7420] px-2 rounded-lg">Done</p>
                </div>
                <p className="font-bold">Technological diversity spectrum.</p>
              </div>
            </div>
            <div className="flex justify-end pt-[90px] md:pt-5 pr-7 ">
              <Image
                src={president_hero}
                height={150}
                width={150}
                alt="President hero"
                className="absolute translate-y-[80px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About softdesk */}

      <div className="min-h-[80vh] pt-6 flex flex-col gap-[50px]">
        <h2 className="font-bold text-[2.1rem] text-center">
          About <span className="text-[#FF7420]">Softdesk</span>
        </h2>
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          <div className="flex flex-col gap-7 text-center">
            <div className="p-4 bg-[#FFBF22] w-[70px] flex justify-center items-center rounded-xl mx-auto">
              {/* <HiUserGroup className=" h-[30px] w-[30px]" /> */}
              <Image src={community} height={100} width={100} alt="community" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Passionate Learners</h2>
              <p>
                We foster a vibrant community of passionate and curious
                students. We share a common love for technology, innovation, and
                creativity.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 text-center">
            <div className="p-4 bg-[#19D6D4] w-[70px] flex justify-center items-center rounded-xl mx-auto">
              {/* <HiUserGroup className=" h-[30px] w-[30px]" /> */}
              <Image src={code} height={100} width={100} alt="code" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Passionate Learners</h2>
              <p>
                Whether you're into coding, content creation, design, or
                marketing, there's a spot for you. Our events cover diverse
                interests and skills.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 text-center">
            <div className="p-4 bg-[#FF8155] w-[70px] flex justify-center items-center rounded-xl mx-auto">
              {/* <HiUserGroup className=" h-[30px] w-[30px]" /> */}
              <Image src={events} height={100} width={100} alt="events" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Passionate Learners</h2>
              <p>
                Join us for coding challenges, hackathons, workshops, and guest
                speaker events. Our activities are designed to inspire,
                challenge, and nurture your talents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the cabinet */}
      <div className="min-h-[100vh] pt-6">
        <h2 className="font-bold text-[2.1rem] text-center">
          Meet the <span className="text-[#FF7420]">Cabinet</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]  items-center ">
          <div>
            <div className=" flex justify-center items-center translate-y-[110px] sm:translate-y-[200px] md:translate-y-0 w-[270px] sm:w-[450px] mx-auto">
              <Image
                src={ellipse78}
                height={150}
                width={150}
                alt="ellipse 78"
                className="absolute w-[120px] sm:w-[140px]"
              />
              <Image
                src={ellipse79}
                height={250}
                width={250}
                alt="ellipse 79"
                className="absolute w-[200px] sm:w-[250px]"
              />
              <Image
                src={ellipse80}
                height={350}
                width={350}
                alt="ellipse 80"
                className="absolute w-[300px] sm:w-[350px]"
              />
              <Image
                src={secretary_icon}
                height={45}
                width={45}
                alt="Secretary icon"
                className="absolute translate-x-[70px] translate-y-[-115px] sm:translate-x-[70px] sm:translate-y-[-160px]"
              />
              <Image
                src={president}
                height={110}
                width={110}
                alt="president"
                className="absolute w-[75px] sm:w-[80px]"
              />
              <div className="bg-white z-[10] absolute translate-x-[-70px] translate-y-[-10px]">
                <small className="text-[#096946] text-[8px] font-bold">
                  President
                </small>
                <p className="text-[#2F4BDF] text-[8px] font-bold">
                  MUBASHIR UR REHMAN
                </p>
              </div>
              <Image
                src={vice_president}
                height={80}
                width={80}
                alt="vice_president"
                className="absolute w-[55px] sm:w-[80px] translate-x-[-30px] translate-y-[90px] sm:translate-x-[-30px] sm:translate-y-[120px] z-[10] bg-white"
              />
              <div className="bg-white z-[10] absolute translate-x-[50px] translate-y-[90px] sm:translate-x-[50px] sm:translate-y-[110px]">
                <small className="text-[#096946] text-[8px] font-bold">
                  Vice. President
                </small>
                <p className="text-[#2F4BDF] text-[8px] font-bold">
                  MUHAMMAD MAAZ KHALID
                </p>
              </div>
              <Image
                src={joint_secretary}
                height={80}
                width={80}
                alt="joint_secretary"
                className="absolute w-[55px] sm:w-[80px] translate-x-[-120px] translate-y-[-80px] sm:translate-x-[-170px] sm:translate-y-[-80px] bg-white rounded-full"
              />

              <div className="bg-white z-[10] absolute translate-x-[-60px] translate-y-[-90px] sm:translate-x-[-100px] sm:translate-y-[-100px]">
                <small className="text-[#096946] text-[8px] font-bold">
                  Joint Secretary
                </small>
                <p className="text-[#2F4BDF] text-[8px] font-bold">
                  MARYAM SHEHZAD
                </p>
              </div>
              <Image
                src={general_secretary}
                height={80}
                width={80}
                alt="general_secretary"
                className="absolute w-[55px] sm:w-[80px] translate-x-[140px] translate-y-[-30px] sm:translate-x-[180px] sm:translate-y-[-40px] bg-white"
              />
              <div className="bg-white z-[10] absolute translate-x-[90px] translate-y-[-30px] sm:translate-x-[120px] sm:translate-y-[-60px]">
                <small className="text-[#096946] text-[8px] font-bold">
                  General Secretary
                </small>
                <p className="text-[#2F4BDF] text-[8px] font-bold">
                  ALI HAIDER
                </p>
              </div>
              <div className="bg-white z-[10] absolute flex justify-center items-center translate-x-[-120px] translate-y-[60px] sm:translate-x-[-140px] sm:translate-y-[80px]">
                <Image
                  src={top_lead_icon}
                  height={30}
                  width={30}
                  alt="Top lead icon"
                />
                <h2 className="text-[#2F4BDF] text-[8px]">Top Leads Heads</h2>
              </div>
            </div>
          </div>
          <div className="w-[80%] sm:w-[70%] mx-auto flex flex-col gap-3 translate-y-[160px] sm:translate-y-[300px] md:translate-y-0">
            <h2 className="text-[1.8rem] font-bold sm:w-[90%] text-center sm:text-left">
              Manage everything in one workspace
            </h2>
            <div className="h-[2px] w-[50px] bg-[#FF7420]"></div>
            <p className="text-[#575757]">
              Planning, tracking and delivering your team&rsquo;s best work has
              never been easier. An integrated workspace that&rsquo;s simple to
              use, TeamFlow lets you spend less time managing your work and more
              time actually doing it.
            </p>
          </div>
        </div>
      </div>

      {/* Connect with Heads */}

      <div className="min-h-[100vh] bg-[#191A19] translate-y-[110px] sm:translate-y-[250px] md:translate-y-0 p-4 flex flex-col gap-[70px]">
        <div className="mx-auto text-center w-[60%]">
          <h2 className=" text-[1.3rem] sm:text-[1.8rem] font-bold  text-white">
            Connect with <span className="text-[#FF7420]">Heads</span>
          </h2>
          <p className="h-[2px] w-[50px] bg-[#FF7420] mx-auto translate-x-[-80px] sm:translate-x-[-110px] translate-y-[10px]"></p>
        </div>
        <div className="flex flex-col  sm:gap-[50px]">
          <div className="sm:flex  justify-between w-[90%] mx-auto p-4">
            <div className="flex md:justify-center items-center gap-7 sm:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={it_head}
                  height={120}
                  width={120}
                  alt="IT head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
            <div className="flex justify-end md:justify-center items-center gap-7 md:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={management}
                  height={120}
                  width={120}
                  alt="Management head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
          </div>

          <div className="w-[90%]  mx-auto p-4 ">
            <div className="flex justify-start sm:justify-center items-center gap-7 sm:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={it_head}
                  height={120}
                  width={120}
                  alt="IT head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-between w-[90%] mx-auto p-4 ">
            <div className="flex justify-end md:justify-center items-center gap-7 sm:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={it_head}
                  height={120}
                  width={120}
                  alt="IT head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
            <div className="flex  justify-start md:justify-center items-center gap-7 md:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={management}
                  height={120}
                  width={120}
                  alt="Management head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto p-4">
            <div className="flex justify-end sm:justify-center items-center gap-7 sm:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={it_head}
                  height={120}
                  width={120}
                  alt="IT head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
          </div>

          <div className="sm:flex justify-between w-[90%] mx-auto p-4">
            <div className="flex md:justify-center items-center gap-7 sm:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={it_head}
                  height={120}
                  width={120}
                  alt="IT head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
            <div className="flex justify-end md:justify-center items-center gap-7 md:gap-11">
              <div className="flex justify-center items-center">
                <Image
                  src={management}
                  height={120}
                  width={120}
                  alt="Management head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_inner_icon}
                  height={120}
                  width={120}
                  alt="IT Head"
                  className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
                />
                <Image
                  src={head_outer_icon}
                  height={150}
                  width={150}
                  alt="IT Head"
                  className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
                />
              </div>
              <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
                <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                  IT Head
                </h2>
                <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                  FAHEEM ABBAS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

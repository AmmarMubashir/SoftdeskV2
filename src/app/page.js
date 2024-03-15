import Image from "next/image";
import Navbar from "../components/layout/Navbar.js";
import softdesk_advisor from "../assets/advisor.png";
import advisor_bg from "../assets/advisor_bg.png";
import vp_hero from "../assets/vp_hero.png";
import president_hero from "../assets/president_hero.png";

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

      <div class="wraper">
        <div class="div-1">
          {/* <div className=" h-[80px] lg:h-[120px]"></div> */}
          <div class="flex justify-between pl-[10px] sm:pl-[70px] pt-[50px] md:pt-[60px]">
            <div className="w-full md:w-[90%] lg:w-[70%] flex flex-col gap-4">
              <p className=" text-sm sm:text-lg p-2 bg-white text-black rounded-lg w-[120%] sm:w-[60%] relative z-10  md:w-[80%] ">
                👋 Welcome to the Softdesk
              </p>
              {/* <p className="pl-[20px] pt-[50px] sm:pt-[-100px]  md:p-2 ml-[145px] sm:ml-[130px] md:ml-0 text-sm sm:text-lg  md:bg-white text-black rounded-lg w-[60%] sm:w-[60%]  md:w-[80%] md:translate-x-0 translate-x-[140%]">
                👋 Welcome to the Softdesk
              </p> */}
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
          {/* <div className="h-[120px]"></div> */}
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
            <div className="flex justify-end pt-[90px] md:pt-5 pr-7 translate-y-[80px]">
              <Image
                src={president_hero}
                height={150}
                width={150}
                alt="President hero"
                className="absolute "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[100vh] bg-red-500">
        <h1>Softdesk</h1>
      </div>
    </>
  );
}

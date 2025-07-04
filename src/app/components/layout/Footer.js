import React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import location from "@/app/assets/events/location.svg";
import phone from "@/app/assets/events/phone.svg";
import mail from "@/app/assets/events/mail.svg";
import linkedin from "@/app/assets/events/linkedin.svg";
import facebook from "@/app/assets/events/facebook.svg";
import instagram from "@/app/assets/events/insta.svg";
import dribble from "@/app/assets/events/dribble.svg";
import Link from "next/link";

const links = [
  {
    name: "About",
    links: [
      {
        link: "Overview",
        new: false,
        href: "/",
      },
      {
        link: "Cabinet",
        new: false,
        href: "/",
      },
      {
        link: "Tech Spectrum",
        new: false,
        href: "/",
      },
      {
        link: "Tutorials",
        new: false,
        href: "/",
      },
      {
        link: "Events",
        new: false,
        href: "/",
      },
    ],
  },
  {
    name: "Softdesk",
    links: [
      {
        link: "About us",
        new: false,
        href: "/",
      },
      {
        link: "Heads",
        new: false,
        href: "/",
      },
      {
        link: "Courses",
        new: true,
        href: "/",
      },
      {
        link: "News",
        new: false,
        href: "/",
      },
    ],
  },
  {
    name: "Social",
    links: [
      {
        link: "Twitter",
        new: false,
        href: "/",
      },
      ,
      {
        link: "LinkedIn",
        new: false,
        href: "/",
      },
      ,
      {
        link: "Instagram",
        new: false,
        href: "/",
      },
      ,
      {
        link: "Facebook",
        new: false,
        href: "/",
      },
      ,
    ],
  },
  {
    name: "Legal",
    links: [
      {
        link: "Terms",
        new: false,
        href: "/",
      },
      {
        link: "Privacy",
        new: false,
        href: "/",
      },
      {
        link: "Cookies",
        new: false,
        href: "/",
      },
      {
        link: "Contact",
        new: false,
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col gap-2 ">
      {/*   Upper Footer */}
      <div className="bg-[#191A19] py-8 px-4 md:px-10 flex flex-col items-center gap-y-8   lg:flex-row  gap-x-4  justify-between">
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <Image src={logo} alt="logo" width={110} height={70} />
          <p className="text-[#EAECF0] ">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-between gap-10">
          <div className="grid grid-cols-2 sm:grid-cols-4   gap-8">
            {links.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h5 className="text-[#98A2B3] text-[14px] ">{item?.name}</h5>

                {item.links.map((link, index) => (
                  <span key={index} className="flex gap-1 items-center">
                    <Link
                      href={link.href}
                      className="text-[#EAECF0] text-[12px] sm:text-[16px]"
                    >
                      {link.link}
                    </Link>
                    {link.new && (
                      <span className="text-[12px] text-[#101828] bg-[#EAECF0] px-3 py-[6px] rounded-full">
                        New{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Image src={location} alt="location" width={20} height={20} />
              <span className="text-[#EAECF0] text-[14px] sm:text-[16px]">
                University of Engineering and Technology, Taxila
              </span>
            </div>
            <div className="flex gap-3">
              <Image src={phone} alt="location" width={20} height={20} />
              <span className="text-[#EAECF0] text-[14px] sm:text-[16px]">
                051-123-4567
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*  Bottom Footer */}
      <div className="bg-[#191A19]  py-4 px-4 md:px-10 grid grid-cols-1 text-center gap-2">
        <div className="flex justify-center gap-4">
          <Image src={mail} alt="mail" width={20} height={20} />
          <Image src={linkedin} alt="linkedin" width={20} height={20} />
          <Image src={facebook} alt="facebook" width={20} height={20} />
          <Image src={instagram} alt="instagram" width={20} height={20} />
          <Image src={dribble} alt="dribble" width={20} height={20} />
        </div>
        <span className="text-[#98A2B3] text-[13px] sm:text-[14px] ">
          © 2024 Ed-Softdesk.designed by{" "}
          <Link target="_blank"
            href="https://www.behance.net/shaista12"
            className="text-[#FF7420]"
          >
            Shaista (22-SE-90)
          </Link>{" "}
          &nbsp; And developed by{" "}
          <Link target="_blank" href="https://ammar-tan.vercel.app/" className="text-[#FF7420]">
            M.Ammar Mubashir (21-SE-38)
          </Link>{" "}
          &nbsp; & &nbsp;
          <Link
            target="_blank"
            href="https://www.syedmoazamali.online/"
            className="text-[#FF7420]"
          >
            Syed Moazam Ali (21-SE-48)
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./components/elements/Button";

const NotFoundPage = () => {
  const SOCIAL_LINKS = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/tourgrin?mibextid=LQQJ4d",
      icon: "/assets/facebook.svg",
    },
    {
      title: "Twitter",
      link: "https://x.com/tourgrin?s=21&t=igmKThl_9P_TtqvHlO2O5A",
      icon: "/assets/twitter.svg",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/tourgrin?igsh=MTdid3ExOXVnM3l0Ng==",
      icon: "/assets/instagram.svg",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/tourgrin/",
      icon: "/assets/linkedin.svg",
    },
    {
      title: "TikTok",
      link: "https://www.tiktok.com/@tourgrin_?_t=8o4dMetBkHN&_r=1",
      icon: "/assets/tikTok.svg",
    },
  ];
  return (
    <main className="">
    <div className="flex items-center max-w-[1440px] mx-auto px-6 sm:px-[40px] justify-between h-[120px]">
      <Image src="/assets/logo.svg" alt="logo" width={165} height={40} />
      <Button
        type="button"
        className="bg-[#CDEA89] hidden text-[#052E16] h-[40px] sm:flex items-center"
      >
        Get Notified
      </Button>
    </div>
    <div className="container">
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-between lg:my-14">
        <div className="text-center lg:text-left">
          <h1 className="text-[#E3EECE] text-[80px] sm:text-[100px] leading-[80px] sm:leading-[110px] xl:leading-[140px] xl:text-[142.05px] font-bold mb-10">
            Coming Soon
          </h1>
          <p className="text-sm sm:text-[18px] lg:text-[30px] xl:w-[677px] leading-normal font-bold text-[#E3EECE] mt-6 sm:mt-0">
            Explore Cities in Africa like never before with Tourgrin!
          </p>
          <p className="text-[#CDEA89] text-sm sm:text-[18px] lg:text-[25px] font-bold mt-2 sm:mt-4 lg:mt-8">
            Get notified when we launch
          </p>
          <div className="border border-[#FCFDFA] gap-4 mt-10 rounded-[8px] pl-4 flex items-center mx-auto lg:mx-0 sm:w-[470px] overflow-hidden h-[47px] sm:h-[67px] lg:h-[70px]">
            <input
              type="email"
              className="h-full flex-1 w-full border-none bg-transparent outline-none text-white"
              placeholder="email"
            />
            <Button
              type="button"
              className="bg-[#CDEA89] rounded-l-none text-[#052E16] text-sm sm:text-base h-full"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/coming.svg"
            alt="hero image"
            width={388.25}
            height={397}
            className="w-[220px] sm:w-[243px] lg:min-w-[388px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-[#F6FAF0] gap-6 pt-14">
        {SOCIAL_LINKS.map((item, index) => (
          <Link href={item.link} key={index} className="">
            <Image src={item.icon} alt={item.title} width={24} height={24} />
          </Link>
        ))}
      </div>
      <p className="text-[#F6FAF0] font-[400] text-center mt-8">
        © Copyrights Tourgrin | All Rights Reserved
      </p>
    </div>
  </main>
  );
};

export default NotFoundPage;

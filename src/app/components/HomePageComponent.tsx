"use client";

import { DM_Sans } from "next/font/google";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { useGetSocialMedia } from "../api/useGetSocialMedia";
import { useSubscribe } from "../api/useSubscribe";
import { Button } from "./elements/Button";

const dmSans = DM_Sans({ subsets: ["latin"] });

const HomePageComponent = () => {
  const socialIcons = [
    {
      title: "facebook_url",
      icon: "/assets/facebook.svg",
    },
    {
      title: "twitter_url",
      icon: "/assets/twitter.svg",
    },
    {
      title: "instagram_url",
      icon: "/assets/instagram.svg",
    },
    {
      title: "linkedin_url",
      icon: "/assets/linkedin.svg",
    },
    {
      title: "tiktok_url",
      icon: "/assets/tikTok.svg",
    },
  ];
  const { mutate, isPending } = useSubscribe();
  const { data } = useGetSocialMedia();
  const socialLinks = data?.responseBody?.map((link) => {
    const icon = socialIcons.find((icon) => icon.title === link.site_key);
    return {
      title: link.site_key,
      link: link.value,
      icon: icon?.icon,
    };
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();
  const onSubmit = (values: { email: string }) => {
    mutate(
      { email: values.email },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <main className="">
      <div className="flex items-center max-w-[1440px] mx-auto px-6 sm:px-[40px] justify-between h-[80px] sm:h-[120px]">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={165}
          height={40}
          className="h-[20px] sm:h-[30px] w-[100px] sm:w-[165px]"
        />
        <Button
          type="button"
          className="bg-[#CDEA89] hidden text-[#052E16] h-[40px] sm:flex items-center"
        >
          Get Notified
        </Button>
      </div>
      <div className="container pb-10">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between lg:my-14">
          <div className="text-center lg:text-left">
            <h1 className="text-[#E3EECE] text-[30px] sm:text-[36px] mb-8">
              Coming Soon
            </h1>
            <p className="text-[34px] sm:text-[60px] xl:w-[604px] font-semibold md:leading-[69px] text-[#C1E56B] mt-4 md:mt-6 sm:mt-0">
              Explore Cities in Africa like never before with Tourgrin!
            </p>
            <p
              className={`${dmSans.className} text-[#CDEA89] text-sm sm:text-[18px] font-semibold lg:text-[24px] mt-6 sm:mt-4 lg:mt-16`}
            >
              Get notified when we launch
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-[#FCFDFA] bg-[#F6FAF0] gap-2 xs:gap-4 mt-6 rounded-[8px] px-3 py-3 flex flex-col xs:flex-row items-center mx-auto lg:mx-0 sm:w-[470px] overflow-hidden xs:h-[70px]"
            >
              <input
                type="email"
                {...register("email", { required: true })}
                className={clsx(
                  "h-[50px] xs:h-full xs:flex-1 w-full border outline-none px-4 placeholder:text-[#052E16] rounded-[4px] bg-transparent text-[#052E16]",
                  dmSans.className,
                  errors.email ? "border-[#FF0000]" : "border-[#D0EAE5]"
                )}
                placeholder="Enter your email address"
              />
              <Button
                type="submit"
                isLoading={isPending}
                disabled={isPending}
                className={`${dmSans.className} bg-[#052E16] text-[#C1E56B] font-normal text-sm sm:text-base h-[45px] w-full xs:w-auto xs:h-full`}
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="mt-20 hidden lg:block">
            <Image
              src="/assets/coming.svg"
              alt="hero image"
              width={388.25}
              height={397}
              className="w-[220px] sm:w-[243px] rotate-[-45deg] lg:min-w-[388px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-[#E3EECE] gap-6 pt-14">
          {socialLinks?.map((item, index) => (
            <Link href={item.link} key={index} className="">
              <Image
                src={item?.icon || ""}
                alt={item.title}
                width={24}
                height={24}
              />
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

export default HomePageComponent;
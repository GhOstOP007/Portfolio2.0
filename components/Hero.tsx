"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ishan Vishwakarma",
      "Guy-who-loves-coffee.tsx",
      "<But Loves To Code More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative animate-bounce rounded-full h-40 w-40 object-cover"
        src="https://lh3.googleusercontent.com/a/ACg8ocLGIas3WdG0Lmt3dSxDajmHwjivKt0fmJDjQMJP4jeX1wI=s288-c-no"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px] max-sm:pl-[7px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="orange" />
        </h1>

        <div className="p-5 max-sm:mt-5">
          <Link href="/#about">
            <button className="heroButton max-sm:text-[16px]">About</button>
          </Link>
          <Link href="/#experience">
            <button className="heroButton max-sm:text-[16px]">
              Experience
            </button>
          </Link>
          <Link href="/#skills">
            <button className="heroButton max-sm:text-[16px]">SKills</button>
          </Link>
          <Link href="/#projects">
            <button className="heroButton max-sm:text-[16px]">Projects</button>
          </Link>
        </div>
        <Link
          href="https://drive.google.com/file/d/1KW6RH8vIcNtYnNM1RcnsdFdsfE_97uf9/view?usp=sharing"
          className="z-50 flex justify-center items-center"
        >
          <button className="mt-2 text-xl border border-White-500/40 bg-orange-500/50 rounded-lg px-4 py-1 shadow-2xl z-50 flex justify-center items-center uppercase tracking-[5px] space-x-1">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

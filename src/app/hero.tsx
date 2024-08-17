"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8 relative overflow-hidden">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-base !leading-tight text-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-textFadeIn"
          >
            FULL STACK WEB DEVELOPER AND APP DEVELOPER <br />
          </Typography>
          <br />
          <Typography
            variant="lead"
            className="mb-4 lg:text-5xl !text-black font-bold md:pr-16 xl:pr-28 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-namePulse animate-nameBounce"
          >
            Hi,
            <br />
            I&apos;m TREVOR PIUS OKWIRRI,
          </Typography>
          <br />
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28 animate-textFadeInDelay"
          >
            A passionate developer from Kenya with a talent for creating
            intuitive and dynamic web and mobile applications. I bring ideas to
            life through a seamless blend of creativity and technical expertise.
          </Typography>
        </div>
        <Image
          width={256}
          height={256}
          alt="team work"
          src="/image/portfolio.jpg"
          className="w-full h-full max-w-[256px] max-h-[256px] rounded-3xl object-cover transform transition-transform duration-700 hover:scale-105 animate-imageFadeIn"
        />
      </div>
    </header>
  );
}

export default Hero;

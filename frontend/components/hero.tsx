"use client"
import { FaDownload, FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import axios from "axios";
import { toast } from "react-toastify";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 absolute -inset-6 opacity-30  left-0">
          </BackgroundLines>
              <img
                src="/hola.png"
                alt="me hola"
                className="w-20 h-20 lg:w-[400px] lg:h-[400px] block lg:block text-sm lg:text-base"
              />
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi! I'm Yabibal, a Web Developer ."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            based in Ethiopia.
          </p>

          <div className="flex flex-wrap gap-2 justify-center items-center mt-4 text-black">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icons={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/files/Myresume.pdf" download="Myresume.pdf">
              <button className="rounded-full p-3 bg-gradient-to-r from-purple-500 mt-7 to-blue-500 text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                <span>Download CV</span>
                <FaDownload className="animate-bounce" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

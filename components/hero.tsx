import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-20 pt-36">
      <div className="relative">
        <Spotlight className="top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-[100vw] dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-center text-blue-900 dark:text-blue-100  z-10">
            Dynamic Web Developer
          </h2>
          <TextGenerateEffect 
          words="I'm a web developer who loves to create dynamic and interactive web experiences. I'm passionate about building responsive and user-friendly websites that provide a seamless user experience." 
          className="text-[19px] md:text-1xl font-bold text-center text-blue-900 dark:text-blue-100 lg:text-2xl  z-10" />
          <Link href="/about" className="mt-2">
            <MagicButton title="Show my work" icons={<FaLocationArrow/>} position="right"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { FaGithub, FaLinkedin, FaSkype, FaTelegram } from "react-icons/fa6";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

const RevelCard = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="future-plans mt-10 text-center bg-black-100 p-6 rounded-lg border">
        <h2 className="text-2xl font-bold">What’s Coming Next?</h2>
        <p className="mt-4 text-lg text-gray-200">
          Exciting projects are on the horizon! Stay tuned for my next big
          project — a <span className="text-1xl font-bold text-pink-700 ">Coders Social Media</span> .
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Follow me on social media to get updates in real-time!
        </p>
        <div className="mt-5 flex justify-center space-x-4">
          <a
            target="_blank"
            href="https://github.com/yab112"
            className="text-orange-500 text-3xl"
          >
            <FaGithub/>
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/yourprofile"
            className="text-orange-500  text-3xl"
          >
            <FaLinkedin/>
          </a>
          <a 
          target="_blank"
          href="
          https://join.skype.com/invite/B3guG5P2q1sl" className="text-orange-500  text-3xl">
                <FaSkype/>
          </a>
          <a href="https://t.me/anoni670" target="_blank" className="text-orange-500  text-3xl"><FaTelegram/></a>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default RevelCard;

import React, { useEffect, useState } from "react";
import heroImage from "../Assets/Hero.png";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div
          className={`w-full mt-16  md:w-1/2 mb-8 md:mb-0 transform transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover mx-10 animate-bounce"
          />
          <!-- Intentlead -->
<div style="width: 100%">
    <script src="https://app.intentlead.com/js/uPwZcLuEPh"></script>
</div>
        </div>
        <div className="w-full md:w-1/2 -mt-4 text-center md:text-left space-y-4">
          <h1
            className={`text-2xl md:text-4xl font-extrabold  text-deepPlum ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700`}
          >
            ✨Discover Performance✨
          </h1>
          <p
            className={`text-md font-bold md:text-xl font-mono text-gray-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700 delay-200`}
          >
           "Discover a World of Premium Sportswear for Men and Women. Find the Perfect Gear for Every Workout and Activity."
          </p>
          <div
            className={`flex flex-col  sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700 delay-400`}
          >
            <Link to="/signin">
              <button className="bg-roseGold hover:bg-blushPink mt-5 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

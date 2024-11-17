import React from "react";
import Img from "../assets/hero.webp";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Hero = () => {
  return (
    <section className="text-white pt-20 bg-heroBg  flex md:h-screen items-center md:flex-row flex-col">
      <div className="flex items-center flex-col md:flex-row container    mx-auto justify-center gap-10 p-8">
        {/* Left side */}
        <div className="md:w-1/2 h-full">
          <h1 className="text-4xl py-2">Start Your Journey to Mental Wellness</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde nulla mollitia laudantium vero autem in maxime quisquam ex corporis conse</p>
          <button className="bg-buttonBg p-2 rounded-md my-4
          "><Link to="/contact">Contact Us <ArrowForwardOutlinedIcon fontSize="10px" /> </Link></button>
        </div>
        {/* right side */}
        <div className=" w-2/3 md:w-1/3 lg:w-1/2 flex md:justify-end ">
         <div>
          <img src={Img} className="w-full object-cover md:w-[380px]" alt="" />
         </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

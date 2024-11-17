import React, { useState } from "react";
import AboutImg from "../assets/video-thumbnail.webp";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
const About = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const handlePlay = () => {
    setVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setVideoPlaying(false);
  };
  return (
    <div className="bg-[#f7f8fc] pb-10  px-10  ">
      <div className="container mx-auto flex-col flex md:flex-row justify-center gap-4">
        <div className="md:w-1/3">
          {!isVideoPlaying ? (
            <div className="relative">
              <img
                src={AboutImg}
                alt=""
                className="rounded-sm object-cover md:-h-[455px] h-auto"
              />
              <button
                className="bg-buttonBg p-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg text-white "
                onClick={handlePlay}
              >
                <PlayArrowOutlinedIcon className="" />
              </button>
            </div>
          ) : null}
        </div>
        <div className="md:w-1/2 flex items-center p-6">
          <div>
            <h2 className="text-2xl text-green-500">
              Individual Consult And Therapy
            </h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis natus commodi error aspernatur atque sint tiis natus
              commodi error aspernatur atque sint tiis natus commodi error
              aspernatur atque sint dignissimos. Nemo veritatis totam quod.
            </p>
            <Link to="/contact">
              {" "}
              <button
                className="bg-buttonBg hover:bg-green-900 hover:rounded-md duration-200 text-white py-1 px-3 rounded-sm
               my-2"
              >
                Get Started <ArrowCircleRightOutlinedIcon className="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75  flex justify-center items-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JqmfwbzKp_Y?si=1ihNG2zxgN-kxIN-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-lg absolute  px-4  md:px-0"
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-black text-2xl cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

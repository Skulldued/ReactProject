import Card from "./Card";
import React from "react";

const WorkingStp = () => {
  return (
    <div className="w-full bg-heroBg py-10 md:py-24 px-14 relative ">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" md:w-[650px]">
            <h1 className="text-center text-3xl font-bold font-secondary text-white">
              How It Works
            </h1>
            <p className="text-center text-gray-300 py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              delectus ipsum inventore perferendis explicabo hic harum facilis
              atque id omnis ab expedita dolor, alias, lpraesentium aliquam
              necessitatibus esse!
            </p>
          </div>
        </div>
        <div className="flex justify-center  md:py-6 py-2">
          <div className="flex md:flex-row flex-col gap-12">
            <Card
              id="1"
              title="Fill a Form"
              paragraph="Step 1 or, sit amet consectetur adipisicing elit. Labore delectus ipsum inventore perfer"
            />
            <Card
              id="2"
              title="Get Matched"
              paragraph="Step 2 or, sit amet consectetur adipisicing elit. Labore delectus ipsum inventore perfer"
            />
            <Card
              id="3"
              title="schedule"
              paragraph="Step 3 or, sit amet consectetur adipisicing elit. Labore delectus ipsum inventore perfer"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStp;

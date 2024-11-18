import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Service11 from "../assets/service1.webp";
import Service12 from "../assets/service2.webp";
import Service13 from "../assets/service3.webp";
import Service14 from "../assets/service4.webp";
import { motion } from "motion/react";
import { fadeIn } from "../utils/variant";
const Services = () => {
  return (
    <div className="bg-[#f7f8fc] w-full">
      <div className="py-20 px-5 container mx-auto">
        <div className="text-center"></div>
        <Tabs className="md:px-10 ">
          <TabList
            className="w-full flex flex-wrap py-5 lg:py-0 justify-around"
           
          >
            <Tab>Couple Counselling</Tab>
            <Tab>Parenting Skills</Tab>
            <Tab>Felling Struck</Tab>
            <Tab>Self-Confidence</Tab>
          </TabList>

          <div className="lg:p-16">
            <TabPanel>
              <motion.div
                className="flex flex-col md:flex-row md:justify-between  w-full gap-8"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="md:w-4/5  flex items-center p-10 bg-slate-200 rounded-md font-primary">
                  <div>
                    <h1 className="text-green-600 py-3 text-2xl font-primary">
                      Couple Councelling
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                      amet consectetur ipsum dolor sit amet consectetur ipsum
                      dolor sit amet consectetur adipisicing elit. Dolores,
                      distinctio?
                    </p>
                    <div className="pt-4">
                      <h2 className="text-xl font-bold">Benefits</h2>
                      <ul className=" list-disc list-inside space-y-2">
                        <li className="">Understanding Relatinship Dynamics</li>
                        <li className="">Effective Communication Techniques</li>
                        <li className="">Conflict Resolution Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={Service11}
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
               className="flex flex-col md:flex-row md:justify-between  w-full gap-8"
               variants={fadeIn("up", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               >
                <div className="md:w-4/5  flex items-center p-10 bg-slate-200 rounded-md font-primary">
                  <div>
                    <h1 className="text-green-600 py-3 text-2xl font-primary">
                      Parenting Skills
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                      amet consectetur ipsum dolor sit amet consectetur ipsum
                      dolor sit amet consectetur adipisicing elit. Dolores,
                      distinctio?
                    </p>
                    <div className="pt-4">
                      <h2 className="text-xl font-bold">Benefits</h2>
                      <ul className=" list-disc list-inside space-y-2">
                        <li className="">Understanding Relatinship Dynamics</li>
                        <li className="">Effective Communication Techniques</li>
                        <li className="">Conflict Resolution Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={Service12}
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div 
              className="flex flex-col md:flex-row md:justify-between  w-full gap-8"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              >
                <div className="md:w-4/5  flex items-center p-10 bg-slate-200 rounded-md font-primary">
                  <div>
                    <h1 className="text-green-600 py-3 text-2xl font-primary">
                      Felling Struck
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                      amet consectetur ipsum dolor sit amet consectetur ipsum
                      dolor sit amet consectetur adipisicing elit. Dolores,
                      distinctio?
                    </p>
                    <div className="pt-4">
                      <h2 className="text-xl font-bold">Benefits</h2>
                      <ul className=" list-disc list-inside space-y-2">
                        <li className="">Understanding Relatinship Dynamics</li>
                        <li className="">Effective Communication Techniques</li>
                        <li className="">Conflict Resolution Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2">
                  <img
                    src={Service13}
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
               className="flex flex-col md:flex-row md:justify-between  w-full gap-8"
               variants={fadeIn("up", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               >
                <div className="md:w-4/5  flex items-center p-10 bg-slate-200 rounded-md font-primary">
                  <div>
                    <h1 className="text-green-600 py-3 text-2xl font-primary">
                      Self Confidence
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                      amet consectetur ipsum dolor sit amet consectetur ipsum
                      dolor sit amet consectetur adipisicing elit. Dolores,
                      distinctio?
                    </p>
                    <div className="pt-4">
                      <h2 className="text-xl font-bold">Benefits</h2>
                      <ul className=" list-disc list-inside space-y-2">
                        <li className="">Understanding Relatinship Dynamics</li>
                        <li className="">Effective Communication Techniques</li>
                        <li className="">Conflict Resolution Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={Service14}
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;

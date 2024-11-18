import React from "react";
import PricingCard from "./PricingCard";
import { motion } from "motion/react";
import { fadeIn } from "../utils/variant";
import { Element } from "react-scroll";
const Pricing = () => {
  return (
    <Element name="Pricing">
      <div className="w-full bg-[#f7f8fc] pb-10 py-10 md:py-16 px-4  md:px-10">
      <div className="container mx-auto">
        <motion.div
          className="flex justify-center "
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="text-center w-[70%]">
            <h2 className="md:text-4xl text-2xl font-extrabold">
              Perfect For small & Large Brands
            </h2>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              molestiae amet unde vitae consectetmet, consectetur adipisicing
              elit. Possimus molestiae amet unde vita vitae consectetmet,
              consectetur adipisicing elit. Possimus molestiae amet unde vitae
              consectetur, iusto mollitia. Omnis sint dolore corporis!
            </p>
          </div>
        </motion.div>
        <div className="flex md:flex-row flex-col justify-center my-6 gap-5">
          <PricingCard
            title="Bronze Pacakage"
            price="$99"
            month="/mo"
            para=" vitae consectetmet, consectetur adipisicing elit. Possimus molestiae amet unde vit"
            bullet1=" vitae consectetmet"
            bullet2=" vitae consectetmet"
            bullet3=" vitae consectetmet"
            btnTxt="Get Started"
          />
          <PricingCard
            title="Silver Pacakage"
            price="$199"
            month="/mo"
            para=" vitae consectetmet, consectetur adipisicing elit. Possimus molestiae amet unde vit"
            bullet1=" vitae consectetmet"
            bullet2=" vitae consectetmet"
            bullet3=" vitae consectetmet"
            btnTxt="Get Started"
          />
          <PricingCard
            title="Gold Pacakage"
            price="$299"
            month="/mo"
            para=" vitae consectetmet, consectetur adipisicing elit. Possimus molestiae amet unde vit"
            bullet1=" vitae consectetmet"
            bullet2=" vitae consectetmet"
            bullet3=" vitae consectetmet"
            btnTxt="Get Started"
          />
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Pricing;

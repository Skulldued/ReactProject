import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="w-full bg-[#f7f8fc] pb-10 py-10 md:py-16  px-10">
      <div className="container mx-auto">
        <div className="flex justify-center ">
          <div className="text-center w-[70%]">
            <h2 className="text-4xl font-extrabold">
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
        </div>
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
  );
};

export default Pricing;

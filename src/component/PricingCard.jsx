import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeIn } from "../utils/variant";
const PricingCard = ({
  title,
  price,
  month,
  para,
  bullet1,
  bullet2,
  bullet3,
  btnTxt,
}) => {
  return (
    <motion.div
     className="border-2 rounded-md shadow-black w-[350px] p-7 "
     variants={fadeIn("up", 0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: false, amount: 0.7 }}
     >
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <hr className="w-16  border text-primary border-primary" />
        <div className="flex my-2">
          <h3 className="font-bold text-2xl ">{price}</h3>
          <span className="text-gray-400 text-xl ps-1">{month}</span>
        </div>
        <p className="">{para}</p>
        <ul className="list-inside list-disc">
          <li>{bullet1}</li>
          <li>{bullet2}</li>
          <li>{bullet3}</li>
        </ul>
        <Link to="/contact" >
          <button className="bg-buttonBg py-2 px-3 text-white my-2 rounded-sm">{btnTxt}</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;

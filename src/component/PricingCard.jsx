import React from "react";
import { Link } from "react-router-dom";

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
    <div className="shadow-sm shadow-black w-[350px] p-7 ">
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
    </div>
  );
};

export default PricingCard;

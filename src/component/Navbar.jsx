import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { navLink } from "../constant/constant";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <nav className="bg-heroBg py-3 text-white px-5 fixed top-0 right-0 left-0 z-10 w-100">
      <div className="container mx-auto  flex justify-between md:justify-between items-center h-full">
        <div>
          <Link to="/">
            <motion.img
              src={Logo}
              initial={{ transform: "translateY(80px)" }}
              animate={{ transform: "translateY(0px)" }}
              transition={{ type: "spring" }}
              className="md:w-[150px] w-[100px]"
              alt="logo"
            />
          </Link>
        </div>
        <div
          className="md:hidden flex justify-end w-full"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <ClearOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>
        <div className="md:flex md:flex-row hidden">
          {navLink.map((items, index) => (
            <div className="" key={index}>
              <Link
                className={`list-none md:px-2 font-primary ${
                  activeSection === items.title ? "text-red-600" : ""
                }`}
                to={items.title}
                onClick={() => setActiveSection(items.title)}
              >
                {items.title}
              </Link>
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div
          className={
            isOpen
              ? "md:hidden bg-black absolute top-[45px] w-full right-0 p-5"
              : "hidden"
          }
        >
          {navLink.map((items, index) => (
            <div className="" key={index}>
              <Link
                className={`list-none  font-primary ${
                  activeSection === items.title ? "text-red-600" : ""
                }`}
                to={items.title}
                onClick={() => setActiveSection(items.title)}
              >
                {items.title}
              </Link>
            </div>
          ))}
          <div>
            <button className="bg-buttonBg text-white px-2  md:hidden py-1 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
        {/* Contact us */}
        <motion.div
          initial={{ transform: "translateY(80px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ type: "spring" }}
        >
          <button className="bg-buttonBg text-white px-2 hidden md:flex py-1 rounded-md">
            Contact Us
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

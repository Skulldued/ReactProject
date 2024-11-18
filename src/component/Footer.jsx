import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/fav-icon.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "motion/react";
import { fadeIn } from "../utils/variant";
const Footer = () => {
  return (
    <div className="bg-[#f7f8fc] p-6 md:py-14">
      <div className="container mx-auto  ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 lg:space-y-0 space-y-5">
          <motion.div 
           variants={fadeIn("up", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}>
            <Link to="/" className="flex gap-2">
              <img src={Logo} alt="logo-Footer" />
              <span className="font-bold text-xl">Mindleap</span>
            </Link>
            <p className="text-start py-2">
              Lorem ipsum ipsum dolor sit amet. ipsum dolor sit amet.ipsum dolor
              sit amet.ipsum dolor sit amet.
            </p>
            <div className="flex gap-2">
              <div className="w-10 flex justify-center items-center h-10 bg-gray-200  rounded-full">
                <FacebookOutlinedIcon className="text-green-500 font-bold" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 bg-gray-200  rounded-full">
                <InstagramIcon className="text-green-500 font-bold" />
              </div>
              <div className="w-10 flex justify-center items-center  h-10 bg-gray-200  rounded-full">
                <LinkedInIcon className="text-green-500 font-bold" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 bg-gray-200  rounded-full">
                <TwitterIcon  className="text-green-500 font-bold" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="pb-4">
                <h2 className="text-xl font-bold ">Quick Links</h2>
            </div>
            <ul className="list-inside list-none space-y-2 ">
                <li><Link to="/">Home</Link></li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="pb-4">
                <h2 className="text-xl font-bold ">Support</h2>
            </div>
            <ul className="list-inside list-none space-y-2 ">
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Terms Of Services</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Support Center</Link></li>
                
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
          <div className="pb-4">
                <h2 className="text-xl font-bold ">Contact Us</h2>
            </div>
            <div className="space-y-3">
            <div className="">
                <LocationOnIcon className="text-green-700"/>
                <span className="ps-2">123 Street, City, Country</span>
            </div>
            <div className="">
                <CallIcon className="text-green-700"/>
                <span className="ps-2">+91 8936811660</span>
            </div>
            <div className="">
                <EmailIcon className="text-green-700"/>
                <span className="ps-2">sunnyrajkcb@gmail.com</span>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

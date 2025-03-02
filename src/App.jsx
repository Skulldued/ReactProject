import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/services";
import About from "./component/about";
import WorkingStp from "./component/WorkingStp";
import Pricing from "./component/Pricing";
import Testimonial from "./component/Testimonial";
import Appointment from "./component/Appointment";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="font-primary  ">
      <Navbar />
      <Hero />
    <Services/>
      <About/>
      <WorkingStp/>
      <Pricing/>
      <Testimonial/>
      <Appointment/>
      <Footer/>
    </div>
  );
};

export default App;

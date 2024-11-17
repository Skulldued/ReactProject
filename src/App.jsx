import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/services";
import About from "./component/about";
import WorkingStp from "./component/WorkingStp";
import Pricing from "./component/Pricing";
const App = () => {
  return (
    <div className="font-primary  ">
      <Navbar />
      <Hero />
    <Services/>
      <About/>
      <WorkingStp/>
      <Pricing/>
    </div>
  );
};

export default App;

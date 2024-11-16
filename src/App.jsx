import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
const App = () => {
  return (
    <div className="font-primary overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Services/>
    </div>
  );
};

export default App;

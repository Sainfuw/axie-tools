import * as React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import DivisorLine from "./components/DivisorLine";
import Footer from "./components/Footer";

const AxieTools = () => {
  return (
    <div className="root">
      <Navbar />
      <Content />

      <DivisorLine />
      <Footer />
    </div>
  );
};

export default AxieTools;

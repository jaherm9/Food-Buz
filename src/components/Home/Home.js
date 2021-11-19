import React, { useState } from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";
import Services from "../Services/Services";
import AllServices from "../AllServices/AllServices";

const Home = () => {
  return (
    <div>
      <div className="text-center"></div>
      <Banner></Banner>
      <AllServices></AllServices>
      
      
    </div>
  );
};

export default Home;

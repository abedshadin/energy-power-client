import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

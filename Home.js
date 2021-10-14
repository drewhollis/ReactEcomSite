import React from "react";
import EmailList from "../components/EmailList";
import FeaturedFlavors from "../components/FeaturedFlavors";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <FeaturedFlavors />
      <EmailList />
      <Footer />
    </div>
  );
};

export default Home;

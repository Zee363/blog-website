import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="home-section container-fluid">
      <Header />
      <Navbar />
      <div className="img-container">
        <img
          className="far"
          src="./home-picture.webp"
          alt="Portrait of Ayanda"
          width="280px"
          height="210px"
        />
        <img
          className="close-up"
          src="./home-picture2.webp"
          alt="A close-up portrait of Ayanda"
          width="240px"
          height="180px"
        />
      </div>
      <div className="button">
        <div className="btn btn-primary">Ayanda Adams</div>
      </div>
    </div>
  );
};

export default HomePage;

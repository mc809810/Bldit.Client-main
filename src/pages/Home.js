import React from "react";
import BannerImage from "../assets/AMbg.jpeg";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "./Projects";
import "../styles/Home.css";


function Home() {
  //Navigation

  const navigate = useNavigate();

  const navigateToProjects = () => {
    //  navigate to /projects
    navigate("/Projects");
  };

  return (
    <div className="content">
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Auto Mates </h1>
          <p> System that allows developers to automate their tasks.</p>
        </div>
      </div>
      {/* define routes */}
      {/*<Routes>*/}
      {/*  <Route exact path="/projects" element={<Projects />} />*/}
      {/*</Routes>*/}
      {/* Navigation */}
      <button type="click" onClick={navigateToProjects}>
        Projects
      </button>
      <Footer />
    </div>
  );
}

export default Home;

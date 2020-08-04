import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import StudyIcon from "../../assets/images/icons/study.svg";
import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={LandingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Study Icon" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Give Class Icon" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={PurpleHeartIcon} alt="Heart" />
        </span>
      </div>
    </div>
  );
};

export default Landing;

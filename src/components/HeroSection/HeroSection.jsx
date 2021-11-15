import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroStyles } from "./HeroStyles";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// import PortaImg from "../assets/images/portadaHero.jpg";
import videoporta from "../../assets/video/Pedro-moreno.mp4";
// import { Button } from './Button';
import { PText } from "../PText/PText";
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../../assets/images/scroll-down-arrow.svg";

export function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <HeroStyles>
        <div className="hero">
          <div className="container">
            <div data-aos="fade-up" className="hero__content">
              <h1 className="hero__heading">
                {/* <span>Portafolio</span> */}
                {/* <span className="hero__name">Pedro Moreno</span> */}
              </h1>
              {/* <div className="hero__img">
                <img src={PortaImg} alt="" />
              </div> */}
              <video
                className="hero__img"
                muted="true"
                autoplay="true"
                loop="true"
              >
                <source src={videoporta} type="video/mp4" alt="" />
              </video>
              <div className="hero__info">
                <PText>
                  Hola! Mi nombre es Pedro Nel Moreno Alvarez. Soy FronEnd
                  Developer, creador de contenido digital y este es mi
                  portaforlio web.
                  <br /> <br />
                  <strong>¡Welcome!</strong>
                </PText>
                {/* <Button btnText="Ver Proyectos" btnLink="/projects" /> */}
              </div>
            </div>

            <div data-aos="fade-right" className="hero__social">
              <div className="hero__social__indicator">
                <p>Follow</p>
                <img src={SocialMediaArrow} alt="icon" />
              </div>
              <div className="hero__social__text">
                <ul>
                  <li>
                    <a
                      href="https://github.com/pdromoreno7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pedro-moreno-alvarez/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pdromoreno7/?hl=es-la"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/pdromoreno7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-left" className="hero__scrollDown">
              <p>Scroll</p>
              <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
            </div>
          </div>
        </div>
      </HeroStyles>
    </>
  );
}

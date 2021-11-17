import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "../Button/Button";
import { PText } from "../PText/PText";
import AboutImg from "../../assets/images/yo-WEB-2-black-vertical.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AboutSectionStyles } from "./AboutSectionStyles";

export function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <AboutSectionStyles>
      <div className="container">
        <div data-aos="fade-up" className="aboutSection__left">
          <SectionTitle subheading="@pdromoreno7" heading="Acerca de mí" />
          <PText>
            Desarrollador web frontend de Cartagena, Colombia. Tengo experiencia
            creando interfaces graficas web UI. Me gusta mucho todo lo que tiene
            que ver con tecnología, ciencias, y arte.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Proyectos" btnLink="/projects" />
            <Button btnText="Mas sobre mi" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right ">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../assets/doc/Cv-Pedro-Moreno.pdf";
import { AboutPageStyles } from "./AboutPageStyles";
import AboutImg from "../../assets/images/yo-WEB-2-black-vertical.jpg";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import { PText } from "../../components/PText/PText";
import { SkillsSection } from "../../components/SkillsSection/SkillsSection";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div data-aos="fade-up" className="left">
              <p className="about__subheading">
                Hola, soy <span>Pedro Moreno</span>
              </p>
              <h2 className="about__heading">Un FrontEnd developer</h2>
              <div className="about__info">
                <PText>
                  Soy de Cartagena, Colombia. Tengo experiencia creando
                  interfaces para sitios y apps webs con HTML/CSS, React.js y
                  vanilla JavaScript. Me gusta mucho todo lo que lo relacionado
                  a la tegnología, el arte y la ciencias. Siempre intento crear
                  cosas visualmente actractivas y usables. Me agrada la idea de
                  poder hacer algo que pueda ayudar a los demas, que aporte algo
                  a este mundo.
                  <br /> <br />
                  Empecé a programar hace 6 años cuando entre a la universidad,
                  eventualmente deje de hacerlo un poco. Regresé dandome cuenta
                  que el desarrollo web es mundo increíblen lleno de retos y que
                  constantemente cambia.
                  <br /> La programación es una arte para mi, encuentro
                  realmente interesante el proceso de crear algo desde cero solo
                  codeando con un computador.
                  <br /> <br />
                  Vivo constantemente aprendiendo algo nuevo, y me enfoco en ser
                  un activo valioso en cualquier equipo que trabaje. Me gusta
                  ayudar a otras personas, no tengo problemas en sentarme y
                  explicar cómo funciona algo, estoy siempre dispuesto también a
                  recibir feedback y poder crecer.
                  <br /> <br />
                  <strong>Hobbies:</strong>
                  <br /> <br />
                  <ul>
                    <li>Fan de las ciencias del espacio.🚀</li>
                    <li>La música, me gusta tocar el bajo y la guitarra. 🎸</li>
                    <li>Filming, astrofotografía. 🎥</li>
                  </ul>
                  {/* <strong>¿Porque Javascript?</strong>
                  <br /> <br />
                  <p>
                    Cuando estaba empezando en este mundillo, me llamo la
                    atención Javascript, me di cuenta que con este lenguaje no
                    solo podía construir aplicaciones webs, sino que también
                    podía hacer app mobile, con React Native o IONIC, o incluso
                    hacer apps desktop para windows con Electron.js. Puedo
                    construir tanto el frontend y el backend con node, hasta se
                    han creado modelos de machine learning en Js.
                    <br />
                    En definitiva Javascript hoy por hoy es el lenguaje más
                    versátil que existe. Utilizado desde aplicaciones de gran
                    escala como Facebook, hasta como para llevarnos a Marte en
                    un cohete de Spacex 🚀.
                  </p> */}
                </PText>
              </div>
              <a href={cv} target="_blank">
                <button type="submit">Descargar CV</button>
              </a>
            </div>
            <div className="right ">
              <img src={AboutImg} alt="me" />
            </div>
          </div>

          <SkillsSection />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

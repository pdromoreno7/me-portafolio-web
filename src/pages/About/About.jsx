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
import { ProyectDestacado } from "../../components/proyectDestacado/ProyectDestacado";
import projects from "../../assets/data/projects";
const dataSkycomeet = projects[0];

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
                  Soy de Cartagena, Colombia. Tengo una amplia experiencia en
                  desarrollo web y mobile (Android y iOS). Me llama la atención
                  mucho desarrollar con de React y React Native. Soy un
                  apasionado de la tecnología y la ciencia de la computación.
                  Tengo experiencia programando y mantenido complejas
                  aplicaciones web y móviles, proporcionando soluciones TI para
                  empresas públicas y privadas.
                  <br /> <br />
                  Durante los últimos dos años, he estado enfocado en el
                  desarrollo frontend con librerías y frameworks como React js,
                  Vue.js, Next js, Angular y mobile con React Native para iOS y
                  Android. Otras tecnologías con las que he trabajado son HTML,
                  CSS, Node js, Express js, PostgreSQL, Docker, TypeSrcript,
                  Bootstrap y Drupal. Implementado GIT Flow, servicios REST,
                  principios SOLID, unit testing, clean architecture,
                  Integración continua (CI/CD) y micro servicios. Estoy
                  constantemente adquiriendo nuevas habilidades y técnicas
                  ágiles para mejorar en mi área personal tanto humana como
                  profesional. Me encantaría trabajar en proyectos que me
                  permitan aprovechar al máximo las últimas tecnologías del
                  ecosistema de React.
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

          <ProyectDestacado
            name={dataSkycomeet.name}
            portada={dataSkycomeet.img}
            desc={dataSkycomeet.desc}
            link={dataSkycomeet.sitio}
            more="/projects/skycomeet"
          />

          <SkillsSection />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

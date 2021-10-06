import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

// import AboutImg from '../assets/images/AboutSection.jpg';
import AboutImg from '../assets/images/yo-WEB-2-black-vertical.jpg';
// import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import { Button } from '../components/Button';
import { PText } from '../components/PText';
import { SkillsSection } from '../components/SkillsSection';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    margin-bottom: 1.5rem;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border-radius: 10px;
      /* border: 2px solid var(--gray-1); */
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

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
                  Soy de Cartagena, Colombia. Amo la tegnología, el arte y la
                  ciencias. Siempre intento crear cosas visualmente actractivas
                  y usables. Me gusta mucho la idea de poder crear algo que
                  pueda ayudar a los demas, que aporte algo a este mundo.
                  <br /> <br />
                  Empecé a programar hace 6 años cuando entre a la universidad,
                  eventualmente deje de hacerlo un poco. Regresé dandome cuenta
                  que el desarrollo web es mundo increíblen lleno de restos y
                  que constantemente cambia. La programación es una arte para
                  mi, lo encuentro realmente interesante, disfruto el proceso de
                  crear algo desde cero solo codeando.
                  <br /> <br />
                  Vivo constantemente aprendiendo algo nuevo, y me enfoco en ser
                  un activo valioso en cualquier equipo que trabaje. Me gusta
                  ayudar a otras personas, no tengo problemas en sentarme y
                  explicar cómo funciona algo, estoy siempre dispuesto también a
                  recibir feedback y poder crecer.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
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

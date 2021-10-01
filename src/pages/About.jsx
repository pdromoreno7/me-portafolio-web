import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

// import AboutImg from '../assets/images/AboutSection.jpg';
import AboutImg from '../assets/images/AbourSection-Web.jpg';
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
                  Soy de Cartagena, Colombia. Amo la tegnologia, el arte y la
                  ciencias. Siempre intento crear cosas visualmente actractivas
                  y unicas. Me gusta mucho la idea de poder crear algo que pueda
                  ayudar a los demas, que aporte algo a este mundo.
                  <br /> <br />
                  Empecé a programar hace 6 años cuando entre a la universidad,
                  eventualmente deje de hacerlo un poco, hasta que me encontre
                  este mundo increible del desarrollo web. La programación es
                  una arte para mi. Lo encuentro realmente interesante y
                  disfruto el proceso de crear algo desde cero solo codeando.
                  {/* <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place. */}
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right ">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          {/* <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Educación</h1>

              <AboutInfoItem
                title="Escuelas"
                items={[
                  'Sena',
                  'Fundación Universitaria Tecnológico Comfenalco',
                ]}
              />
              <AboutInfoItem title="Plataformas" items={['Platzi']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Habilidades</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />

              <AboutInfoItem
                title="Design"
                items={['Figma', 'Photoshop', 'Ilustrator']}
              />
            </div>
          </div> */}
          <SkillsSection />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

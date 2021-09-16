import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { PText } from './PText';
import AboutImg from '../assets/images/AbourSection-Web.jpg';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Permítame presentarme"
            heading="Acerca de mí"
          />
          <PText>
            Soy un desarrollador web frontend de Turbaco, Colombia. Creo
            interfaces graficas web profesionales. Amo todo lo que tiene que ver
            con tegnologia, ciencias, y arte.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Proyectos" btnLink="/projects" />
            <Button btnText="Mas sobre mi" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right ">
          <img className="aboutImg border-img" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}

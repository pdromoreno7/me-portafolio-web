import styled from 'styled-components';
import AboutInfoItem from './AboutInfoItem';

const SkillsSectionStyles = styled.section`
  .skill__info__items {
    margin-top: 15rem;
  }
  .skill__info__item {
    margin-bottom: 10rem;
  }
  .skill__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      .skill__info__heading {
        font-size: 3rem;
      }
    }
  }
`;

export function SkillsSection() {
  return (
    <SkillsSectionStyles>
      <div className="skill__info__items">
        <div className="skill__info__item">
          <h1 className="skill__info__heading">Habilidades</h1>

          <AboutInfoItem
            title="FrontEnd"
            items={['HTML', 'CSS', 'SASS', 'JavaScript', 'REACT.JS']}
          />
          {/* <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              /> */}
          <AboutInfoItem
            title="Design"
            items={['Figma', 'Photoshop', 'Ilustrator']}
          />
        </div>
        <div className="skill__info__item">
          <h1 className="skill__info__heading">Educación</h1>

          <AboutInfoItem
            title="Escuelas"
            items={['Sena', 'Fundación Universitaria Tecnológico Comfenalco']}
          />
          <AboutInfoItem title="Plataformas" items={['Platzi']} />
          {/* <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
        </div>

        {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
      </div>
    </SkillsSectionStyles>
  );
}

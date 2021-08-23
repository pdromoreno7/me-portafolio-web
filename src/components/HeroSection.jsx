import React from 'react';
import HeroImg from '../assets/images/hero.png';
import { Button } from './Button';
import { Ptext } from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

// const HeroStyles = styled.div`
//   .hero {
//     height: 100vh;
//     min-height: 1000px;
//     width: 100%;
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//   }
// `;

export function HeroSection() {
  return (
    <>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, this is</span>
          <span>Pedro Moreno</span>
        </h1>
        <figure className="hero__img">
          <img src={HeroImg} alt="" />
        </figure>
        <div className="hero__info">
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque autem
            quasi, pariatur, beatae totam maiores voluptate quwfe fwew
          </Ptext>
          <Button btnLink="/projects" btnText="See my works" outline={false} />
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://isntagram.com/web_cifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://webcifar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDow">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import { Button } from './Button';
import { PText } from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  /* .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  } */
`;

export function HeroSection() {
  return (
    <>
      <HeroStyles>
        <div className="hero">
          <div className="container">
            <h1 className="hero__heading">
              <span>Hello, This is</span>
              <span className="hero__name">Ayan Khan</span>
            </h1>
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
            <div className="hero__info">
              <PText>
                I am working as a freelance web designer and developer for 4
                years. I love to design and make new web experiences for the
                people.
              </PText>
              <Button btnText="see my works" btnLink="/projects" />
            </div>
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
            <div className="hero__scrollDown">
              <p>Scroll</p>
              <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
            </div>
          </div>
        </div>
      </HeroStyles>
    </>
  );
}

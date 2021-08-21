import React from 'react';
import HeroImg from '../assets/images/hero.png';
import { Ptext } from './Ptext';

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
        </div>
      </div>
    </>
  );
}

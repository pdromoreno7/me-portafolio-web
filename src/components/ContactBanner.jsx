import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { PText } from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <div>
      <ContactBannerStyles>
        <div className="container">
          <div className="contactBanner__wrapper superCenter">
            <PText>¿Tienes algo en mente?</PText>
            {/* <h3 className="contactBanner__heading">Contactatame</h3> */}
            <Button btnText="Contactame" btnLink="/contact" />
          </div>
        </div>
      </ContactBannerStyles>
    </div>
  );
}

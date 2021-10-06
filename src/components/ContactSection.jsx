/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
   justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contactos" subheading="Ponerse en contacto" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a
              href="https://www.linkedin.com/in/pedro-moreno-alvarez/"
              target="_blank "
            >
              
              <ContactInfoItem
                icon={<SiLinkedin />}
                text="Pedro Nel Moreno Alvarez"
              />
            </a>

            <ContactInfoItem icon={<MdEmail />} text="pdromorenodev@gmail.com" />
            <a href="https://goo.gl/maps/pp3sHGmX7sRapLUt9" target="_blank ">
                <ContactInfoItem text="Turbaco, Colombia" />
            </a>
           
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

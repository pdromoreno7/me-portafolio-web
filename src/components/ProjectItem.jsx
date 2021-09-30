/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    /* border: 3px solid var(--gray-2); */
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .projectItem__info-liks {
    display: flex;
    /* gap: 20px; */
    align-items: center;
    /* margin-bottom: 1rem; */
    /* justify-content: center; */
    a {
      display: flex;
      gap: 10px;
      align-items: center;

      p {
        font-size: 20px;
      }
      svg {
        width: 25px;
        margin-right: 25px;
      }
      :hover {
        path {
          color: var(--HappyColor);
          transition: 1s;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  github = 'https://github.com/pdromoreno7',
  sitio = '',
}) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <ProjectItemStyles data-aos="fade">
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__info-liks">
          <a href={github} target="_blank" alt="Github">
            <FaGithub />
          </a>
          <a href={sitio} target="_blank">
            <FaLink />
          </a>
        </div>
      </div>
    </ProjectItemStyles>
  );
}

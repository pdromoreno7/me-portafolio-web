/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ProjectItemStyles } from "./ProjectItemStyles";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectImg from "../../assets/images/projectImg.png";

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  github,
  page,
  sitio = "",
}) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <ProjectItemStyles data-aos="fade">
      <a href={sitio} target="_blank" className="projectItem__img">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>

        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__info-liks">
          {github && (
            <a href={github} target="_blank" alt="Github">
              <FaGithub />
            </a>
          )}

          <a href={sitio} target="_blank">
            <FaLink />
          </a>
          {page && (
            <Link to={page}>
              <div className="projectItem__more">Ver mas</div>
            </Link>
          )}
        </div>
      </div>
    </ProjectItemStyles>
  );
}

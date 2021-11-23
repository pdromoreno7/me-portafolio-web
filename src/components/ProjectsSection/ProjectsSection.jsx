import React from "react";
import { ProjectSectionStyle } from "./ProjectSectionStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ProjectItem from "../ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import "swiper/swiper-bundle.min.css";
import projects from "../../assets/data/projects";
import { SkillsSection } from "../SkillsSection/SkillsSection";
// install Swiper modules
SwiperCore.use([Navigation]);

export function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle
          subheading="Algunos de mis trabajos recientes"
          heading="Proyectos"
        />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {/* por parametro: project, index */}
            {projects.map((project) => (
              // if (index >= 5) return;
              <SwiperSlide key={project.id}>
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                  github={project.github}
                  sitio={project.sitio}
                  page={project.page}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SkillsSection />
      </div>
    </ProjectSectionStyle>
  );
}

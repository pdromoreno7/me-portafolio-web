/* eslint-disable react/jsx-no-target-blank */
import SectionTitle from "../SectionTitle/SectionTitle";
// import "./ProyectComponent.css";
import { ProyectComponentStyles } from "./ProyectComponentStyles";

export function ProyectComponent({
  title,
  portadamain,
  children,
  description,
  sitio,
}) {
  return (
    <ProyectComponentStyles className="proyectComponent-container">
      <div className="proyectComponent_box conatiner">
        <SectionTitle heading={title} subheading="Proyecto" />
        <div className="proyectComponent__img">
          <img src={portadamain} alt={title} />
        </div>

        <div className="proyectComponent__desc-corta">
          <p>{description}</p>
        </div>
        <a href={sitio} target="_blank">
          <button type="submit">Visitar {title}</button>
        </a>

        {children}
      </div>
    </ProyectComponentStyles>
  );
}

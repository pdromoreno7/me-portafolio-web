/* eslint-disable react/jsx-no-target-blank */
import { ProyectDestacadoStyles } from "./ProyectDestacadoStyles";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function ProyectDestacado({ name, portada, desc, link, more }) {
  return (
    <ProyectDestacadoStyles>
      <SectionTitle heading={name} subheading="Proyecto Destacado" />
      <div className="proDestacado-box">
        <picture className="proDestacado__img">
          <img src={portada} alt={name} />
        </picture>
        <div className="proDestacado__info">
          <Link to={more}>
            <h3 className="proDestacado__info-title">{name}</h3>
          </Link>

          <p className="proDestacado__info-desc">{desc}</p>
          <div className="proDestacado__info-btns">
            <a href={link} target="_blank">
              <button className="proDestacado__link">Wedsite</button>
            </a>
            <Link to={more}>
              <button className="proDestacado__more">Ver mas</button>
            </Link>
          </div>
        </div>
      </div>
    </ProyectDestacadoStyles>
  );
}

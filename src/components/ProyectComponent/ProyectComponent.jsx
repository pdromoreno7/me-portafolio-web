import SectionTitle from "../SectionTitle/SectionTitle";
// import "./ProyectComponent.css";
import { ProyectComponentStyles } from "./ProyectComponentStyles";

export function ProyectComponent({
  title,
  portadamain,
  children,
  description,
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
        {children}
      </div>
    </ProyectComponentStyles>
  );
}

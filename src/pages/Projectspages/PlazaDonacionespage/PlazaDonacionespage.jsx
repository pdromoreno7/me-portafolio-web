/* eslint-disable react/jsx-no-target-blank */
import { ProyectComponent } from "../../../components/ProyectComponent/ProyectComponent";
import PlazaDonacionesView from "../../../assets/images/portada-proyectos/Presentación-plaza-donaciones.png";
import { PlazaDonacionespageStyles } from "./PlazaDonacionespageStyles";
import projects from "../../../assets/data/projects";

const dataPlazaDonaciones = projects[1];
export function PlazaDonacionespage() {
  return (
    <PlazaDonacionespageStyles>
      <ProyectComponent
        title={dataPlazaDonaciones.name}
        portadamain={dataPlazaDonaciones.portada}
        description={dataPlazaDonaciones.desc}
        sitio={dataPlazaDonaciones.sitio}
      >
        <p className="proyectPgae__description">
          <h4>Este proyecto se realizó con las siguientes tecnologías:</h4>
          <br />
          <ul>
            <li>- HTML/CSS</li>
            <li>- Javascript</li>
            <li>- React.Js</li>
            <li>- Aos.Js</li>

            <li>- Styled Components</li>
          </ul>
        </p>
        <p className="proyectPgae__description">
          <h4>Usamos las siguientes herramienta:</h4>
          <br />
          <ul>
            <li>- Figma</li>
            <li>- Notion</li>
            <li>- Discord</li>
            <li>- Photoshop</li>
          </ul>
        </p>
        <p className="proyectPgae__description">
          A continuación presentación de mockups, realizado por mi amigo{" "}
          <a
            href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
            target="_blank"
          >
            Miguel Ruz{" "}
          </a>
          diseñador UX/UI:
        </p>
        <div>
          <img src={PlazaDonacionesView} alt="" />
        </div>
      </ProyectComponent>
    </PlazaDonacionespageStyles>
  );
}

/* eslint-disable react/jsx-no-target-blank */
import { ProyectComponent } from "../../../components/ProyectComponent/ProyectComponent";
import projects from "../../../assets/data/projects";
import skycomeetView from "../../../assets/images/portada-proyectos/skycomeet-view.png";
import { SkycomeetpageStyles } from "./SkycomeetpageStyles";

const dataSkycomeet = projects[0];
export function Skycomeetpage() {
  return (
    <SkycomeetpageStyles>
      <ProyectComponent
        title={dataSkycomeet.name}
        portadamain={dataSkycomeet.portada}
        description={dataSkycomeet.desc}
        sitio={dataSkycomeet.sitio}
      >
        <p className="skyconeet__description">
          <h4>En este proyecto realice:</h4>
          <br />
          Análisis del problema, creación del flujo lógico de la app, aporte al
          diseño y secciones, maquetación de las diferentes secciones de la
          interfaz, lógica para manejar la información mostrada final en la
          tarjeta, creación de formularios, creación de animaciones.
        </p>
        <p className="skyconeet__description">
          <h4>Historia:</h4>
          En noviembre del 2020 me encontraba viendo un proyecto web que había
          realizado un amigo, en ese proyecto mi amigo utilizo la API oficial de
          la NASA para la información que iba a mostrar. Para aquellos días no
          sabía que la NASA brindaba esta herramienta de forma gratuita, así que
          me llamo bastante la atención. Soy fan de la Nasa y su historia, había
          coincidido en un momento en el que tenía una fascinación por la
          astronomía y la astronáutica bien hype.
          <br /> <br />
          Asi que visite la página oficial{" "}
          <a href="https://api.nasa.gov/" target="_blank">
            APIs NASA
          </a>{" "}
          y me encontré que brindaba su banco de imágenes y videos. En ese
          momento me alegre bastante porque me encanta la astrofotografía y
          sabía que no era el único, tengo varios amigos muy fan también. Lo
          primero que se me vino a la mente fue una biblioteca de estas
          imágenes, sabía que la información venia con alguna fecha de esas
          fotografias. Es un tema para un nicho en particular amante de las
          ciencias del espacio, la idea sería poder llegar a nuevas mentes que
          desconocen este mundillo, algunos hasta son escépticos de estas
          imágenes.
          <br /> <br />
          Asi que había que hacer algo para que suene un poco mas llamativo, y
          que las personas quieran entrar al sitio. Entonces vi en un tutorial
          que la información que me daba la API también venia las fechas de las
          imágenes. Pense que podíamos asociar eso a una fecha especial ¿Y que
          más especial que el día que cumple una persona? Le comenté a mi amigo
          la idea y me dijo que la anotara en una parte, eso hice.
          <br /> <br />
          Un año después junto con mi amigo{" "}
          <a href="https://www.linkedin.com/in/rafedev/" target="_blank">
            {" "}
            Rafael Alvarez{" "}
          </a>{" "}
          - desarrollador frontend y
          <a
            href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
            target="_blank"
          >
            {" "}
            Miguel Ruz{" "}
          </a>{" "}
          - diseñador UI. Dimos inicio a este proyecto.
          <br /> <br />
          <p>
            "La idea principal con este proyecto era aprender junto con mis
            amigos y vaya que lo hemos hecho".
          </p>
        </p>
        <br />
        <p className="skyconeet__description">
          <h4>Este proyecto se realizó con las siguientes tecnologías:</h4>
          <br />
          <ul>
            <li>- HTML/CSS</li>
            <li>- Javascript</li>
            <li>- React.Js</li>
            <li>- Redux</li>
            <li>- Axios</li>
            <li>- Styled Components</li>
          </ul>
        </p>
        <p className="skyconeet__description">
          <h4>Usamos las siguientes herramienta:</h4>
          <br />
          <ul>
            <li>- Figma</li>
            <li>- Notion</li>
            <li>- Postman</li>
            <li>- Discord</li>
            <li>- Photoshop</li>
          </ul>
        </p>
        <p className="skyconeet__description">
          <em>Aun estamos implementando mejoras y nuevas funciones.</em>
          <br /> <br /> A continuación presentación de mockups, realizado por mi
          amigo{" "}
          <a
            href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
            target="_blank"
          >
            Miguel Ruz{" "}
          </a>
          diseñador UX/UI:
        </p>
        <div>
          <img src={skycomeetView} alt="" />
        </div>
      </ProyectComponent>
    </SkycomeetpageStyles>
  );
}

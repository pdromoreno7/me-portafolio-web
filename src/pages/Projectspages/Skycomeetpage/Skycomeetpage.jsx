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
      >
        <p className="skyconeet__description">
          En noviembre del 2020 me encontraba viendo un proyecto web que había
          realizado un amigo, en ese proyecto mi amigo utilizo la API oficial de
          la NASA para la información que iba a mostrar, para aquellos días no
          sabía que la NASA brindaba esta herramienta de forma gratuita, así que
          me llamo bastante la atención, soy fan de la organización y su
          historia, había coincidido en un momento en el que tenía una
          fascinación por la astronomía y la astronáutica.
          <br /> <br />
          Asi que visaste la página oficial{" "}
          <a href="https://api.nasa.gov/" target="_blank">
            APIs NASA
          </a>{" "}
          y me encontré que la Nasa brindaba su banco de imágenes y videos, en
          ese momento me alegre bastante porque me encanta la astrofotografía y
          sabía que no era el único, tengo varios amigos muy fan también, así
          que lo primero que se me vino a la mente fue una biblioteca de estas
          imágenes sabía que la información venia con la fecha de esas imágenes.
          Pero sabía que era un tema para un nicho en particular amante de las
          ciencias de espacio y la idea sería poder llegar a mentes nuevas que
          desconchen este mundillo, y algunas exenticas de estas imágenes.
          <br /> <br />
          Asi que había que hacer algo para que suene atractivo, y que las
          personas quieran entrar al sitio. Entonces vi en un tuto que en la
          información que me daba la API, también venia las fechas de las
          imágenes, así que me imaginé con eso que podíamos asociar eso a una
          fecha especial ¿Y que más especial que el día que cumple una persona?
          Entonces le comenté a mi amigo la idea y me dijo que anotara la idea
          en una parte, eso hice.
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
          <strong>
            La idea principal con este proyecto era aprender junto con mis
            amigos y vaya que lo hemos hecho!
          </strong>
        </p>
        <p className="skyconeet__description">
          Este proyecto se realizó con las siguientes tecnologías:
          <br /> <br />
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
          Usamos las siguientes herramienta:
          <br /> <br />
          <ul>
            <li>- Figma</li>
            <li>- Notion</li>
            <li>- Postman</li>
            <li>- Discord</li>
            <li>- Photoshop</li>
          </ul>
        </p>
        <p className="skyconeet__description">
          Aun estamos implementando mejoras y nuevas funciones.
          <br /> A continuación presentación de mockups, realizado por mi amigo{" "}
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

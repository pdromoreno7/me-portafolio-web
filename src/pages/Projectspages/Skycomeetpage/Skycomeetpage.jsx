import { ProyectComponent } from "../../../components/ProyectComponent/ProyectComponent";
import projects from "../../../assets/data/projects";

const dataSkycomeet = projects[0];
export function Skycomeetpage() {
  return (
    <div>
      <ProyectComponent
        title={dataSkycomeet.name}
        portadamain={dataSkycomeet.portada}
        description={dataSkycomeet.desc}
      ></ProyectComponent>
    </div>
  );
}

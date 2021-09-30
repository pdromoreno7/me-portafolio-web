import { v4 as uuidv4 } from 'uuid';

import PlazaDonaciones from '../images/plazaDonaciones.jpg';
import CrisPortafolio from '../images/crisPortfolio.png';
import EcommerceTenis from '../images/ecommerceTenis.png';
import BatatabitImg from '../images/Batatabit.png';
import TodoMountain from '../images/TodoMountain.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Plaza de Donaciones',
    desc:
      'Landing page para visualizar avances de obras, y hacer donaciones para la comunidad Fuente de Poder. Hecho con React.js.',
    img: PlazaDonaciones,
    github: 'https://github.com/pdromoreno7/church-plaza-donaciones',
    sitio: 'https://pdromoreno7.github.io/church-plaza-donaciones/',
  },
  {
    id: uuidv4(),
    name: 'Todo Mountain',
    desc:
      'Una app web para hacer Todos, listas de tareas Check y delete. Hecha en React.Js',
    img: TodoMountain,
    github: 'https://github.com/pdromoreno7/Todo-Mountain',
    sitio: 'https://pdromoreno7.github.io/Todo-Mountain/',
  },
  {
    id: uuidv4(),
    name: 'Portafolio Web',
    desc:
      'Portafolio Web para mi amigo Cristian Vásquez, motion graphics designer. Hecho con HTML, CSS y Javascript',
    img: CrisPortafolio,
    github: 'https://github.com/pdromoreno7/portfolio-vasquez',
    sitio: 'https://pdromoreno7.github.io/portfolio-vasquez/',
  },
  {
    id: uuidv4(),
    name: 'Ecommerce Sneakers',
    desc: 'Maquetación UI de una web ecommerce de tenis ',
    img: EcommerceTenis,
    github: 'https://github.com/pdromoreno7/Ecommerce-Website-Sneakers',
    sitio: 'https://pdromoreno7.github.io/Ecommerce-Website-Sneakers/',
  },
  {
    id: uuidv4(),
    name: 'Batatabit',
    desc: 'Proyecto de maquetación mobile first con Platzi',
    img: BatatabitImg,
    github: 'https://github.com/pdromoreno7/Batatabit',
    sitio: 'https://pdromoreno7.github.io/Batatabit/',
  },
];

export default projects;

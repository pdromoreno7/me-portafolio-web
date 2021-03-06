import styled from "styled-components";

export const ProyectComponentStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .proyectComponent-container {
    margin: 20rem 0;
    width: 100%;
    /* text-align: center; */
  }
  .proyectComponent_box {
    margin: 8rem 0 15rem 0;
    padding: 2rem;
    max-width: 900px;
  }
  .proyectComponent__main {
    padding-top: 10rem;
    height: 100vh;
  }
  .proyectComponent__img {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 4rem;
    /* border: 2px solid var(--gray-1); */
    border-radius: 20px;
    overflow: hidden;
  }
  .proyectComponent__desc-corta {
    margin: 2rem 0;
    p {
      font-size: 16px;
    }
  }
  button[type="submit"] {
    background-color: transparent;
    border: 2px solid var(--gray-1);
    font-size: 13px;
    display: inline-block;
    outline: none;

    padding: 1rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;
    margin-top: 2rem;
    :hover {
      /* background-color: var(--HappyColor); */
      background-color: var(--gray-2);
      /* color: var(--HappyColor);
      border: 2px solid var(--HappyColor); */
    }

    /* background-color: var(--deep-dark) ; color: var(--gray-1) ; font-size: 16px; display: inline-block; outline: none; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; transition: 1s; margin-top: 2rem; :hover { color: var(--HappyColor2) ; } */
  }
  /* @media only screen and (max-width: 768px) {
 
    .proyectComponent__main {
      padding: 10rem 0;

   
    }
  } */
`;

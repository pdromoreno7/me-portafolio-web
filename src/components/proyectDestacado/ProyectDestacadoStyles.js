import styled from "styled-components";

export const ProyectDestacadoStyles = styled.section`
  margin-top: 7rem;
  .proDestacado-box {
    margin-top: 4rem;
    display: flex;
  }
  .proDestacado__img {
    border-radius: 15px;
    overflow: hidden;
    width: 50%;
    margin-right: 2rem;
  }
  .proDestacado__info {
    font-size: 18px;
    width: 50%;
    background-color: var(--deep-dark);
    border-radius: 15px;
    padding: 4rem;
  }
  .proDestacado__info-title {
    margin-bottom: 1rem;
  }
  .proDestacado__info-btns {
    margin-top: 1rem;
  }
  .proDestacado__link {
    background-color: var(--gray-1);
    /* background-color: var(--deep-dark); */
    color: black;
    font-size: 16px;
    display: inline-block;
    outline: none;
    border: 2px solid var(--gray-1);
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;
    margin-top: 2rem;
    margin-right: 2rem;
    :hover {
      /* background-color: var(--HappyColor); */
      background-color: var(--gray-2);
      color: var(--gray-1);
      /* background-color: var(--HappyColor);
      color: var(--deep-dark);
      border: 2px solid var(--HappyColor); */
    }
  }
  .proDestacado__more {
    background-color: transparent;
    border: 2px solid var(--gray-1);
    font-size: 16px;
    display: inline-block;
    outline: none;

    padding: 1rem 2rem;
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
  }
  @media only screen and (max-width: 768px) {
    .proDestacado-box {
      flex-direction: column;
    }
    .proDestacado__img {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2rem;
    }
    .proDestacado__info {
      width: 100%;
      font-size: 15px;
    }
  }
`;

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
`;
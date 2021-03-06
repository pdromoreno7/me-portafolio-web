import styled from "styled-components";

export const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
  .items {
    /* width: 60%; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    /* gap: 1.5rem; */
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 869px) {
    .item {
      /* position: initial; */
      margin-bottom: 1.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      /* gap: 1rem; */
    }
    .title {
      font-size: 2rem;
    }
  }
`;

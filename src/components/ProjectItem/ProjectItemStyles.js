import styled from "styled-components";

export const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    /* border: 3px solid var(--gray-2); */
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    /* height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.4rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .projectItem__info-liks {
    display: flex;
    /* gap: 20px; */
    align-items: center;
    /* margin-bottom: 1rem; */
    /* justify-content: center; */
    a {
      display: flex;
      gap: 10px;
      align-items: center;

      p {
        font-size: 20px;
      }
      svg {
        width: 25px;
        margin-right: 25px;
      }
      :hover {
        path {
          color: var(--HappyColor);
          transition: 1s;
        }
      }
    }
  }
  .projectItem__more {
    background-color: transparent;
    border: 2px solid var(--gray-1);
    font-size: 14px;
    display: inline-block;
    outline: none;

    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;

    :hover {
      /* background-color: var(--HappyColor); */
      background-color: var(--gray-2);
      /* color: var(--HappyColor);
      border: 2px solid var(--HappyColor); */
    }
    /* :hover {
      color: var(--HappyColor);
      transition: 1s;
    } */
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

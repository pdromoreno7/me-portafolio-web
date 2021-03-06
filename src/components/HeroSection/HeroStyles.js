import styled from "styled-components";

export const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 950px;
    width: 100%;

    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-radius: 20px;
    overflow: hidden;
  }
  .hero__info {
    margin-top: 4rem;
    /* margin-top: -18rem; */

    /* text-align: center; */
  }

  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 60px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 10px;
    width: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.8rem;
          /* transform: rotate(-90deg); */
          letter-spacing: 5px;
          margin-bottom: 2rem;

          :hover {
            path {
              color: var(--HappyColor);
              transition: 1s;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    /* .hero__img {
      height: 300px;
    } */
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 5px;
      bottom: -9%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
  /* @media only screen and (max-width: 768px) {
    .hero__img {
      height: 400px;
      source {
        object-fit: cover;
        height: 400px;
      }
    }
  } */
`;

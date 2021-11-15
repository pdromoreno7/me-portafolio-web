import styled from "styled-components";

export const NavMenuStyles = styled.div`
  .navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 6rem;
    background: var(--dark-bg);
    transition: 0.5s;
    box-shadow: 0px 3px 16px -6px #000000;
  }
  /* .nav-active {
    -webkit-box-shadow: 6px 3px 16px -6px #000000;
    box-shadow: 6px 3px 16px -6px #000000;
  } */
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  .nav__logo {
    h2 {
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
      transition: 1s;
      :hover {
        color: var(--HappyColor);
      }
    }
  }
  ul {
    /* max-width: 1200px;
    margin: 0 auto;
    width: 90%; */
    /* text-align: center; */
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gary-1);
      outline: none;
      :hover {
        color: var(--HappyColor);
      }
    }
    .active {
      color: var(--HappyColor);
    }
  }
  .mobile-menu-icon {
    position: absolute;

    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;

    svg {
      stroke: var(--HappyColor);
    }
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .navbar {
      padding: 2rem 3.5rem;
    }
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }

    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      text-align: center;

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
  @media only screen and (max-width: 414px) {
    .navbar {
      padding: 2rem 2.5rem;
    }
  }
`;

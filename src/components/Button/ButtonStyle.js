import styled from "styled-components";

export const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--HappyColor)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: ${(props) =>
      props.outline
        ? "2px solid var(--gray-1)"
        : "2px solid var(--HappyColor)"};
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
    transition: 1s;
    :hover {
      background-color: ${(props) =>
        props.outline ? "transparent" : "var(--black)"};
      color: ${(props) =>
        props.outline ? "var(--HappyColor)" : "var(--gray-1)"};
      border: ${(props) =>
        props.outline
          ? "2px solid var(--HappyColor)"
          : " 2px solid var(--black)"};
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

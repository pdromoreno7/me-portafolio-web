import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import { PText } from "../PText/PText";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  /* gap: 2rem; */
  border-radius: 8px;
  margin-bottom: 2rem;
  p {
    :hover {
      color: var(--HappyColor);
      transition: 1s;
    }
  }
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <ItemStyles data-aos="fade">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}

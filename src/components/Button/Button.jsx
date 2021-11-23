import React from "react";
import { Link } from "react-router-dom";

import { ButtonStyle } from "./ButtonStyle";

export function Button({ btnLink, btnText = "Boton", outline = false }) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

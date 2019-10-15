import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => {
  const [pad, setPad] = useState(15);

  return (
    <header
      onClick={() => setPad(pad + 15)}
      css={css`
        background-color: #333;
        padding: ${pad}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🐶
      </span>
    </header>
  );
};

export default NavBar;

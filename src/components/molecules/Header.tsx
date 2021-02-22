import React from "react";

import HeaderLink from "../atoms/HeaderLink";
import { HEADER_LINKS } from "src/constants";

import logo from "../../assets/logo.png";

const Header: React.FC = (): JSX.Element => (
  <header className="mb-5">
    <img src={logo} alt="logo" />
    {HEADER_LINKS.map((linkItem) => (
      <HeaderLink
        to={`/${linkItem}`}
        label={linkItem.toUpperCase()}
        key={linkItem}
      />
    ))}
  </header>
);

export default Header;

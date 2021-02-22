import React from "react";

import HeaderLink from "../atoms/HeaderLink";
import { HEADER_LINKS } from "src/constants";

const Header: React.FC = (): JSX.Element => (
  <>
    {HEADER_LINKS.map((linkItem) => (
      <HeaderLink
        to={`/${linkItem}`}
        label={linkItem.toUpperCase()}
        key={linkItem}
      />
    ))}
  </>
);

export default Header;

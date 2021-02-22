import React from "react";
import { Link } from "react-router-dom";

type HeaderLinkProps = {
  label: string;
  to: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ label, to }): JSX.Element => (
  <Link to={to} className="p-1 m-3 bg-white border-2 rounded-md">
    {label}
  </Link>
);

export default HeaderLink;

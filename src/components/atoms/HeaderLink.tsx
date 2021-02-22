import React from "react";
import { Link } from "react-router-dom";

type HeaderLinkProps = {
  label: string;
  to: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ label, to }): JSX.Element => (
  <Link to={to} className="p-1 bg-white border-2 rounded-md m-3">
    {label}
  </Link>
);

export default HeaderLink;

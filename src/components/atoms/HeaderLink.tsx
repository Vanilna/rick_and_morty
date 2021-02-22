import React from "react";
import { Link } from "react-router-dom";

type HeaderLinkProps = {
  label: string;
  to: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ label, to }): JSX.Element => (
  <Link to={to}>{label}</Link>
);

export default HeaderLink;

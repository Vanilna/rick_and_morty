import React from "react";

const SectionHeader: React.FC = ({ children }): JSX.Element => (
  <h3 className="text-3xl text-center font-bold text-white">{children}</h3>
);

export default SectionHeader;

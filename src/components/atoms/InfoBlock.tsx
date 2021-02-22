import React from "react";

const InfoBlock: React.FC = ({ children }): JSX.Element => (
  <ul className="text-1xl font-semibold p-2.5 border-2 rounded-md bg-white">
    {children}
  </ul>
);

export default InfoBlock;

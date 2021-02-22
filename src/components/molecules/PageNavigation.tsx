import React from "react";

import Button from "../atoms/Button";

type PageNavigationProps = {
  handleClick: (direction: "forward" | "back", maxPage: number) => void;
  maxPage: number | undefined | null;
};

const PageNavigation: React.FC<PageNavigationProps> = ({
  handleClick,
  maxPage,
}): JSX.Element => {
  if (!maxPage) {
    return <></>;
  }
  return (
    <>
      <Button clickHandler={() => handleClick("back", maxPage)} label="prev" />
      <Button
        clickHandler={() => handleClick("forward", maxPage)}
        label="next"
      />
    </>
  );
};

export default PageNavigation;

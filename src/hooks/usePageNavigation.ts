import { useState } from "react";

type usePageNavigationReturnType = [
  number,
  (direction: "forward" | "back", maxPage: number) => void
];

const usePageNavigation = (): usePageNavigationReturnType => {
  const [page, setPage] = useState(1);

  const handlePageChange = (direction: string, maxPage: number): void => {
    setPage((prev) => {
      const next = direction === "forward" ? prev + 1 : prev - 1;
      return next <= maxPage && next > 0 ? next : prev;
    });
  };

  return [page, handlePageChange];
};

export default usePageNavigation;

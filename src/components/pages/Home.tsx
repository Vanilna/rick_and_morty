import React from "react";

import { CATEGORIES } from "src/constants";
import HomeScreenCard from "../atoms/HomeScreenCard";

const Home = () => (
  <main className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
    {CATEGORIES.map((category) => (
      <HomeScreenCard category={category} key={category} />
    ))}
  </main>
);

export default Home;

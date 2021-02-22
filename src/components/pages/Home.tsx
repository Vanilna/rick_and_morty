import React from "react";

import HomeScreenCard from "../atoms/HomeScreenCard";
import { CATEGORIES } from "src/constants";

const Home = () => (
  <main className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
    {CATEGORIES.map((category) => (
      <HomeScreenCard category={category} key={category} />
    ))}
  </main>
);

export default Home;

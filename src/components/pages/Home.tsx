import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <li>
      <Link to="/characters">Characters</Link>
    </li>
    <button>Episodes</button>
    <button>Locations</button>
  </div>
);

export default Home;

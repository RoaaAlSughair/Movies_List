import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return <nav>
    <h1>MoviesList</h1>
    <span>
      <Link to="/favourites">favourites</Link>
    </span>
  </nav>;
}

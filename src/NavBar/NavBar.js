import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1>MoviesList</h1>
      <span>
        <Link to="/favourites">
            <BsFillHeartFill />
        </Link>
      </span>
    </nav>
  );
}

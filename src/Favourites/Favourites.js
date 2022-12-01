import React from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";

export default function Favourites() {
  return (
    <div className="favourites">
      <Link to="/">Back</Link>
      Favourites
    </div>
  );
}

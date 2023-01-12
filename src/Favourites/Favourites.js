import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Favourites.css";

export default function Favourites() {
  const [faves, setFaves] = useState([]);
  let arr = JSON.parse(localStorage.getItem("liked"));

  const handleClick = (e) => {
    let i = arr.indexOf(e.target.parentNode.dataset.id);
    arr.splice(i, 1);
    localStorage.setItem("liked", JSON.stringify(arr));
  };

  useEffect(() => {
    Promise.all(
      arr.map((el) =>
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${el}?api_key=1bfa430aada4409bfa6a3c5528128e8a`
          )
          .then((res) => res.data)
          .catch((err) => {
            throw err;
          })
      )
    )
      .then((res) => {
        setFaves(res);
      })
      .catch((err) => {
        throw err;
      });
  }, [arr]);

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h2>Favourites</h2>
      <div className="wrapper">
        {faves.length
          ? faves.map((el) => {
              return (
                <div className="movie_card" data-id={el.id}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + el.poster_path}
                    alt={el.title + " poster"}
                    height="300"
                  />
                  <h4>{el.title}</h4>
                  <p>{el.vote_average} / 10</p>
                  <button onClick={handleClick}>Remove from fave</button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

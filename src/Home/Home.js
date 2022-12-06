import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page_num, setPage_num] = useState(1);

  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?page=${page_num}&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
    )
    .then((res) => {
      setMovies(res.data.results);
    })
    .catch((err) => {
      throw err;
    });

  return (
    <div className="home">
      {movies.map((el) => {
        return <div>
          <img src={el.poster_path} alt={el.title + ' poster'}></img>
          <p>{el.title}</p>
          <p>{el.vote_average} / 10</p></div>;
      })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page_num, setPage_num] = useState(1);

  const handleClick = (e) => {
    console.log(page_num);
    setPage_num(e.target.dataset.num);
  };

  // Solve the icon-in-button bubbling problem
  const addToFavorite = (e) => {
    console.log(e.target.parentNode.dataset.id);
    if (localStorage.getItem("liked")) {
      let arr = JSON.parse(localStorage.getItem("liked"));
      arr.push(e.target.parentNode.dataset.id);
      localStorage.setItem("liked", JSON.stringify(arr));
    } else localStorage.setItem("liked", JSON.stringify([e.target.parentNode.dataset.id]));
  }

  useEffect(() => {
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
  }, [page_num]);

  return (
    <div className="home">
      {movies.map((el) => {
        return (
          <div data-id={el.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + el.poster_path}
              alt={el.title + " poster"}
              height="300"
            />
            <p>{el.title}</p>
            <p>{el.vote_average} / 10</p>
            <button onClick={addToFavorite}>Add to fave</button>
          </div>
        );
      })}
      <ul>
        <li>
          <a
            data-num="1"
            onClick={handleClick}
          >
            1
          </a>
        </li>
        <li>
          <a
            data-num="2"
            onClick={handleClick}
          >
            2
          </a>
        </li>
        <li>
          <a
            data-num="3"
            onClick={handleClick}
          >
            3
          </a>
        </li>
      </ul>
    </div>
  );
}

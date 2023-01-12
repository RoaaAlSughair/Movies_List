import React, { useState, useEffect } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { TbHeartPlus, TbHeartMinus } from "react-icons/tb";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page_num, setPage_num] = useState(1);

  const moveToPage = (e) => {
    setPage_num(e.target.dataset.num);
  };

  const onePageBackwards = () => {
    setPage_num(page_num - 1);
  }

  const onePageForwards = () => {
    setPage_num(page_num + 1);
  }

  // Solve the icon-in-button bubbling problem
  const addToFavorite = (e) => {
    if (localStorage.getItem("liked")) {
      let arr = JSON.parse(localStorage.getItem("liked"));
      arr.push(e.target.parentNode.dataset.id);
      localStorage.setItem("liked", JSON.stringify(arr));
    } else
      localStorage.setItem(
        "liked",
        JSON.stringify([e.target.parentNode.dataset.id])
      );
  };

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
    <div className="container">
      <div className="wrapper">
        {movies.map((el) => {
          return (
            <div className="movie_card" data-id={el.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + el.poster_path}
                alt={el.title + " poster"}
                height="300"
              />
              <h4>{el.title}</h4>
              <p>{el.vote_average} / 10</p>
              <button onClick={addToFavorite}>Add to fave</button>
            </div>
          );
        })}
      </div>
      <ul className="pagination">
        {page_num > 1 ? (
          <li>
            <button onClick={onePageBackwards}>
              <BsChevronDoubleLeft />
            </button>
          </li>
        ) : null}
        <li>
          <button data-num="1" onClick={moveToPage}>
            1
          </button>
        </li>
        <li>
          <button data-num="2" onClick={moveToPage}>
            2
          </button>
        </li>
        <li>
          <button data-num="3" onClick={moveToPage}>
            3
          </button>
        </li>
        {page_num < 3 ? (
          <li>
            <button onClick={onePageForwards}>
              <BsChevronDoubleRight />
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

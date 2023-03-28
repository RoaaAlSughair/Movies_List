import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import axios from 'axios';
import './MovieDetails.css';

export default function MovieDetails() {
  const [data, setData] = useState({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const getData = async (id) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="container">
      <Link to="/">Back</Link>
      {Object.keys(data).length > 0 ? (
        <div key={data.id} className="details-wrapper">
          <section>
            <img
              src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
              alt={data.title + ' poster'}
            />
          </section>
          <section className="details">
            <h1>{data.title}</h1>
            <p>{data.release_date}</p>
            <span>
              <BsFillStarFill></BsFillStarFill>
              <p>{data.vote_average}</p>
            </span>
            <ul>
              {data.production_companies.map((el) => {
                return <li key={el.id}>{el.name}</li>;
              })}
            </ul>
            <ul>
              {data.genres.map((el) => {
                return <li key={el.id}>{el.name}</li>;
              })}
            </ul>
            <p>{data.overview}</p>
          </section>
        </div>
      ) : null}
    </div>
  );
}

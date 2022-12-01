import React from "react";
import axios from "axios";
import "./Home.css";

axios
.get(
  "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
)
.then((res) => {
  console.log(res);
})

export default function Home() {
  return (
    <div className="home">
      Home
    </div>
  );
}

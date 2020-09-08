import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { requests } from "../request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length) - 1
        ]
      );
    }
    fetchData();
    // return () => {
    //   cleanup;
    // };
  }, []);

  function Truncate(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie.original_name || movie?.name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {Truncate(String(movie?.overview), 150)}
        </h1>
      </div>
      <div className="banner--fadeBoottom" />
    </header>
  );
};

export default Banner;

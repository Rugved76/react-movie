import React from 'react';
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  
  let navigate = useNavigate();

  const openMovie = (id) => {
    navigate("/" + id)
  }
  
  return (
    <div className="movie" key={imdbID} onClick={ () => openMovie(imdbID)}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
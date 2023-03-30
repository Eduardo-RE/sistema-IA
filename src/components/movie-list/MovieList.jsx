import React from "react";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Sistema experto</h1>
      <p className="question">¿Que tipo de pelicula deseas?</p>
      <div className="button-container">
        <button className="buttons">Accion</button>
        <button className="buttons">Drama</button>
        <button className="buttons">Comedia</button>
        <button className="buttons">Ciencia ficcion</button>
        <button className="buttons">Terror</button>
        <button className="buttons">Musical</button>
      </div>
    </div>
  );
};

export default MovieList;

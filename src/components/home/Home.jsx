import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Sistema experto</h1>
      <p className="question">¿Que tipo de pelicula deseas?</p>

      <div className="button-container">
        <Link to="/list">
          <button className="buttons">Accion</button>
        </Link>
        <Link to="/list">
          <button className="buttons">Drama</button>
        </Link>
        <Link to="/list">
          <button className="buttons">Comedia</button>
        </Link>
        <Link to="/list">
          <button className="buttons">Ciencia ficcion</button>
        </Link>
        <Link to="/list">
          <button className="buttons">Terror</button>
        </Link>
        <Link to="/list">
          <button className="buttons">Musical</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

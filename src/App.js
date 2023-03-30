import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./components/home/Home";
import MovieList from "./components/movie-list/MovieList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

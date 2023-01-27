import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <BrowserRouter basename= {window.location.pathname ||""}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id"  element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

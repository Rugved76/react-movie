import React, { useState, useEffect } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=95fb18a5";

const Index = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const term = localStorage.getItem('searchTerm') ? localStorage.getItem('searchTerm') : "";
        setSearchTerm(term);
        searchMovies(term);
    }, []);

    useEffect(() => {
        localStorage.setItem('searchTerm', searchTerm);
    }, [searchTerm]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
        <div className="allMovies">
            <h1 className="title is-size-1 has-font-weight-bold has-text-white" style={{cursor:'pointer',letterSpacing:'1.5px'}}>
                Cinema Paradiso</h1>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            <div>
                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Index;

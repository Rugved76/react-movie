import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://www.omdbapi.com/?apikey=95fb18a5";

export default function SingleMovie() {

    const [movie, setMovie] = useState();
    const { id: movieId } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getMovie(movieId);
    }, []);

    const getMovie = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        if (data.Response !== "False") {
            setMovie(data);
        }
    };

    return (!movie) ?
        (
            <h1 style={{ color: 'white', padding: '30rem 30rem' }}> Loading...</h1>
        ) : (
            <div className="singleMovie">
                <div className="container">
                    <br />
                    <button className="button is-outlined is-white" onClick={() => navigate("/")}>Go Back</button>
                    <br /><br />
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <h1 className="title">{movie.Title}</h1>
                        </div>
                        <div className="column is-6">
                            <p>{movie.Type} - {movie.Genre}</p>
                            <p><strong>Released:</strong> {movie.Released}</p>
                        </div>
                        <div className="column is-4">
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div className="column is-8">
                            <p> <strong>Director:</strong> {movie.Director} </p>
                            <p> <strong>Writer:</strong> {movie.Writer}</p>
                            <hr />
                            <p> <strong>Actors:</strong> {movie.Actors} </p>
                            <hr />
                            <p> {movie.Plot} </p>
                            <hr />
                            <p><strong>Rating Metascore:</strong> {movie.Metascore}</p>
                            <p><strong>Rating IMBD:</strong> {movie.imdbRating} from {movie.imdbVotes} votes</p>
                            <p><strong>{movie.Rated}</strong></p>
                            <p><strong>{movie.Runtime}</strong></p>
                            <hr />
                            <p> <strong>Awards:</strong> {movie.Awards} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

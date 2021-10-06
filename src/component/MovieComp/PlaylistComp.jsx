import React from "react";
import { Link } from "react-router-dom";

const PlaylistComp = (props) => {
  let genres = props.genres;
  return (
    <div className="card mb-3" style={{ maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-3">
          <img src={`https://image.tmdb.org/t/p/w500//${props.poster_path}`} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <Link to={`/movies/${props.id}`} className="card-title h5 text-decoration-none">{props.title}</Link>
            <p className="card-text">
              {genres.map(genre => <small key={genre.id} className="badge bg-success me-1">{genre.name}</small>)}
            </p>
            <a href={props.homepage} className="btn btn-danger">Tonton</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistComp;

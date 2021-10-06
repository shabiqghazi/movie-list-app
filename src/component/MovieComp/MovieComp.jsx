import React from "react";
import { Link } from "react-router-dom";

const MovieComp = (props) => {
  return (
      <div className="col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500//${props.imgpath}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link className="card-title h5 text-decoration-none" to={`/movies/${props.movieId}`}>{props.title}</Link>
        </div>
        <div className="card-footer">
          <small className="text-dark">Vote : {props.vote}</small>
        </div>
      </div>
      </div>
  );
};

export default MovieComp;
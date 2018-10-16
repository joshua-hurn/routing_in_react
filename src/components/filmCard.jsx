import React from "react";
import { Link } from "react-router-dom";

const FilmCard = props => {
  return (
    <div className="col-md-4 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.film.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.film.director}
          </h6>
          <p className="card-text">{props.film.description}</p>
          <Link to={`/films/${props.film.id}`} className="btn btn-primary btn-block">
            Show Details!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;

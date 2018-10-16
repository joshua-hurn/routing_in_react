import React from "react";
import { Link } from 'react-router-dom';

const PeopleCard = props => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.person.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.person.gender}
          </h6>
          <p className="card-text">{props.person.age}</p>
          <Link to={`/people/${props.person.id}`} className="btn btn-primary btn-block">
            Show Post Body!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;

import React from "react";
import FilmCard from "./filmCard";

class Films extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("http://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }))
      .catch(e => console.log(`${e}`));
  }

  renderFilms() {
    return this.state.films.map(film => {
      return <FilmCard film={film} key={film.id} />;
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
}

export default Films;

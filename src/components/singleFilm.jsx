import React from "react";

class singleFilm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(film => this.setState({ film }))
      .catch(e => console.log("There was an error:"`${e}`));
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <h1>{this.state.film.title}</h1>
          <p>{this.state.film.description}</p>
        </div>
      </div>
    );
  }
}

export default singleFilm;

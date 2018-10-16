import React from "react";

class singlePerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(person => this.setState({ person }))
      .catch(e => console.log("There was an error:"`${e}`));
  }

  render() {
    return (
      <div className="container mx-1">
        <div className="row mt-4">
          <h1>{this.state.person.name}</h1>
        </div>
        <div className="row mt-4">
          <h5>Age: {this.state.person.age}</h5>
        </div>
      </div>
    );
  }
}

export default singlePerson;

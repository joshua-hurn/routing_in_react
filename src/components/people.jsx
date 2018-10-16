import React from "react";
import PeopleCard from './peopleCard'

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("http://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(people => this.setState({ people }))
      .catch(e => console.log(`${e}`));
  }

  renderPeople() {
    return this.state.people.map(person => {
      return <PeopleCard person={person} key={person.id} />;
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderPeople()}</div>
      </div>
    );
  }
}

export default People;

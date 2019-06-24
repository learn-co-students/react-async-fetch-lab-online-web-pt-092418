import React from 'react';

class App extends React.Component {

  state = {
    peopleInSpace: []
  }


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }

  render() {
    return (
      <div>
        <li>{this.state.peopleInSpace.map(person => person.name)}</li>
      </div>
    )
  }
}

export default App

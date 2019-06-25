import React, { Component } from 'react';

class App extends Component {

  state = {
    people: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => {
      debugger
      this.setState({
        people: data.people
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, id) => {
            return <h3 key={id}>{person.name}</h3>
          }
        )}
      </div>
    )
  }
}

export default App

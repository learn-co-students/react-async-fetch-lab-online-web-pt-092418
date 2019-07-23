// create your App component here
import React, { Component } from "react";

class App extends Component {
    
      
      state = {
        listOfPeople: []
      };
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listOfPeople: data.people
                })
            })
    };
        render(){
            return (
                <div>
                    {this.state.listOfPeople.map(person => person.name)}
                </div>
            )
        };
    }

    export default App
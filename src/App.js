import React, {Component} from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }

    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    peopleInSpace: result.people
                })
            })
    }
}

export default App
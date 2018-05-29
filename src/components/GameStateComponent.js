import React, { Component } from 'react';

class GameStateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {'winningColor': '???'}
    }
    componentDidMount() {
        this.LoadWinningColor()
            .then(res => this.setState({'winningColor': res}))
            .catch(err => console.log("Error in getting result: " + err));
    }
    LoadWinningColor = async () => {
        const response = await fetch('http://localhost:8080/game');
        const body = await response.text();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
    };

    render() {
        return (
            <p className="App-state">
                Currently winning colour is: {this.state["winningColor"]}
            </p>
        )
    }

}

export default GameStateComponent;
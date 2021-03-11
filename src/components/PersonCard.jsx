import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ageCount: this.props.age
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="personCard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.ageCount}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.increment }>Birthday Button For {this.props.firstName}</button>
                </div>
            </div>
        );
    }

    increment = () => {
        this.setState({ageCount: this.state.ageCount + 1});
    }

}

export default PersonCard;
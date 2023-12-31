import React from "react";

export class ClassComp extends React.Component{
    render(){
        return <p> My First Class Component</p>
    }
}

//adding state to a class component
export class ClickCountButton extends React.Component {
    state = {
        count: 0
    };

    onClick() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <button onClick={this.onClick.bind(this)}>
                You Clicked {this.state.count} times.
            </button>
        );
    }
}

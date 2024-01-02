import React from "react";

export class ClassComp extends React.Component{
    render(){
        return <p> This is my first Class Component.</p>
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
                You Clicked Class Component {this.state.count} times.
            </button>
        );
    }
}

// ALTERNATIVE WAY, long way with const in google drive notes
import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
//notes from W3Schools
// we are destructuring the returned values from useState.

// The first value, color, is our current state.

// The second value, setColor, is the function that is used to update our state.

export function FavoriteColor() {
    const [color, setColor] = useState("black");
    const [ContainerColor, setContainerColor] = useState('');

    const resetColor = () => {
        setColor('...');
        ContainercColor('black');
    };

    return (
        <>
        <div class="WrapContainer"></div>
        <div class = {'ButtonContainer '}style={{ backgroundColor: containerColor }}>
            <h1 style= {{ color: 'whitesmoke' }} >My favorite color is {color}!</h1>
            <button class="ColorButton" onClick={resetColor} >
                Reset
            </button>
            <button class="ColorButton" onClick={() => setColor("red") }>
                Red
            </button><br></br>
            <button class="ColorButton" onClick={() => setColor("orange")}>
                Orange
            </button>
            <button class="ColorButton" onClick={() => setColor("yellow")}>
                Yellow
            </button>
            <br></br>
            <button class="ColorButton" onClick={() => setColor("green")}>
                Green
            </button>
            <button class="ColorButton" onClick={() => setColor("blue")}>
                Blue
            </button>
            <br></br>
            <button class="ColorButton" onClick={() => setColor("indigo")}>
                Indigo
            </button>
            <button class="ColorButton" onClick={() => setColor("violet")}>
                Violet
            </button>
        </div>
        </>
    )
}

//never directly update state like color="red"

// this code below must be dated because i got error messages having to do with react dom, until i deleted it
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
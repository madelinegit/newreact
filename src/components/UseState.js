import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
//notes from W3Schools
// we are destructuring the returned values from useState.

// The first value, color, is our current state.

// The second value, setColor, is the function that is used to update our state.

export function FavoriteColor() {
    const [color, setColor] = useState("...");
    const [ContainerColor, setContainerColor] = useState('gray');

    const resetColor = () => {
        setColor('...');
        setContainerColor('gray');
    };

    return (
        <>
        <div class=""></div>
        <div class = {'ButtonContainer'}style={{ backgroundColor: ContainerColor }}>
            <h1 style= {{ color: 'whitesmoke' }} >My favorite color is {color}!</h1>
            <button class="ColorButton" onClick={resetColor} >
                Reset
            </button>
            <button class="ColorButton" onClick={() => { setColor("red"); setContainerColor("red"); }}>
                Red
            </button><br></br>
            <button class="ColorButton" onClick={() => { setColor("orange"); setContainerColor("orange"); }}>
                Orange
            </button>
            <button class="ColorButton" onClick={() => { setColor("yellow"); setContainerColor("yellow"); }}>
                Yellow
            </button>
            <br></br>
            <button class="ColorButton" onClick={() => { setColor("green"); setContainerColor("green"); }}>
                Green
            </button>
            <button class="ColorButton" onClick={() => { setColor("blue"); setContainerColor("blue"); }}>
                Blue
            </button>
            <br></br>
            <button class="ColorButton" onClick={() => { setColor("indigo"); setContainerColor("indigo"); }}>
                Indigo
            </button>
            <button class="ColorButton" onClick={() => { setColor("violet"); setContainerColor("violet"); }}>
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
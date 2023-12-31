import React, { useState } from "react";

export const ButtonClickerFunction = () => {
    const [count, setCount] = useState(0);

    const clickEvent= () => {
        setCount(count + 1);
    };

    const ComponentFunc = (
        <div>
            <button onClick={clickEvent}>You Clicked Function {count} times </button>
        </div>
    );
    console.log('ComponentFunc:', ComponentFunc);
    console.log('Count:', count);
    return { ComponentFunc, count };
};
//now the click count is returned as its own variable to app.js,
//changed the function, cleaner in general but also this way the
//variable could get passed out and exist outside of the func...



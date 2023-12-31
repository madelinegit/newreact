import React, { useState } from "react";

export const ButtonClickerFunction = () => {
  // Define state using the useState hook, which is part of the react API
    const [count, setCount] = useState(0);

  // Render component UI and use state by returning so i think that
  //returns the Original Tree that then gets duplicated
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>You Clicked Function {count} times </button>
    </div>
    );
};

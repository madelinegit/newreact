import React from 'react';

export function TopRight() {
    // const TopRightStyle ={
    //     border: 1px solid,
    // };
    //inline styling does not work as i expected
    //had put style={TopRightStyle} in the div class below
    return (
    <container class="TopRight" >
        {/* <p>Note That in JSX...</p>
        <li>HTML is contained in Divs</li>
        <li>Topright class defined in TopRight.jsx</li> */}
        <h2> Details about this page...</h2>
        <li>Created functional & class components</li>
        <li>Performed normal & default exports</li>
        <li>Default import renamed</li>
        <li>Mix of inline style & stylesheet (I prefer stylesheet)</li>
        <li>Flexbox & wraps utilized</li>
        <li>Name links to Linkedin</li>
        <li>Logo links to project repo </li>

    </container>
    );
}
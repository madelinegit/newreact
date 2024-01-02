import React from 'react';

export function TopRight() {
    // const TopRightStyle ={
    //     border: 1px solid,
    // };
    //inline styling does not work as i expected
    //had put style={TopRightStyle} in the div class below
    return (
    <container class="TopRight" >
        <p>Note That in JSX...</p>
        <li>HTML is contained in Divs</li>
        <li>Topright class defined in TopRight.jsx</li>
    </container>
    );
}
import React from "react";

//from react documentation
const user = {
    name: 'Madeline Gall',
    imageUrl: 'avatar.jpg',
    imageSize: 120,
    // unit of measurement??^
};

export default function Profile() {
    // const containerStyle ={
    //     // textAlign: 'left',
    // }
const containerStyle = {
    display: 'flex',  // made name & pic go next to each other
};
const nameStyle = {
    textDecoration: 'none', // remove underline
}

return (
    <div style ={containerStyle}>
        <a href="https://linkedin.com/in/madelinemarie" style= { nameStyle } className="Avatar">
            {/*inline nameStyle THERE not in the H1 */}
            <h1>{user.name}</h1>
            {/* <container ClassName="AvatarPic"> */}
        </a>
            <img  ClassName="AvatarPic" src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                width: user.imageSize,
                // height: user.imageSize,
                //removed to fix object fit
                }}
            >
            </img>

        {/* </container> */}
    </div>
);
}
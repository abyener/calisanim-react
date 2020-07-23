import React from 'react';

function Avatar(props) {
    const imgUrl = props.src !== "" ? props.src : 'dummy-profile-pic.png'

    return (
        <img className={`avatar ${props.className}`}
            src={require(`../dist/images/${imgUrl}`)}
            alt={props.alt || 'avatar'} />
    )
}
export default Avatar
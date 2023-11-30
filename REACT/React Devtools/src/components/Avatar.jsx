import React from "react";
import contacts from "../contacts";

function Avatar(props) {
    return <img className="circle-img" src={contacts[0].imgURL} alt="avatar_img" />
}

export default Avatar;
import React from "react";
import Avatar from "./Avatar";
import contacts from "../contacts";
import Detail from "./Detail";


function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailinfo={props.tel} />
        <Detail detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;

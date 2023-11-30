import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+52 345,56657"
      email="er@beondce.gmamilc"
    />
    <Card
      name="Jack Bauer"
      img="https://th.bing.com/th/id/OIP.ZtAmF1QdeGDmYGLzylTXnwHaJO?w=148&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      tel="+67 687 3478"
      email="re@ddjfk.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+23 4546 678"
      email="tr@jgldj.com"
    />
  </div>,
  document.getElementById("root")
);


import React from "react";

import "./Hello.css";

function Hello(prop) {
  const { name, age } = prop;
  return (
    <>
      <p>Hello From</p>
      <h1 className="name">{name}</h1>
      <p>My Age is :</p>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>{age}</h1>
    </>
  );
}

export default Hello;

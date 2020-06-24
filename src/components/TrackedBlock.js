import React from "react";

export default function(props) {
  const id = props.id;
  const children = props.children;
  const className = "jumbotron p-3";
  const style = { backgroundColor: "rgba(255,255,255,0.1)" };
  return (
    <div className={className} id={id} style={style}>
      {children}
    </div>
  );
}

import React from "react";

// import "../css/Jumbotron.css";

export default function(props) {
  const { className, style, children, ...cprops } = props;
  const className_ = "jumbotron p-3" + (className ? " " + className : "");
  const style_ = { backgroundColor: "rgba(255,255,255,0.1)", ...(style || {}) };
  return (
    <div className={className_} style={style_} {...cprops}>
      {children}
    </div>
  );
}

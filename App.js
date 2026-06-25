import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "heading" },
//   "Hello World from React",
// );

const Description = () => (
  <p id="description" className="description">
    Here goes my description
  </p>
);

const title = <p>Box Office</p>;

const Heading = () => (
  <div className="container">
    <div className="title">
      <div className="logo">🎬</div>
      {title}
    </div>
    <div className="search">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="avatar">👤</div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

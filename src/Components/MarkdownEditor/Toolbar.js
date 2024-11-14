import React from "react";
import Button from "react-bootstrap/Button";

function Toolbar({ clickHandler }) {
  return (
    <div className="flex justify-around mb-4">
      <button className="btn" data-md-type="header">
        <i className="fas fa-heading"></i>
      </button>
      <button className="btn" data-md-type="bold">
        <i className="fas fa-bold"></i>
      </button>
      <button className="btn" data-md-type="italic">
        <i className="fas fa-italic"></i>
      </button>
      <button className="btn" data-md-type="quote">
        <i className="fas fa-quote-right"></i>
      </button>
      <button className="btn" data-md-type="code">
        <i className="fas fa-code"></i>
      </button>
      <button className="btn" onClick={clickHandler}>
        <i className="fas fa-file-download"></i>
      </button>
    </div>
  );
}

export default Toolbar;

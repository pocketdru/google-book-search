import React from "react";

function SaveBtn({ onClick, id }) {
    return (
      <button onClick={onClick} id={id} className="btn btn-light">
        Save 
      </button>
    );
  }
  
  export default SaveBtn;
import React from "react";

function SaveBtn({ onClick, value }) {
    return (
      <button onClick={onClick} id="save" className="btn btn-light" value={value}>
        Save 
      </button>
    );
  }
  
  export default SaveBtn;

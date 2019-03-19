import React from "react";

function SaveBtn({ onClick }) {
    return (
      <button onClick={onClick} id="save" className="btn btn-light">
        Save 
      </button>
    );
  }
  
  export default SaveBtn;
import React from "react";

function ViewBtn({ onClick }) {
    return (
      <button onClick={onClick} id="view" className="btn btn-info">
        View
      </button>
    );
  }
  
  export default ViewBtn;
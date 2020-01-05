import React from "react";
import "./style.css";
// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <div>
      <h3 className="display">Books Search</h3>
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
    </div>
  );
}

export default Input;

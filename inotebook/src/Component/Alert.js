import React from "react";

function Alert(props) {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.msg}
      </div>
    </div>
  );
}

export default Alert;

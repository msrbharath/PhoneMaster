import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-12 mx-auto my-2 text-center text-title">
        <h4 className="text-capitalize font-weight-bold">
          {name}
        </h4>
      </div>
    </div>
  );
}

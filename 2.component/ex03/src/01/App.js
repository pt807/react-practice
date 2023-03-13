import React from "react";

export default function () {
  return (
    <div>
      <h1
        onClick={(e) => {
          console.log("dd");
        }}
        style={{ cursor: "pointer" }}
      >
        Inline Header
      </h1>
    </div>
  );
}

import React, { Fragment } from "react";
import spinner from "../../img/loader.gif";

export default () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    <img
      src={spinner}
      style={{ width: "20px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </div>
);

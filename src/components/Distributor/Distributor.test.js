import React from "react";
import ReactDOM from "react-dom";
import Distributor from "./Distributor";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Distributor />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});

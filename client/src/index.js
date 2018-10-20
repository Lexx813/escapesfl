import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/styles.css";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();

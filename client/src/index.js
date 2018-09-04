import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();

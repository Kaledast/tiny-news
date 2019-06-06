import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import useGlobalState from "./store/useGlobalState";
import Context from "./store/Context";
import * as serviceWorker from "./serviceWorker";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();

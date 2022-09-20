import { render } from "yeap/web";
import { Route, Router } from "yeap-router";
import { App } from "./app";
import "./index.css";

function E404() {
  return <h1>Not Found</h1>;
}

render(
  <Router>
    <Route path="/" component={App} />
    <Route path="*" component={E404} />
  </Router>,
  document.querySelector("#app")!
);

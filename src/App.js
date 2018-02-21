import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Digital from "./pages/Digital";
import Printmaking from "./pages/Printmaking";
import Collage from "./pages/Collage";
const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/digital" component={Digital} />
      <Route exact path="/printmaking" component={Printmaking} />
	  <Route exact path="/collage" component={Collage} />
    </div>
  </Router>;
export default App;

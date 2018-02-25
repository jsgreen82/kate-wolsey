import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/NavPills";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Digital from "./pages/Digital/Digital";
import Printmaking from "./pages/Printmaking/Printmaking";
import Collage from "./pages/Collage/Collage";
import Films from "./pages/Films/Films";
const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/digital" component={Digital} />
      <Route exact path="/printmaking" component={Printmaking} />
	    <Route exact path="/collage" component={Collage} />
      <Route exact path="/films" component={Films} />
    </div>
  </Router>;
export default App;

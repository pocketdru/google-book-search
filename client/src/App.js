import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";

 function App() {
    return (
      <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/Saved" component={Saved} />
          {/* <Route exact path="/saved" component={Jumbotron} /> */}
        </Switch>
        </div>
      </Router>
     );
  }
    export default App;

 



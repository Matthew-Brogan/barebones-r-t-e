import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/app";
import List from "./List";
import Detail from "./Detail";

const App: React.SFC<IAppProps> = props => {
  return (
    <main className="container my-5">
      <Router>
        <Switch>
          <Route exact path="/" component={List}></Route>
          <Route path="/:name" component={Detail}></Route>
        </Switch>
      </Router>
    </main>
  );
};

interface IAppProps {}

export default App;

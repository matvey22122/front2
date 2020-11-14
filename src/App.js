import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './assets/Font.sass';

import {Login} from "./pages/Login";
import {Tasks} from "./pages/Tasks";
import {NewTask} from "./pages/NewTask";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Login}/>
        <Route path={'/tasks'} component={Tasks}/>
        <Route path={'/new_task'} component={NewTask}/>
      </Switch>
    </Router>
  );
}

export default App;

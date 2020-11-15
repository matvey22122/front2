import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './assets/Font.sass';

import {LoginPage} from "./pages/LoginPage";
import {TasksPage} from "./pages/TasksPage";
import {NewTaskPage} from "./pages/NewTaskPage";
import {ApiState} from "./context/ApiState";

function App() {
  return (
    <ApiState>
      <Router>
        <Switch>
          <Route path={'/'} exact component={LoginPage}/>
          <Route path={'/tasks'} component={TasksPage}/>
          <Route path={'/new_task'} component={NewTaskPage}/>
        </Switch>
      </Router>
    </ApiState>
  );
}

export default App;

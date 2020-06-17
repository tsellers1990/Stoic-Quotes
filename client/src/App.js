import React, { Redirect } from 'react';
import './App.css';
import Navbar from "./components/Nav/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import history from "./utils/history";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import AddJobs from './pages/AddJob/AddJob';
import { useAuth0 } from "./react-auth0-spa";
import 'materialize-css/dist/css/materialize.min.css';
import noMatch from "./pages/NoMatch";

// test
function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  } 
  return (
      <Router history={history}>
        <header>
          <Navbar name={"Picture It Done"}/>
        </header>
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Quotes" component={ViewJobs}/>
          <Route exact path="/NewQuote" component={AddJobs}/>
          <Route path="" component={noMatch}/>
        </Switch>
      </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import VoitureList from "./pages/VoitureList"
import VoitureCreate from "./pages/VoitureCreate"
import VoitureEdit from "./pages/VoitureEdit"
import VoitureShow from "./pages/VoitureShow"
import VoitureCalcule from "./pages/VoitureCalcule"
  
function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"  component={VoitureList} />
                <Route path="/create"  component={VoitureCreate} />
                <Route path="/edit/:id"  component={VoitureEdit} />
                <Route path="/show/:id"  component={VoitureShow} />
                <Route path="/calcule/:id"  component={VoitureCalcule} />
            </Switch>
        </Router>
    );
}
  
export default Main;
  
if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
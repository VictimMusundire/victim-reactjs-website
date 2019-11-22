import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Victimhome from "./pages/Victimhome";
import Victimmeet from "./pages/Victimmeet";
import Victimdefault from "./pages/Victimdefault";

function App() {
  return (
      <Router>
        <div className="super_container">

          <Header/>
        <Switch>

            <Route exact path="/" component={Victimhome}/>
            <Route path="/victimmeet" component={Victimmeet}/>
            <Route  component={Victimdefault}/>


        </Switch>
            <Footer/>
        </div>
      </Router>

  );
}

export default App;

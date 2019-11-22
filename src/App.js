import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Victimhome from "./pages/Victimhome";
// import Victimmeet from "./pages/Victimmeet";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="super_container">

          <Header/>
        <Switch>

            <Route path="/" component={Victimhome}/>
            {/*<Route path="/victimmeet" component={Victimmeet}/>*/}
          <Victimhome/>

        </Switch>
            <Footer/>
        </div>
      </Router>

  );
}

export default App;

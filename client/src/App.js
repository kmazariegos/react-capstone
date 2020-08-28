import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from "./components/Nav" 
import Home from "./components/Home"
import Form from "./components/Form" 
import Dog from "./components/Dog"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/register" component={Form}/>
        <Route exact path = "/images" component={Dog}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

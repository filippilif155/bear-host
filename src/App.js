import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Login } from "./components/Login";
import { PrivateRoute } from "./auth_and_private/ProtectedRoute.js";
import { Vps } from './components/Vps';
import { Shared } from './components/Shared';
import { Dedicated } from './components/Dedicated';
import { About } from './components/About';
class App extends React.Component {
  state={
    logged: true
  }
  toggleLog = (logged) => {
    this.setState({logged})
    /*
    if(logged){
      
    }
    else{
    }
    */
  };
  
  render(){
    return (
      <div className="App">
      <BrowserRouter>
      <div className="nav-bar">
        <Link to="/">Početna</Link>
        
        <Link to="/vps">VPS</Link>
        <Link to="/shared">Shared hosting</Link>
        <Link to="/dedicated">Dedicated</Link>
        <Link to="/about">O nama</Link>
        {!this.state.logged?<Link to="/login">Prijavi se</Link>:<button onClick={()=>this.toggleLog(false)}>Odjavi se</button>}
        <Link to="/shop">Korpa</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/vps" component={Vps}></Route>
          <Route path="/shared" component={Shared}></Route>
          <Route path="/dedicated" component={Dedicated}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute
              component={Shop}
              path="/shop"
          ></PrivateRoute>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;

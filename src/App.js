import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/pages/ToDo';
import {Route, Switch, Redirect}  from 'react-router-dom';
import SingleTask from './components/pages/SingleTask';
import NotFound from './components/pages/NotFound';
import Info from './components/pages/Info';
import Contact from './components/pages/Contact';
import NavMenu from './components/NavMenu';

function App() {
  return (
  <div className = 'app'>
     < NavMenu/>
    <Switch>
      
       <Route path = '/' exact component  = {ToDo}/>
       <Route path = '/task' exact component  = { SingleTask}/>
       <Route path = '/About' exact component  = {Info}/>
       <Route path = '/Contact' exact component  = {Contact}/>
       <Route path = '/not-found' exact component  = {NotFound}/>
       <Redirect to='/not-found'/>

    </Switch>  
  </div>
  );
};
export default App;

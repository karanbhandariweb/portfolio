import React from 'react';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Contact from './Contact';
import MyWork from './MyWork';
import Nav from './Nav';
import {Switch,Route,Redirect} from 'react-router-dom';
const App=() =>
{
    return(<>
    <Nav/>
<Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/work" component={MyWork}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>
</Switch>
   </> )
}
export default App;
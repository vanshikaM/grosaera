import './App.css';

import React from 'react';
import {Route ,Switch} from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Grid from "@material-ui/core/Grid";
import Dashboard from './container/dashboard/dashboard'
import ban from './images/banner.png'
import Cart from './container/Cart/Cart';
import MobileOTP from '././container/MobileOTP'
import Register  from './components/register/register';
import Login from './components/login/login'
import Address from './container/Cart/address';
function App() {
  
    
    return( 
            <Grid item lg={12}>
            <NavBar />
            <img src={ban} width={1230} height={300} /><br />
            <Switch>
            <Route path='/address' exact component={Address} />
            <Route path='/login' exact render={(props) => <Login {...props} />} />
            <Route path='/register' render={(props) => <Register {...props} />}/>
            <Route exact path="/verification" component={MobileOTP} />
            <Route exact path="/my-cart" component={Cart} />
            <Route  path="/" component={Dashboard} />
            </Switch>
            </Grid>
      
       );
  }


export default App;

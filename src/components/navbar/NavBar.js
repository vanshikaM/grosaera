import React,{ Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import styles from './styles'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

//let path="/";
const NavBar =()=>{
  
const classes= styles();

        return(
          
            <AppBar position="static" >
                <Toolbar>
                    {/* <img src={logo} style={{width:"50px",height:"50px"}}/> */}
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <AddShoppingCartIcon className={classes.cart}/>
         <NavLink to="/my-cart" className={classes.title}>
            My Cart
          </NavLink> 
          <NavLink to="/login" className={classes.title}>
            <Button color="inherit" className={classes.button}>Login</Button>
            </NavLink> 
                </Toolbar>
            </AppBar>
        );
    
}

export default NavBar;
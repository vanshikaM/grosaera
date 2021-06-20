import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from '../../components/navbar/styles'
import Item from '../../components/Item/Item'
import * as actionTypes from '../../store/action'
import Grid from '@material-ui/core/Grid';
import {addToCart} from '../../store/cartAction';

const Dashboard=(props)=>{
    const classes= styles();

   const addToCart = (product) => {
        props.addToCart(product);
    }

    return(
       
        <Grid container spacing={3}>
        {props.itm.map(product =>(
            <Grid item xs={12} sm={6} md={3}> 
            <Item 
            item={product.item}
            name={product.name}
            count={product.count}
            price={product.price} 
             key={product.id}
             product={product}
             addToCart={addToCart}
            />
            </Grid>
            
        ))}

        </Grid>
    
  
);
}

const mapStateToProps = state => {
return {
    itm : state.ir.items,
    cart: state.ir.cart.cart
};
    }
        

const mapDispatchToProps = dispatch => {
    return {
        onAddedItems: (item,name,count,price)=> dispatch({type:actionTypes.GET_ITEMS,itemsData:{item:item,name:name,count:count,price:price}}),
        addToCart: (product) => {dispatch(addToCart(product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

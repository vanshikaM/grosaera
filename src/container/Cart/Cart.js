import React, { Component } from 'react';
import CrtItem from './crtItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Cart extends Component
{
     
    render() {
        let total = 0;
        this.props.cart.map(item => total += item.product.price * item.quantity);
        const cart  = this.props.cart.length > 0?(
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <CrtItem item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total <strong>${total.toFixed(3)}</strong></h4>
                        </div>
                    </div>
                    <NavLink to="/verification">
                         <button onClick={this.checkUser}>Place Order</button>
                    </NavLink> 
                </div>
            </div>
        ) : (
            <div className="panel-body">
                <p>Cart is empty</p>
            </div>
        )
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5>
                                                    <span className="glyphicon glyphicon-shopping-cart">
                                                    </span> My Shopping Cart
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { cart }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
        cart: state.ir.cart,
        isUser: state.isUser
  }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         checkUser: (isUser)=> dispatch({type:actionTypes.CHECK_USER,{isUser:isUser}}}})
    
// }
export default connect(mapStateToProps)(Cart);
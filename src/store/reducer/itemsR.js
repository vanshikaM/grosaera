import * as actionTypes from '../action';
import ashirvaad from '../../images/ahisrvaad.png';

const initialState = {
    items:[{
        id:1,
        item:[ashirvaad],
        name:"Ashirwaad aata",
        count:0,
        price:120,
        selected:false
        
        },
        {
        id:2,
        item:[ashirvaad],
        name:"Refined Oil",
        count:0,
        price:120,
        selected:false
        },{
        id:3,
        item:[ashirvaad],
        name:"Tata Salt",
        count:0,
        price:120,
        selected:false
        
        },{
        id:4,
        item:[ashirvaad],
        name:"Basmati Rice",
        count:0,
        price:120,
        selected:false
        
        },
        {
        id:5,
        item:[ashirvaad],
        name:"Arhar Daal",
        count:0,
        price:120,
        selected:false
        }],
        cart:[]
}

const reducer = (state= initialState, action) => {

        let cart = state.cart;
    switch(action.type)
    {
        case actionTypes.GET_ITEMS:
            const newItem = {
                id: action.items.id,
                item:action.items.item[0],
                name: action.items.name,
                count: action.items.count,
                price: action.items.price,
            }
            return{
                ...state,
                items: state.items.concat(newItem)
            }

        case 'ADD_TO_CART':
            cart.push(action.payload);
            return {
                ...state,
                cart: cart
            };
        case 'UPDATE_CART_QUANTITY':
            let item = cart.find(item => item.product.id == action.payload.productId);
            let newCart = cart.filter(item => item.product.id != action.payload.productId);
            item.quantity = action.payload.quantity;
            newCart.push(item);
            return {
                ...state,
                cart: newCart
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: cart.filter(item => item.product.id != action.payload.productId)
            };
    }
    
    return state;
};

export default reducer;
import * as actionTypes from '../action';


const initialState = {
    profile: {
        email:'',
        password:'',
        fullname:''
    },
    isUser :false
}

const reducer = (state= initialState, action )=> {
    
    switch(action.type)
    {
        case actionTypes.CHECK_USER:
            const isUser = action.payload;
            return{
                ...state,
                isUser
            };
        case actionTypes.ADD_USER:
            return{
                ...state,
                user: action.payload.user
            };
    }
    return state;
};

export default reducer;
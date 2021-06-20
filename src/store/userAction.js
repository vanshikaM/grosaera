import * as actionTypes from './action';

export const checkUser = (isUser) => {
    return ({
        type: actionTypes.CHECK_USER,
        payload:{isUser}
    })
};

export const addUser = (user) => {
    return ({
        type: actionTypes.ADD_USER,
        payload:{user}
    })
};
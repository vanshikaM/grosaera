import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import itemsR from './store/reducer/itemsR';
import userR from './store/reducer/userR';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Theme from './utils/MuiProvider';

const rootReducer = combineReducers({
   ir:itemsR,
   us:userR
})
const store = createStore(rootReducer);
const app =  (
  
     <Provider store={store}>
    <BrowserRouter>
    <Theme>
      <App /></Theme>
  </BrowserRouter>
  </Provider> 
);
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

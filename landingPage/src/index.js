import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducer'
import {Provider} from 'react-redux';

//import * as serviceWorker from './serviceWorker';

const store = createStore(allReducers);

ReactDOM.render(
  
  <Provider store = {store}>
      
        <App />
  </Provider>
   
  ,
  document.getElementById('root')
);
//</React.StrictMode>
//serviceWorker.unregister();

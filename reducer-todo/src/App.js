import React, {useReducer} from 'react';
import {titleReducer, initialState} from './reducers/titleReducer'; 

import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(titleReducer, initialState);
  
  return ( 
    <div className="App">
      
    </div>
  );
}

export default App;

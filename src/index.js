// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,BrowserRouter} from 'react-router-dom';
import App from './App';
import { AuthProvider } from './components/auth/AuthContext';

ReactDOM.render(
  
  
   <BrowserRouter basename="/speed-shoping-front/" >
      <App />
      </BrowserRouter>
  ,
  
  document.getElementById('root')
);

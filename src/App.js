// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Forget from './components/auth/Forget';
import Setnewpassword from './components/auth/Setnewpassword';
import First from './components/main-page/First';
import Detail from './components/main-page/Detail';
import Product from './components/main-page/Products';
import Cart from './components/main-page/Cart';

class App extends React.Component {
  render() {
    return (
      
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/pro" element={<Product />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/" element={<First />} />
          <Route path="/Setnewpassword/:uidb64/:token" element={<Setnewpassword />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    
    );
  }
}

export default App;

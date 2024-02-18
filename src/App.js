// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider ,getAuthToken} from './components/auth/AuthContext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/logout';

import Forget from './components/auth/Forget';
import Setnewpassword from './components/auth/Setnewpassword';
import First from './components/main-page/First';
import Detail from './components/main-page/Detail';
import Product from './components/main-page/Products';
import Cart from './components/main-page/Cart';
import BuyForm from './components/main-page/SenderInfoForm';
import AboutSection from './components/main-page/AboutSection';


import TestComponent from './components/main-page/TestComponent';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <AuthProvider>
          <Routes>
          <Route path="/about" element={<AboutSection />} />
          <Route path="/form/:cartId" element={<BuyForm />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
            <Route path="/pro" element={<Product />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="" element={<First />} />
            <Route path="/Setnewpassword/:uidb64/:token" element={<Setnewpassword />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </React.StrictMode>
    );
  }
}

export default App;
import React, { useState, useEffect } from 'react';
import './app.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { baseUrl } from '../../axiosConfig';
import { Helmet } from 'react-helmet';

import '../../bace-style/css/bootstrap.css'
import CarouselSlider from './CarouselSlider';
import Product from './Products';
import Cart from './Cart';
import { useAuth } from '../auth/AuthContext';
import Logout from '../auth/logout';
import { FiPhone } from 'react-icons/fi';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { BsFileText, BsBox, BsCart, BsHouseDoor  } from 'react-icons/bs';
import { FaUserPlus, FaLock, FaLockOpen } from 'react-icons/fa';


import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const First = () => {
  const { getAuthToken } = useAuth();
  const [authToken, setAuthToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  
  
  useEffect(() => {
    // در اینجا عملیات دریافت توکن و تنظیم مقدار آن صورت می‌گیرد
    const fetchAuthToken = async () => {
      const token = await getAuthToken();
      setAuthToken(token);
    };

    fetchAuthToken();
  }, []); 


  const handleCartClick = () => {
    if (!authToken) {
      setShowModal(true);
    } else {
      // Redirect to cart page
      window.location.href = '/cart';
    }
  }; 

  const handleClose = () => setShowModal(false);
  
    return (
      <main className="body">
        <Helmet>
        <title> فروشگاه دوچرخه اسپید </title>
      </Helmet>
      <div style={{ maxHeight: '90%', maxWidth: "98%" }} className="container">
        <header className="header--style-1">
        <div className="navbar-container">
        <div className="container">
          <div dir="rtl" className="primary-nav d-flex justify-content-between">
           
            <Navbar className="custom-navbar" expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><BsHouseDoor /> خانه</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span className="navbar-toggler-icon"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ah-list ml-auto">
      <Nav.Link target="blank" className="ah-list ah-list--design1 ah-list--link-color-secondary" href="/about"><BsFileText /> درباره ما</Nav.Link>
      <Nav.Link href="#call"><FiPhone /> تماس با ما </Nav.Link>
      <Nav.Link href="#pro"><BsBox /> محصولات</Nav.Link>
      
          <Nav.Link target="blank"  onClick={handleCartClick}><BsCart /> سبد خرید</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Navbar className="navbarauth" expand="lg" bg="dark" variant="dark">
      {/* Main Logo */}
      <Navbar.Brand href="">  <FaUserPlus /></Navbar.Brand>            
      <Navbar.Toggle aria-controls="basic-navbar-nav-auth" className="d-lg-none" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Navbar Items for navbarauth */}
        <Nav className="ah-list ml-auto">
        <NavDropdown style={{color:"#f5efef", textAlign:"right"}} className="nav-dropdown-title" title={<span ><FaUserPlus /> ورود/ثبت نام</span>} id="basic-nav-dropdown-auth">
 
        {authToken && <Logout />}
          {!authToken && (
            <>
              <NavDropdown.Item   style={{ color:"#000000", textAlign:"right"}} href="/register"><FaUserPlus /><span> ثبت نام</span></NavDropdown.Item>
              <NavDropdown.Item  target="blank"  style={{  color:"#000000",textAlign:"right"}} href="/speed-shoping-front/#/login"><FaLock /><span> ورود</span></NavDropdown.Item>
            </>
          )}
                </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>



    

    {/*====== End - Main Logo ======*/}
         
            {/*====== End - Search Form ======*/}
            {/*====== Dropdown Main plugin ======*/}
            <div dir="ltr" className="menu-init" id="navigation">
              {/*====== Menu ======*/}
              {/* Add your menu items here */}
              {/*====== End - Menu ======*/}
                      
              </div>        {/*====== End - Dropdown Main plugin ======*/}
        
      
                      {/*====== End - Nav 1 ======*/}
                      {/*====== Nav 2 ======*/}
                      <nav style={{backgroundColor:'dark'}} className="secondary-nav-wrapper">
                        <div dir="rtl" className="text-center container">
                          {/*====== Secondary Nav ======*/}
                          <div className="secondary-nav">
                            {/*====== Dropdown Main plugin ======*/}
                            <div className="menu-init" id="navigation1">
                              
                                   {/*====== Search Form ======*/}
            <form  className="main-form">
              <label htmlFor="main-search" />
              <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />
              <button className="btn btn--icon fas fa-search main-search-button" type="submit" />
            </form>

                                {/*====== End - List ======*/}
                                </div></div></div>
                            
                         
                      </nav>
                      </div>
                      </div>
                      </div>
                      
                      {/*====== End - Nav 2 ======*/}
                    </header>
                   
                    {/*====== App Content ======*/}
                 
                    <div className="s-skeleton s-skeleton--h-600 s-skeleton--bg-grey">
                    <div className="owl-carousel primary-style-1" id="hero-slider">
                    
                     <CarouselSlider />
                     
                    </div>
                    </div>
   
                      {/*====== End - Primary Slider ======*/}
                      {/*====== Section 1 ======*/}
                      <div id="pro">
                      <Product />
                      
                      </div>
                       
                       
                      </div>
                      {/*====== End - App Content ======*/}
                      {/*====== Main Footer ======*/}
                      <footer style={{margin: "center",backgroundColor:'#ffffff'}}>
                        <div id="call"  style={{margin: "center"}}  className="text-center  outer-footer">
                         
                           
                            
                               
                                  <span className="outer-footer__content-title"> تماس با ما </span>
                                  <div className="outer-footer__text-wrap"><i className="fas fa-home" />
                                    <span>تهران ،اندیشه فاز 1 بین 14 و 15 غربی پ54 ،فروشگاه دوچرخه اسپید </span></div>
                                  <div className="outer-footer__text-wrap"><i className="fas fa-phone-volume" />
                                    <span>09120121973</span></div>
                                  <div className="outer-footer__text-wrap"><i className="far fa-envelope" />
                                    <span>hasanvand296@gmail.com</span></div>
                                  
                                </div>
                              
                              
                             
                             
                            
                         
                       
                        
                      </footer>
                      {/*====== Modal Section ======*/}
                      {/*====== Quick Look Modal ======*/}
                      
                      {/*====== End - Quick Look Modal ======*/}
                      {/*====== Add to Cart Modal ======*/}
                      <div className="modal fade" id="add-to-cart">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content modal-radius modal-shadow">
                            <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-6 col-md-12">
                                  <div className="success u-s-m-b-30">
                                    <div className="success__text-wrap"><i className="fas fa-check" />
                                      <span>Item is added successfully!</span></div>
                                    <div className="success__img-wrap">
                                      <img className="u-img-fluid" src="images/product/electronic/product1.jpg" alt="" /></div>
                                    <div className="success__info-wrap">
                                      <span className="success__name">Beats Bomb Wireless Headphone</span>
                                      <span className="success__quantity">Quantity: 1</span>
                                      <span className="success__price">$170.00</span></div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                  <div className="s-option">
                                    <span className="s-option__text">1 item (s) in your cart</span>
                                    <div className="s-option__link-box">
                                      <a className="s-option__link btn--e-white-brand-shadow" data-dismiss="modal">CONTINUE SHOPPING</a>
                                      <a className="s-option__link btn--e-white-brand-shadow" href="cart.html">VIEW CART</a>
                                      <a className="s-option__link btn--e-brand-shadow" href="checkout.html">PROCEED TO CHECKOUT</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====== End - Add to Cart Modal ======*/}
                      {/*====== Newsletter Subscribe Modal ======*/}
                      <div className="modal fade new-l" id="newsletter-modal">
                        
                        <Modal  show={showModal} onHide={handleClose}>
        <Modal.Header   dir='rtl' >
          <Modal.Title style={{textAlign:'center'}}><h1 style={{ fontSize: '2rem', color: '#f80606',textAlign:'center' }}>خطا!</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>شما باید وارد شوید تا به سبد خرید دسترسی داشته باشید.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" href="/login">
            ورود
          </Button>
        </Modal.Footer>
      </Modal>
                      </div>
                      {/*====== End - Newsletter Subscribe Modal ======*/}
                      {/*====== End - Modal Section ======*/}
                    
                    {/*====== End - Main App ======*/}
                    {/*====== Google Analytics: change UA-XXXXX-Y to be your site's ID ======*/}
                    {/*====== Vendor Js ======*/}
                    {/*====== jQuery Shopnav plugin ======*/}
                    {/*====== App ======*/}
                    {/*====== Noscript ======*/}
                    <noscript>
                      &lt;div class="app-setting"&gt;
                      &lt;div class="container"&gt;
                      &lt;div class="row"&gt;
                      &lt;div class="col-12"&gt;
                      &lt;div class="app-setting__wrap"&gt;
                      &lt;h1 class="app-setting__h1"&gt;JavaScript is disabled in your browser.&lt;/h1&gt;
                      &lt;span class="app-setting__text"&gt;Please enable JavaScript in your browser or upgrade to a JavaScript-capable browser.&lt;/span&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                    </noscript>
                  
      </main>
    );
}



  export default First;
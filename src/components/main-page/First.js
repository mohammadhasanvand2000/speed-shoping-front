import React, { Component } from "react";
import './app.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../bace-style/css/bootstrap.css'
import CarouselSlider from './CarouselSlider';
import Product from './Products';
import Cart from './Cart';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { BsFileText, BsBox,BsBicycle, BsCardTravel, BsCart, BsHouseDoor  } from 'react-icons/bs';
import { FaUserPlus, FaLock, FaLockOpen } from 'react-icons/fa';

import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class First extends Component {render() {
  

    return (
      <main className="body">
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
      <Nav.Link className="ah-list ah-list--design1 ah-list--link-color-secondary" href="about.html"><BsFileText /> درباره ما</Nav.Link>
      <Nav.Link href="contact.html"><BsFileText /> مقالات</Nav.Link>
      <Nav.Link href="#pro"><BsBox /> محصولات</Nav.Link>
      <Nav.Link href="dash-my-order.html"><BsBicycle /> تور ها</Nav.Link>
      <Nav.Link href="/cart"><BsCart /> سبد خرید</Nav.Link>
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

    <NavDropdown.Item  style={{ color:"#000000", textAlign:"right"}} href="/register"><FaUserPlus /><span> ثبت نام</span></NavDropdown.Item>
    <NavDropdown.Item  style={{  color:"#000000",textAlign:"right"}} href="/login"><FaLock /><span> ورود</span></NavDropdown.Item>
    <NavDropdown.Item   style={{  color:"#000000",textAlign:"right"}} href=""><FaLockOpen /><span> خروج</span></NavDropdown.Item>
  </NavDropdown>
  {/* سایر NavItems یا NavDropdowns خود را اینجا اضافه کنید */}
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
                      <footer>
                        <div className="outer-footer">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4 col-md-6">
                                <div className="outer-footer__content u-s-m-b-40">
                                  <span className="outer-footer__content-title">Contact Us</span>
                                  <div className="outer-footer__text-wrap"><i className="fas fa-home" />
                                    <span>4247 Ashford Drive Virginia VA-20006 USA</span></div>
                                  <div className="outer-footer__text-wrap"><i className="fas fa-phone-volume" />
                                    <span>(+0) 900 901 904</span></div>
                                  <div className="outer-footer__text-wrap"><i className="far fa-envelope" />
                                    <span>contact@domain.com</span></div>
                                  <div className="outer-footer__social">
                                    <ul>
                                      <li>
                                        <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                                      <li>
                                        <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                                      <li>
                                        <a className="s-youtube--color-hover" href="#"><i className="fab fa-youtube" /></a></li>
                                      <li>
                                        <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                                      <li>
                                        <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              
                              
                                  
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12">
                                <div className="outer-footer__content">
                                  <span className="outer-footer__content-title">Join our Newsletter</span>
                                  <form className="newsletter">
                                    <div className="u-s-m-b-15">
                                      <div className="radio-box newsletter__radio">
                                        <input type="radio" id="male" name="gender" />
                                        <div className="radio-box__state radio-box__state--primary">
                                          <label className="radio-box__label" htmlFor="male">Male</label></div>
                                      </div>
                                      <div className="radio-box newsletter__radio">
                                        <input type="radio" id="female" name="gender" />
                                        <div className="radio-box__state radio-box__state--primary">
                                          <label className="radio-box__label" htmlFor="female">Female</label></div>
                                      </div>
                                    </div>
                                    <div className="newsletter__group">
                                      <label htmlFor="newsletter" />
                                      <input className="input-text input-text--only-white" type="text" id="newsletter" placeholder="Enter your Email" />
                                      <button className="btn btn--e-brand newsletter__btn" type="submit">SUBSCRIBE</button></div>
                                    <span className="newsletter__text">Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and coupons.</span>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                       
                        <div className="lower-footer">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="lower-footer__content">
                                  <div className="lower-footer__copyright">
                                    <span>Copyright © 2018</span>
                                    <a href="index.html">Reshop</a>
                                    <span>All Right Reserved</span></div>
                                  <div className="lower-footer__payment">
                                    <ul>
                                      <li><i className="fab fa-cc-stripe" /></li>
                                      <li><i className="fab fa-cc-paypal" /></li>
                                      <li><i className="fab fa-cc-mastercard" /></li>
                                      <li><i className="fab fa-cc-visa" /></li>
                                      <li><i className="fab fa-cc-discover" /></li>
                                      <li><i className="fab fa-cc-amex" /></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                      {/*====== Modal Section ======*/}
                      {/*====== Quick Look Modal ======*/}
                      <div className="modal fade" id="quick-look">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content modal--shadow">
                            <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-5">
                                  {/*====== Product Breadcrumb ======*/}
                                  <div className="pd-breadcrumb u-s-m-b-30">
                                    <ul className="pd-breadcrumb__list">
                                      <li className="has-separator">
                                        <a href="index.hml">Home</a></li>
                                      <li className="has-separator">
                                        <a href="shop-side-version-2.html">Electronics</a></li>
                                      <li className="has-separator">
                                        <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                                      <li className="is-marked">
                                        <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                                    </ul>
                                  </div>
                                  {/*====== End - Product Breadcrumb ======*/}
                                  {/*====== Product Detail ======*/}
                                  <div className="pd u-s-m-b-30">
                                    <div className="pd-wrap">
                                      <div id="js-product-detail-modal">
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-1.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-2.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-3.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-4.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-5.jpg" alt="" /></div>
                                      </div>
                                    </div>
                                    <div className="u-s-m-t-15">
                                      <div id="js-product-detail-modal-thumbnail">
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-1.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-2.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-3.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-4.jpg" alt="" /></div>
                                        <div>
                                          <img className="u-img-fluid" src="images/product/product-d-5.jpg" alt="" /></div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*====== End - Product Detail ======*/}
                                </div>
                                <div className="col-lg-7">
                                  {/*====== Product Right Side Details ======*/}
                                  <div className="pd-detail">
                                    <div>
                                      <span className="pd-detail__name">Nikon Camera 4k Lens Zoom Pro</span></div>
                                    <div>
                                      <div className="pd-detail__inline">
                                        <span className="pd-detail__price">$6.99</span>
                                        <span className="pd-detail__discount">(76% OFF)</span><del className="pd-detail__del">$28.97</del></div>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                        <span className="pd-detail__review u-s-m-l-4">
                                          <a href="product-detail.html">23 Reviews</a></span></div>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <div className="pd-detail__inline">
                                        <span className="pd-detail__stock">200 in stock</span>
                                        <span className="pd-detail__left">Only 2 left</span></div>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <span className="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                    <div className="u-s-m-b-15">
                                      <div className="pd-detail__inline">
                                        <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6" />
                                          <a href="signin.html">Add to Wishlist</a>
                                          <span className="pd-detail__click-count">(222)</span></span></div>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <div className="pd-detail__inline">
                                        <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6" />
                                          <a href="signin.html">Email me When the price drops</a>
                                          <span className="pd-detail__click-count">(20)</span></span></div>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <ul className="pd-social-list">
                                        <li>
                                          <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li>
                                          <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                                        <li>
                                          <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                                        <li>
                                          <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp" /></a></li>
                                        <li>
                                          <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                                      </ul>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <form className="pd-detail__form">
                                        <div className="pd-detail-inline-2">
                                          <div className="u-s-m-b-15">
                                            {/*====== Input Counter ======*/}
                                            <div className="input-counter">
                                              <span className="input-counter__minus fas fa-minus" />
                                              <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                                              <span className="input-counter__plus fas fa-plus" /></div>
                                            {/*====== End - Input Counter ======*/}
                                          </div>
                                          <div className="u-s-m-b-15">
                                            <button className="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="u-s-m-b-15">
                                      <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                                      <ul className="pd-detail__policy-list">
                                        <li><i className="fas fa-check-circle u-s-m-r-8" />
                                          <span>Buyer Protection.</span></li>
                                        <li><i className="fas fa-check-circle u-s-m-r-8" />
                                          <span>Full Refund if you don't receive your order.</span></li>
                                        <li><i className="fas fa-check-circle u-s-m-r-8" />
                                          <span>Returns accepted if product not as described.</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                  {/*====== End - Product Right Side Details ======*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content modal--shadow">
                            <button className="btn new-l__dismiss fas fa-times" type="button" data-dismiss="modal" />
                            <div className="modal-body">
                              <div className="row u-s-m-x-0">
                                <div className="col-lg-6 new-l__col-1 u-s-p-x-0">
                                  <a className="new-l__img-wrap u-d-block" href="shop-side-version-2.html">
                                    <img className="u-img-fluid u-d-block" src="images/newsletter/newsletter.jpg" alt="" /></a></div>
                                <div className="col-lg-6 new-l__col-2">
                                  <div className="new-l__section u-s-m-t-30">
                                    <div className="u-s-m-b-8 new-l--center">
                                      <h3 className="new-l__h3">Newsletter</h3>
                                    </div>
                                    <div className="u-s-m-b-30 new-l--center">
                                      <p className="new-l__p1">Sign up for emails to get the scoop on new arrivals, special sales and more.</p>
                                    </div>
                                    <form className="new-l__form">
                                      <div className="u-s-m-b-15">
                                        <input className="news-l__input" type="text" placeholder="E-mail Address" /></div>
                                      <div className="u-s-m-b-15">
                                        <button className="btn btn--e-brand-b-2" type="submit">Sign up!</button></div>
                                    </form>
                                    <div className="u-s-m-b-15 new-l--center">
                                      <p className="new-l__p2">By Signing up, you agree to receive Reshop offers,<br />promotions and other commercial messages. You may unsubscribe at any time.</p>
                                    </div>
                                    <div className="u-s-m-b-15 new-l--center">
                                      <a className="new-l__link" data-dismiss="modal">No Thanks</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
}


  export default First;
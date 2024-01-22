import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Cart = (props) => {
  const { token } = useParams();

  useEffect(() => {
    console.log('توکن:', token);

    const fetchCartItems = async () => {
      try {
        // ارسال درخواست به سرور با استفاده از token
        const response = await axios.get(`آدرس-درخواست-با-token/${token}`);
        
        // پردازش داده‌های دریافتی از سرور
        const cartItems = response.data;
        console.log('آیتم‌های کارت:', cartItems);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کارت:', error);
      }
    };

    // اجرای تابع fetchCartItems
    fetchCartItems();

    // نمایش توکن در کنسول
    const tokenFromProps = props.location?.state?.token;
    console.log('توکن از props:', tokenFromProps);
  }, [token, props.location]);

  return (
    <div className="u-s-p-b-60">
        {/*====== Section Intro ======*/}
        <div className="section__intro u-s-m-b-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__text-wrap">
                  <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Section Intro ======*/}
        {/*====== Section Content ======*/}
        <div className="section__content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                <div className="table-responsive">
                  <table className="table-p">
                    <tbody>
                      {/*====== Row ======*/}
                      <tr>
                        <td>
                          <div className="table-p__box">
                            <div className="table-p__img-wrap">
                              <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                            <div className="table-p__info">
                              <span className="table-p__name">
                                <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                              <span className="table-p__category">
                                <a href="shop-side-version-2.html">Electronics</a></span>
                              <ul className="table-p__variant-list">
                                <li>
                                  <span>Size: 22</span></li>
                                <li>
                                  <span>Color: Red</span></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="table-p__price">$125.00</span></td>
                        <td>
                          <div className="table-p__input-counter-wrap">
                            {/*====== Input Counter ======*/}
                            <div className="input-counter">
                              <span className="input-counter__minus fas fa-minus" />
                              <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                              <span className="input-counter__plus fas fa-plus" /></div>
                            {/*====== End - Input Counter ======*/}
                          </div>
                        </td>
                        <td>
                          <div className="table-p__del-wrap">
                            <a className="far fa-trash-alt table-p__delete-link" href="#" /></div>
                        </td>
                      </tr>
                      {/*====== End - Row ======*/}
                      {/*====== Row ======*/}
                      <tr>
                        <td>
                          <div className="table-p__box">
                            <div className="table-p__img-wrap">
                              <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></div>
                            <div className="table-p__info">
                              <span className="table-p__name">
                                <a href="product-detail.html">New Dress D Nice Elegant</a></span>
                              <span className="table-p__category">
                                <a href="shop-side-version-2.html">Women Clothing</a></span>
                              <ul className="table-p__variant-list">
                                <li>
                                  <span>Size: 22</span></li>
                                <li>
                                  <span>Color: Red</span></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="table-p__price">$125.00</span></td>
                        <td>
                          <div className="table-p__input-counter-wrap">
                            {/*====== Input Counter ======*/}
                            <div className="input-counter">
                              <span className="input-counter__minus fas fa-minus" />
                              <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                              <span className="input-counter__plus fas fa-plus" /></div>
                            {/*====== End - Input Counter ======*/}
                          </div>
                        </td>
                        <td>
                          <div className="table-p__del-wrap">
                            <a className="far fa-trash-alt table-p__delete-link" href="#" /></div>
                        </td>
                      </tr>
                      {/*====== End - Row ======*/}
                      {/*====== Row ======*/}
                      <tr>
                        <td>
                          <div className="table-p__box">
                            <div className="table-p__img-wrap">
                              <img className="u-img-fluid" src="images/product/men/product8.jpg" alt="" /></div>
                            <div className="table-p__info">
                              <span className="table-p__name">
                                <a href="product-detail.html">New Fashion D Nice Elegant</a></span>
                              <span className="table-p__category">
                                <a href="shop-side-version-2.html">Men Clothing</a></span>
                              <ul className="table-p__variant-list">
                                <li>
                                  <span>Size: 22</span></li>
                                <li>
                                  <span>Color: Red</span></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="table-p__price">$125.00</span></td>
                        <td>
                          <div className="table-p__input-counter-wrap">
                            {/*====== Input Counter ======*/}
                            <div className="input-counter">
                              <span className="input-counter__minus fas fa-minus" />
                              <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                              <span className="input-counter__plus fas fa-plus" /></div>
                            {/*====== End - Input Counter ======*/}
                          </div>
                        </td>
                        <td>
                          <div className="table-p__del-wrap">
                            <a className="far fa-trash-alt table-p__delete-link" href="#" /></div>
                        </td>
                      </tr>
                      {/*====== End - Row ======*/}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="route-box">
                  <div className="route-box__g1">
                    <a className="route-box__link" href="shop-side-version-2.html"><i className="fas fa-long-arrow-alt-left" />
                      <span>CONTINUE SHOPPING</span></a></div>
                  <div className="route-box__g2">
                    <a className="route-box__link" href="cart.html"><i className="fas fa-trash" />
                      <span>CLEAR CART</span></a>
                    <a className="route-box__link" href="cart.html"><i className="fas fa-sync" />
                      <span>UPDATE CART</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Section Content ======*/}
      </div>
  );
};

export default Cart;

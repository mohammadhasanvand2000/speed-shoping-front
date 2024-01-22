import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactImageZoom from 'react-image-zoom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import numeral from 'numeral';

import { useAuth  } from '../auth/AuthContext';
const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [detail, setDetail] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [productColors, setProductColors] = useState([]);
  const [clientComment, setClientComment] = useState({});
  const [loading, setLoading] = useState(true);
  const [zoomImage, setZoomImage] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  
  
  
  const { token } = useAuth();
console.log('Token:', token);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          console.error('Invalid product ID');
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8000/pro/detail/${id}/`);
        console.log('Received data:', response.data);
        setZoomImage(response.data.product.image);
        setLoading(false);
        setProduct(response.data.product);
        setDetail(response.data.detail);
        setProductImages(response.data.product_image);
        setProductColors(response.data.product_color);
        setClientComment(response.data.client_comment);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching product details:', error);
        const images = productImages.map(image => ({
          original: `${baseUrl}${image}`,
          thumbnail: `${baseUrl}${image}`, // You can set a different thumbnail URL if needed
        }));
        
        setGalleryImages(images);
      }
    };

    fetchProduct();
  }, [id]);

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const zoomProps = {
    width: 500,
    zoomWidth: 900, // تغییر ممکن است این مقدار برای شما متفاوت باشد
    scale: 0.3
  };
  


  
  const handleThumbnailClick = (image) => {
    setZoomImage(image.image);
  };

  const baseUrl = 'http://127.0.0.1:8000';
  

  return (
    <div dir='rtl' className="u-s-p-y-60">
      <div className='container'>
        <div className="u-s-p-b-60">
          <div className="section__intro u-s-m-b-16">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 style={{ color: "#ffff00" }} className="section__heading u-c-secondary u-s-m-b-12">
                      جزییات {product.title}
                    </h1>
                    <span className="section__span u-c-silver"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section__intro u-s-p-t-90">
        <div className="row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <div className="col-lg-5" style={{ float: 'left', display: 'flex' }}>
            <div className="pd-o-img-wrap" data-src={`${baseUrl}${product.image}`}>
              <ReactImageZoom
                {...zoomProps}
                img={`${baseUrl}${zoomImage}`}
                className="zoom-image"
                zoomWidth={800}
                imgStyle={{ width: '100%' }}
              />

              <div className="u-s-m-t-15">
                <div className='container'>
                <div className="slider-fouc">
                 
                  {productImages.map(image => (
                    <img
                      key={image.id}
                      src={`${baseUrl}${image.image}`}
                      alt={`Product Image ${image.id}`}
                      onClick={() => handleThumbnailClick(image)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
          
              {/*====== End - Product Detail Zoom ======*/}
              
              <div className="col-lg-7" style={{ float: 'right', display: 'flex', flexDirection: 'column' }}>
                {/*====== Product Right Side Details ======*/}
                <div className="pd-detail"  style={{ paddingTop: '50px',paddingRight: '50px' }}>
                  <div>
                    <span style={{ color: "#fdfcfc" }} className="pd-detail__name">{product.title}</span></div>
                  <div>
                  <div className="pd-detail__inline">
                  <span className="pd-detail__price">
  {numeral(product.price).format('0,0')} تومان
</span>
        
      </div>
    </div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                      <span className="pd-detail__review u-s-m-l-4">
                        <a data-click-scroll="#view-review"></a></span></div>
                  </div>
                  
                  <div className="u-s-m-b-15">
  <label>رنگ:</label>
  {productColors.map(color => (
    <div key={color.id} className="color-radio-rectangle">
      <input
        type="radio"
        id={`color-${color.id}`}
        name="productColor"
        value={color.color}
        style={{ display: 'none' }}
      />
      <label htmlFor={`color-${color.id}`} style={{ backgroundColor: color.color }}>
        
      </label>
    </div>
  ))}
</div>


                  <div className="u-s-m-b-15">
                    <span style={{ color: "#fdfcfc" }} className="pd-detail__preview-desc">{detail.introduction}</span></div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__inline">
                      <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6" />
                        <a style={{ color: "#42c3ff" }} href="signin.html">افزودن به لیست علاقه مندی ها </a>
                        <span className="pd-detail__click-count">(#####)</span></span></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__inline">
                      <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6" />
                        <a style={{ color: "#fdfcfc" }} href="signin.html"></a>
                        <span className="pd-detail__click-count"></span></span></div>
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
                          <button style={{ color: "#fdfcfc" }} className="btn btn--e-brand-b-2" type="submit">خرید</button></div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*====== End - Product Right Side Details ======*/}
              </div>
              {/*====== Product Detail Tab ======*/}
              <div className="u-s-p-y-90">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pd-tab">
                        <div className="u-s-m-b-30">
                          <ul className="nav pd-tab__list">
                            <li className="nav-item">
                              <a className="nav-link active" style={{ color: "#fdfcfc" }} data-toggle="tab" href="#pd-desc">توضیحات</a></li>
                           
                          </ul>
                        </div>
                        <div className="tab-content">
                          {/*====== Tab 1 ======*/}
                          <div className="tab-pane fade show active" id="pd-desc">
                            <div className="pd-tab__desc">
                              <div className="u-s-m-b-15">
                                <p style={{ color: "#fdfcfc" }}>{detail.discribtion}</p>
                              </div>
                             
                              
                              <div className="u-s-m-b-15">
                                <h4 style={{ color: "#fdfcfc" }}>مشخصات محصول</h4>
                              </div>
                              <div className="u-s-m-b-15">
                                <div className="pd-table gl-scroll">
                                  <table>
                                    <tbody>
                                    {detail.Alloy && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>آلیاژ</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.Alloy}</td>
                                      </tr>
                                    )}
                                    {detail.warranty && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>گارانتی</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.warranty}</td>
                                      </tr>
                                    )}
                                    
                                      {detail.made_in && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>ساخت کشور</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.made_in}</td>
                                      </tr>
                                    )}                          
                                      {detail.dimensions && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>ابعاد</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.dimensions}در{detail.in_dimensions}سانتی متر</td>
                                      </tr>
                                    )}
                                      {detail.size && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>سایز ها</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.size}</td>
                                      </tr>
                                    )}

                                      {detail.Weight && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>وزن</td>
                                        <td style={{ color: "#fdfcfc" }}> {detail.Weight}</td>
                                      </tr>
                                    )}
                                      {detail.used && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>مورد استفاده</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.used}</td>
                                      </tr>
                                    )}
                                      {detail.Set_of_accessories && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>ست لوازم</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.Set_of_accessories}</td>
                                      </tr>
                                    )}
                                      {detail.size_body && (
                                      <tr>
                                        <td style={{ color: "#fdfcfc" }}>سایز بدنه</td>
                                        <td style={{ color: "#fdfcfc" }}>{detail.size_body}</td>
                                      </tr>
                                    )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*====== End - Tab 1 ======*/}
                          {/*====== Tab 2 ======*/}
                          <div className="tab-pane" id="pd-tag">
                            <div className="pd-tab__tag">
                              <h2 className="u-s-m-b-15">ADD YOUR TAGS</h2>
                              <div className="u-s-m-b-15">
                                <form>
                                  <input className="input-text input-text--primary-style" type="text" />
                                  <button className="btn btn--e-brand-b-2" type="submit">ADD TAGS</button></form>
                              </div>
                              <span className="gl-text">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                            </div>
                          </div>
                          {/*====== End - Tab 2 ======*/}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div></div></div>
            </div>
            
  );
};

export default Detail;

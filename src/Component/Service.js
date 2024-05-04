import React from "react";
import { NavLink } from "react-router-dom";

export default function Service() {
  return (
    <>
      <nav>
        <ul className="list">
          <div className="img1">
            <img className="img-list" src="./logo file/ecomerce2.png" alt="" />
          </div>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Signin">Signin</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Service">Service</NavLink>
          </li>
          <div className="bdn">
            <input type="text" placeholder="Search" />
            <button className="btn">Search</button>
          </div>
        </ul>
      </nav>
      <div className="icon">
        <p className="paragraph">Email:nizamaniqaiserkhan323@gmail.com</p>
        <div className="icon-list">
          <i>
            <i class="fa-brands fa-twitter"></i>
          </i>
          <i>
            <i class="fa-brands fa-facebook-f"></i>
          </i>
          <i>
            <i class="fa-brands fa-whatsapp"></i>
          </i>
          <i>
            <i class="fa-brands fa-korvue"></i>
          </i>
        </div>
      </div>
      {/* <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide>
        <img className='img-name' src="./images/daraz9.jpg" alt="" style={{with:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='img-name' src="./images/daraz10.png" alt="" style={{with:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='img-name' src="./images/daraz7.jpeg" alt="" style={{with:"100%"}} />
      </SwiperSlide>
      <SwiperSlide><img className='img-name' src="./images/daraz6.jpg" alt="" style={{with:"100%"}} /></SwiperSlide>
    </Swiper> */}
      <div className="container"></div>
      <div className="img-card">
        <div className="card">
          <div className="image-folder">
            <img className="image-name" src="./images/image1.png" alt="" />
            <div className="lines">Free Delivery</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image2.png" alt="" />
            <div className="lines">Mark</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image3.png" alt="" />
            <div className="lines">Fashion</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image4.png" alt="" />
            <div className="lines">Beauty</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image5.png" alt="" />
            <div className="lines">Home & Decor</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image6.png" alt="" />
            <div className="lines">Like New</div>
          </div>
          <div className="image-folder">
            <img className="image-name" src="./images/image7.png" alt="" />
            <div className="lines">Flash Sale</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes2.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes3.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes4.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes5.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes6.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes7.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes8.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes9.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes10.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes11.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes12.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/productdaraz.webp" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img
              className="img-item"
              src="./images/productdaraz2.webp"
              alt=""
            />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/productdaraz3.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img
              className="img-item"
              src="./images/productdaraz4.webp"
              alt=""
            />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/productdaraz5.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/productdaraz6.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/typing (1).jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/typing (2).jpg" alt="" />
            <div className="line">Branded loptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/typing3.jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/Laptop.jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/Laptop2.jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img
              className="img-item"
              src="./images/development (1).jpg"
              alt=""
            />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img
              className="img-item"
              src="./images/development (2).jpg"
              alt=""
            />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/magzine.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/article4 (1).jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/headphone.webp" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/headphone2.webp" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/headphone3.webp" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/headphone4.webp" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/box1_image.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/box2_image.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/box3_image.jpg" alt="" />
            <div className="line">Branded produt</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/box4_image.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/box5_image.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/box7_image.jpg" alt="" />
            <div className="line">Branded product</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
        <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes2.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes3.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes4.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes5.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes6.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes7.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes2.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes3.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes4.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes5.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes6.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes7.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes2.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes3.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes4.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes5.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes6.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes7.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heading2">Spectacular Material</div>
        <div className="item-list">
          <div className="item-card">
            <img className="img-item" src="./images/shoes2.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes3.jpg" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes4.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes5.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes6.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/shoes7.webp" alt="" />
            <div className="line">Branded Shoes</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
        </div>
      </div>
      </div>
      <footer className="footer1">
      <div className="footer-line"><i class="fa-solid fa-globe"></i> React-E-Commerce Website</div>
    </footer>
    </>
  );
}

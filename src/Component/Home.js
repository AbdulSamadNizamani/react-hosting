import { NavLink } from "react-router-dom";
import React from "react";
import $ from "jquery";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export default function Home() {
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
            <img className="img-item" src="./images/productdaraz2.webp" alt="" />
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
            <img className="img-item" src="./images/productdaraz4.webp" alt="" />
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
            <img className="img-item" src="./images/development (1).jpg" alt="" />
            <div className="line">Branded laptop</div>
            <div className="line">90%Off</div>
            <div className="price">Rs:4450$</div>
          </div>
          <div className="item-card">
            <img className="img-item" src="./images/development (2).jpg" alt="" />
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
            <img className="img-item" src="./images/headphone3.webp" alt=""/>
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
        <div className="login1">
        <NavLink className='login-item' to="/Service">Load More</NavLink>
        </div>
      </div>
      <footer>
        <div class="collection">
        <div class="write">
            <div class="write2">
                <h2 class="heading">How Ecomerce Spectacular&copy;website Transformed Online Shopping in Pakistan</h2>
                <p class="right">Ecomerce Spectacular&copy;website first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteedWhat Makes Us Different from Other Online Shopping Platforms?

                    Select from the Largest Online Marketplace in Pakistan
                    With over 15 million products to select from, Ecomerce Spectacular&copy;website offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone.
                    
                    Hassle Free Delivery
                    Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.
                    
                    Payment Options to Suit Every Style
                    You can choose to pay through a credit/debit card, opt for cash on delivery or even go for EMI (easy monthly instalments). You can also avail exclusive offers bydownloading Ecomerce Spectacular&copy;website Wallet – a closed loop digital wallet that offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment method for our customers' ease </p>
            </div>
            <div class="write2">
                <h2 class="heading">Shop from Verified Vendors </h2>
                <p class="right">Shop from Verified Vendors
                    Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Ecomerce Spectacular&copy;website Marketplace and Ecomerce Spectacular&copy;website Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!
                    
                    Shop Around the World with Ecomerce Spectacular&copy;website Global Collection
                    International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Ecomerce Spectacular&copy;website website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
                    
                    Avail Exclusive Discounts, Offers, and Promotions
                    Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!
                    
                    Buy Value, not Just Goods with Ecomerce Spectacular&copy;website Care
                    Ecomerce Spectacular&copy;website does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks.
                    
                    Simplify Corporate Purchases
                    Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.</p>
            </div>
        </div>
        <div class="write">
            <div class="write2">
                <h2 class="heading">Top Categories & Brands</h2>
                <p class="right">Top Categories & Brands
                    Mobile Phones in Pakistan
                    Apple iPhones , Honor Mobiles , Huawei Mobiles , Tecno Mobiles , Redmi Mobiles , Xiaomi Mi Mobiles , Nokia Mobiles , OnePlus Mobiles , Oppo Mobile Phones , Realme Mobiles , Samsung Mobile Phones , Vivo Mobile Phones , Mobile Accessories , Smart Watches
                    Latest Laptops
                    Dell Laptops , HP Laptops , Lenovo Laptops , Mouse , Gaming Graphic Cards , lenovo ideapad 3 , Macbook Pro 13 , Hp Probook 650 G2
                    Led Tv
                    Changhong Led Tv , LG Led Tv , Samsung Led Tv , Sony Led Tv , TCL LED TVs
                    Home Appliances
                    Microwave oven , Geyser , Heater , Refrigerators , Deep Freezers , Generators , Water Dispensers , Fans , Room Cooler , Table Fans , Wall Fans , Exhaust Fans , Pedestal Fans , Window Ac , Solar Panel , Washing Machine
                    DSLR Cameras
                    Camera Tripods , Drones , IP & CCTV Cameras , Nikon D7000 , Nikon D5600 , Canon 200D , Canon 1200D , Fujifilm Instax Mini 11 , Canon M50
                    Health & Beauty
                    sunisa foundation , Biofad , janssen facial kit , Glutathione Injection , Glutathione Cream Sauvage , Glutathione Tablets , Glutathione Soap , Infrared Thermometers , N95 Mask
                    Trending
                    June Shopping Expo 2023 , Azaadi Sale 2022 , Shopping Expo , 11 11 Sale , 12.12 Sale , Live Cricket Streaming , Online Bills , Core I5 Laptop , Gtx 1060 , Samsung A32 , Samsung A51 , Samsung A52 , Samsung A71 , Samsung A72 , Samsung M31 , Samsung S20 , Samsung S20 Ultra 5G , Samsung S21 , Samsung S21 Ultra , Samsung Z Flip , Tecno Camon 17 , Tecno Spark 6 , Vivo V20 , Poco X3 Pro , Vivo V21 , Vivo V21E , Vivo X70 Pro , Vivo Y12 , Vivo Y12S , Vivo Y1S , Vivo Y20 , Vivo Y51 , Vivo Y51S , Oppo F19 Pro , Oppo Reno 6 , Xiaomi Poco F3 , Xiaomi Poco M3 , Xiaomi Poco X3 , Xiaomi Poco X3 Gt , Xiaomi Redmi 9C , Xiaomi Redmi Note 10 Pro , Sharp Aquos R2
                    SHOP WORLDWIDE WITH LAZADA
                    Singapore , Malaysia , Philipines , Indonesia , Vietnam , Thailand  </p>
            </div>
            <div class="write2">
                <h2 class="heading">Oppo A15s detailed specifications</h2>
                <p class="right">Build 	OS 	Android 10 OS  
                    UI 	ColorOS 7.2  
                    Dimensions 	164 x 75.4 x 7.9 mm  
                    Weight 	177 g  
                    SIM 	Dual Sim, Dual Standby (Nano-SIM)  
                    Colors 	Dynamic Black, Fancy White  
                    Frequency 	2G Band 	SIM1: GSM 850 / 900 / 1800 / 1900
                    SIM2: GSM 850 / 900 / 1800 / 1900  
                    3G Band 	HSDPA 850 / 900 / 2100  
                    4G Band 	LTE band 1(2100), 3(1800), 4(1700/2100), 5(850), 8(900), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500)  
                    Processor 	CPU 	Octa-core (4 x 2.35 GHz Cortex-A53 + 4 x 1.8 GHz Cortex-A53)  
                    Chipset 	Mediatek MT6765 Helio P35 (12nm)  
                    GPU 	PowerVR GE8320  
                    Display 	Technology 	IPS LCD Capacitive Touchscreen, 16M Colors, Multitouch  
                    Size 	6.52 Inches  
                    Resolution 	720 x 1600 Pixels (~269 PPI)  
                    Memory 	Built-in 	64GB Built-in, 4GB RAM  
                    Card 	microSD Card, (supports up to 256GB) (dedicated slot)  
                    Camera 	Main 	Triple Camera: 13 MP, f/2.2, (wide), 1/3.1", PDAF + 2 MP, f/2.4, (macro) + 2 MP, f/2.4, (depth), LED Flash  
                    Features 	Geo-tagging, touch focus, face detection, panorama, HDR, Video
                    Front 	8 MP, f/2.0, (wide), HDR, Video
                    Connectivity 	WLAN 	Wi-Fi 802.11 b/g/n, Wi-Fi Direct, hotspot  
                    Bluetooth 	v5.0 with A2DP, LE, apt-X  
                    GPS 	Yes + A-GPS support & Glonass, BDS  
                    Radio 	FM Radio  
                    USB 	microUSB 2.0, USB On-The-Go  
                    NFC 	No  
                    Data 	GPRS, EDGE, 3G (HSPA 42.2/5.76 Mbps), 4G LTE-A  
                    Features 	Sensors 	Accelerometer, Fingerprint (rear mounted), Proximity  
                    Audio 	3.5mm Audio Jack, MP3/WAV/WMA/eAAC+/FLAC player, MP4/WMV/H.265 player, Speaker Phone  
                    Browser 	HTML5  
                    Messaging 	SMS(threaded view), MMS, Email, Push Mail, IM  
                    Games 	Built-in + Downloadable  
                    Torch 	Yes  
                    Extra 	Glass front, Plastic back, Plastic frame, Active noise cancellation with dedicated mic, Photo/video editor, Document viewer  
                    Battery 	Capacity 	(Li-Po Non removable), 4230 mAh  
                          - Battery charging 10W  </p>
            </div>
        </div>
    </div>
    </footer>
    <footer className="footer1">
      <div className="footer-line"><i class="fa-solid fa-globe"></i> React-E-Commerce Website</div>
    </footer>
    </>
  );
}

import React from 'react'
import { NavLink } from "react-router-dom";
import $ from "jquery";
export default function Login() {
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
      <div className="heading"> <i class="fa-solid fa-globe"></i>Welcome to React-E-Commerce Website</div>
      <div className="login-curve">
        
        <div className="loin-get">
        <h4>Enter Email</h4>
        <input className='input-tag' type="email" placeholder='Enter Your Email Address' />
        </div>
        <div className="loin-receive">
        <h4>Enter Your Password</h4>
        <input className='input-tag' type="password" placeholder='Enter Your Password' />
        </div>
        <div className="google">
            <button className='bdn-curve red'>Login</button>
            <p>Or,Login With</p>
            <button className='bdn-curve blue'><i class="fa-brands fa-facebook"></i>Facebook</button>
            <br />
            <button className='bdn-curve margin red2'><i class="fa-brands fa-google-plus-g"></i>Google</button>
        </div>
      </div>
      </>
  )
}

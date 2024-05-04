import React from 'react'
import { NavLink } from "react-router-dom";

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
        <h4>Enter Your Name</h4>
        <input className='input-tag' type="text" placeholder='Enter Your Name' />
        </div>
        <div className="loin-get">
        <h4>Enter Your Full Name</h4>
        <input className='input-tag' type="text" placeholder='Enter Your full Name' />
        </div>
        <div className="loin-get">
        <h4>Enter Your Data of Birth</h4>
        <select name="Month" id="Month">
          
                <option value="january">january</option>
                <option value="february">february</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="November">November</option>
                <option value="december">December</option>
                </select>
            <select class="section1" required name="days" id="days">
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thirsday">Thirsday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">sunday</option>
            </select>
            <select class="section1" required name="years" id="years">
                <option value="1990">Year</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2017">2016</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
        </div>
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

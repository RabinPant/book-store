import React from 'react';

import './contact.styles.scss';

const ContactPage = ()=>(
  <div className='container'>
      <div className='head'>
          <h2>Contact Us</h2>
          <h3>Swing by Bookstore to Buy Merch, or leave us a message </h3>
      </div>
      <div className='row'>
          <div className='column'>
              <img src="https://maps.ecok.edu/campusmap/Maps/campus.gif" alt="map"/>
          </div>
          <div className='column'>
              <form action="">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id='fname'placeholder='First Name'/>
                  <label htmlFor="fname">Last Name</label>
                  <input type="text" id='lname'placeholder='Last Name'/>
                  <label htmlFor="fname">Country</label>
                  <select name="country" id="country">
                      <option value="australia">America</option>
                      <option value="australia">Nepal</option>
                      <option value="australia">Canada</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                  <textarea name="subject" id="subject" cols="30" rows="10" placeholder='Write Something...'></textarea>
                  <input type="submit" value='submit'/>
              </form>
          </div>
      </div>
  </div>
);

export default ContactPage;

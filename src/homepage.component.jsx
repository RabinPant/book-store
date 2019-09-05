import React from 'react';
import './homepage.styles.scss'

const HomePage = ()=>(
    <div className='HomePage'>
        <div className='directory-menu'> 
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>Books</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>T-shirts</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
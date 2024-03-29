import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utlis';

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assests/crown.svg';

import {selectCartHidden } from '../../redux/cart/cart.selectors';

import { selectCurrentUser} from '../../redux/user/user.selectors';
const Header = ({ currentUser,hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='textHeader'>
          <h1>EAST CENTRAL UNIVERISTY</h1>
      </div>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
            <CartIcon/>
      </div>
      {
        hidden?null:<CartDropdown/>
      }
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  });
export default connect(mapStateToProps)(Header);
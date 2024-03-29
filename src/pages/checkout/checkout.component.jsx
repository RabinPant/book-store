import React from 'react';
import {connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

import checkoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const checkoutPage = ({cartItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span >Product</span>
            </div>
            <div className='header-block'>
                <span >Description</span>
            </div>
            <div className='header-block'>
                <span >Quantity</span>
            </div>
            <div className='header-block'>
                <span >Price</span>
            </div>
            <div className='header-block'>
                <span >Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
            ))
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please Use the following test credit card
            <br/>
            4242 4242 4242 4242 - Exp:01/20 -CVV:123
        </div>
        <div>
        <StripeCheckoutButton price={total}/>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
});


export default connect(mapStateToProps)(checkoutPage);
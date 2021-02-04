import React, { useState } from 'react'
import './CartPage.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartItem from './CartItem/CartItem';
import Bill from './Bill/Bill';

function CartPage() {
    return (
        <div className="cartPage">
            <div className="cartPage__title">
                <h1>MY CART</h1>
                {/* <div className="cartPage__titleContinueSection">
                    <ArrowBackIosIcon />
                    <p>Continue shopping</p>
                </div> */}
            </div>

            <div className="cartPage__main">
                <div className="cartPage__items">
                    <CartItem
                        img="gems/orange-sapphire.png"
                        name="Orange Sapphire"
                        currency="$"
                        price={890.00}
                    />
                    <CartItem
                        img="gems/teal-sapphire.png"
                        name="Teal Sapphire"
                        currency="$"
                        price={890.00}
                    />
                </div>
                <div className="cartPage__orderSummary">
                    <Bill 
                        subTotal={890.00}
                        delivery={90.00}
                        tax={20.00}
                        currency="$"
                    />
                </div>
            </div>
        </div>
    )
}

export default CartPage

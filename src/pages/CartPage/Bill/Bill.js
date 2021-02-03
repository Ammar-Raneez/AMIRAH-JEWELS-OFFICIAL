import React from 'react'
import './Bill.css'

function Bill({ subTotal, delivery, tax, currency }) {
    return (
        <div className="bill">
            <div className="bill__topSection">
                <p>Order Summary</p>
                <span>
                    <p>Subtotal</p>
                    <p>{currency}{subTotal}</p>
                </span>
                <span>
                    <p>Delivery</p>
                    <p>{currency}{delivery}</p>
                </span>
                <span>
                    <p>Tax</p>
                    <p>{currency}{tax}</p>
                </span>
            </div>
            <div className="bill_middleSection">
                <span>
                    <p>Estimated Total</p>
                    <p>{currency}{subTotal + delivery + tax}</p>
                </span>
            </div>
            <div className="bill__bottomSection">
                <div className="bill__bottomSectionButton">
                    <button>CHECK OUT</button>
                </div>
                <div className="bill__bottomSectionWarrant">
                    <p>
                        Enjoy Complimentary shipping and returns on your order.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bill

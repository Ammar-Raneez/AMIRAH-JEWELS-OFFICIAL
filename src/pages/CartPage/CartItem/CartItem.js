import React, { useEffect, useState } from 'react'
import './CartItem.css'
import CloseIcon from '@material-ui/icons/Close';

function CartItem({ img, name, price, currency }) {
    const [qty, setQty] = useState(1);
    let [changedPrice, setChangedPrice] = useState(price);

    // useEffect(() => {

    // }, [qty, changedPrice])

    function updatePrice(event) {
        onQtyChange(event);
        let updatedPrice = qty * price;
        setChangedPrice(updatedPrice);
        console.log(changedPrice)
    }

    function onQtyChange(event) {
        setQty(event.target.value);
    }

    return (
        <div className="cartItem">
            <div className="cartItem__cross">
                <CloseIcon />
            </div>
            <div className="cartItem__description">
                <div className="cartItem__descriptionleft">
                    <img src={img} />
                </div>
                <div className="cartItem__descriptionRight">
                    <div className="cartItem__descriptionRightTop">
                        <h1>{name}</h1>
                    </div>
                    <div className="cartItem__descriptionRightBottom">
                        <div className="cartItem__descriptionRightBottomQty">
                            <p>Qty</p>
                        </div>
                        <div className="cartItem__descriptionRightBottomDetails">
                            <input
                                type="number"
                                name="Quantity"
                                placeholder="Quantity"
                                onChange={e => updatePrice(e)}
                                value={qty}
                                min={0}
                            />
                            <p>Price {currency}{changedPrice}</p>
                        </div>
                    </div>
                    <div className="cartItem__descriptionRightSave">
                        <p>Add to Wishlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem

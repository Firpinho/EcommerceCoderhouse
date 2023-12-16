import cart from '../assets/cart.svg'

import { useContext } from 'react'

import { CartContext } from '../contexts/CartContext'

export const CartWidget = (props) => {

    const {totalProductsNumber} = useContext(CartContext)

    return (
        <div className="cart">
            <div className="icon">
                <img src={cart} alt="Cart" />
            </div>
            {totalProductsNumber() !== 0 && <span>{totalProductsNumber()}</span>}
        </div>
    )
}
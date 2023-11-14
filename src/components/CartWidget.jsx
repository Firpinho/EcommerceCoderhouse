import cart from '../assets/cart.svg'

export const CartWidget = (props) => {
    return (
        <div className="cart">
            <div className="icon">
                <img src={cart} alt="Cart" />
            </div>
            <span>{props.itemCount}</span>
        </div>
    )
}
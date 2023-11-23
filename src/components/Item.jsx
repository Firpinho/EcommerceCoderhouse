import info from '../assets/info.svg'
import { useState } from 'react'
import cartAdd from '../assets/cart-add.svg'
import { Link } from 'react-router-dom'

export const Item = (props) => {
    const [active, setActive] = useState(false);
    const turn = () => {
        if (active) {
            setActive(false);
        }else {
            setActive(true);
        }
    }
    return (
        <div className={active ? "default_card active" : "default_card"} onClick={turn}>
            <div className="images__side">
                <img src="/boximage.png" alt="" />
            </div>
            <div className="info__side">
                <div className="card__title">
                    <p>{props.item.title}</p>
                </div>
                <div className="card__body">
                    <div className="card__owner">
                        <img src={props.item.owner_pic} alt="Card owner profile photo" />
                        <p>{props.item.owner}</p>
                    </div>
                    <div className="card__description">
                        <p>{props.item.description}</p>
                    </div>
                </div>
                <div className="card__price">
                    <p>${props.item.price}</p>
                </div>
                <div className="card__buttons">
                    <Link className="info__button" to={`/lootbox/${props.item.id}`}><img src={info} alt="" /></Link>
                    <a className="card__button"><img src={cartAdd} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
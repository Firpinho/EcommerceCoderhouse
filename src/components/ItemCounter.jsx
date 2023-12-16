import { useState, useContext } from "react";
import cartAdd from "../assets/cart-add.svg";
import { Link } from "react-router-dom";
import info from "../assets/info.svg";
import { CartContext } from "../contexts/CartContext";


export const ItemCounter = ({ stock, initialValue, item }) => {

  const [count, setCount] = useState(initialValue);

  const { add } = useContext(CartContext);

  const handleCount = (flag, count) => {
    //flag = true  --- Aumenta el numero
    //flag = false --- Disminuye el numero
    (flag) ? setCount(count+1) : setCount(count-1);
  };

  return (
    <>
      <div className="item__count">
        <button onClick={() => {handleCount(false, count)}} disabled={count === 1 && true}>-</button>
        <span>{count}</span>
        <button onClick={() => {handleCount(true, count)}} disabled={count === stock && true}>+</button>
      </div>
      <div className="card__buttons">
          <Link
            className="button info__button"
            to={`/lootbox/${item.id}`}
          >
            <img src={info} alt="Lootbox details" />
          </Link>
          <a className="button card__button" onClick={() => add(item, count)}>
            <img src={cartAdd} alt="" />
          </a>
        </div>
    </>
  );

}

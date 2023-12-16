
import { useState } from "react";
import { ItemCounter } from "./ItemCounter";

export const Item = (props) => {
  const [active, setActive] = useState(false);

  const turn = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div
      className={active ? "default_card card_active" : "default_card"}
      onClick={() => {
        !active && turn();
      }}
    >
      {active && (
        <span className="close__card" onClick={turn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </span>
      )}
      <div className="images__side">
        <img src="/boximage.png" alt="" />
      </div>
      <div className="info__side">
        <div className="card__title" id="item_info">
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
        <ItemCounter initialValue={1} stock={props.item.stock} item={props.item} />
      </div>
    </div>
  );
};

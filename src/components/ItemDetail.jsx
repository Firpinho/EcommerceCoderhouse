import creditCardIcon from "../assets/tarjeta.svg";
import pointsIcon from "../assets/puntos.svg";

export const ItemDetail = (props) => {
  return (
    <div className="item_info_container">
      <div className="item_banner__slider">
        <img src="/boximage.png" alt="Lootbox image slider" />
      </div>
      <div className="item__info">
        <h1 className="title">{props.item.title}</h1>
        <div className="owner">
          <img src="/pfp.png" alt="Owner profile photo" />
          <p>{props.item.owner}</p>
        </div>
        <div className="description">
          <p className="title">Descripción:</p>
          <p className="description__content">{props.item.description}</p>
        </div>
        <div className="prizes">
          <p className="title">Premios:</p>
          <p className="prizes__content">
            <p className="prize legendary_prize">Premio legendario  1.54%</p>
            <p className="prize epic_prize">Premio epico 3.34%</p>
            <p className="prize rare_prize">Primer premio raro 10.43%</p>
            <p className="prize rare_prize">Segundo premio raro 12.43%</p>
            <p className="prize common_prize">Primer premio comun 24.15%</p>
            <p className="prize common_prize">Segundo premio comun 25.89%</p>
            <p className="prize common_prize">Tercer premio comun 22.22%</p>
          </p>
        </div>
        <div className="bottom">
          <div className="item__warnings">
            <p>¡Este objeto no es reembolsable!</p>
          </div>
          <div className="item__buttons">
            <a href="">
              <img src={pointsIcon} alt="Buy with points" />
              <p>{Math.floor(props.item.price) * 100}</p>
            </a>
            <a href="" className="buy_credit_card__button">
              <img src={creditCardIcon} alt="Buy with credit card" />
              <p>{props.item.price}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

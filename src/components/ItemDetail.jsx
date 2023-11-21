export const ItemDetail = (props) => {
    return (
        <div className="item_info_container">
        <div className="item_banner__slider">
          <img src="#" alt="Lootbox image slider" />
        </div>
        <div className="item__info">
            <h1>{props.item.title}</h1>
            <div className="owner">
                <img src="#" alt="Owner profile photo" />
                <p>{props.item.owner}</p>
            </div>
            <div className="description">
                {props.item.description}
            </div>
            <div className="item__warnings">
                <p>Este objeto no es reembolsable</p>
            </div>
            <div className="item__buttons">
                <a href=""><p>${props.item.price}</p></a>
                <p></p>
                <a href=""><p>{Math.floor(props.item.price) * 100} points</p></a>
            </div>
        </div>
      </div>
    )
}
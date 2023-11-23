import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";


import { data } from "../data/items";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  const { box_id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

    promise.then((response) => {
        const filter = response.find((item) => item.id === Number(box_id));
        console.log(filter);
        setItem(filter);
    });
  }, [box_id])


  return (
    <div className="item_detail__container">
      {item ? <ItemDetail item={item}/> : <LoadingScreen section="LootBox"/>}
    </div>
  )
};
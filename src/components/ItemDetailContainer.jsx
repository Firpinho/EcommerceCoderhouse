import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

import { data } from "../data/items";
import { ItemDetail } from "./ItemDetail";
import { Line } from "./Line";
import { ItemListContainer } from "./ItemListContainer";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { box_id } = useParams();

  useEffect(() => {

    setItem(null)
    window.scrollTo(0, 0);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

    promise.then((response) => {
      const filter = response.find((item) => item.id === Number(box_id));
      if (!filter) {
       
      }
      setItem(filter);
    });
  }, [box_id]);

  return (
    <>
      <div className="item_detail__container">
        {item ? (
          <ItemDetail item={item} />
        ) : (
          <LoadingScreen section="LootBox" />
        )}
      </div>
      <Line />
      <ItemListContainer category="Mas cajas" />
    </>
  );
};

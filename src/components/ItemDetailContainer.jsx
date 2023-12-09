import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

import { ItemDetail } from "./ItemDetail";
import { Line } from "./Line";
import { ItemListContainer } from "./ItemListContainer";


import {getFirestore, getDoc, doc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { box_id } = useParams();

  useEffect(() => {

    setItem(null)
    window.scrollTo(0, 0);

    const db = getFirestore()
    const refDoc = doc(db, "items", box_id)

    getDoc(refDoc).then((snapshot) => {
      const item = snapshot.data((doc) => {return {id: doc.id, ...doc.data()}});
      setItem(item);
    })
    
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

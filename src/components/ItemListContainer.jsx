import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { ItemList } from "./ItemList";
import { LoadingScreen } from "./LoadingScreen";

import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


export const ItemListContainer = (props) => {
  const [items, setItems] = useState(null);
  const { category_filter } = useParams();

  useEffect(() => {

    setItems(null)

    const db = getFirestore()
    const refDocs = !category_filter ? collection(db, "items") : query(collection(db, "items"), where("category", "==", category_filter))

    getDocs(refDocs).then((snapshot) => {
      const items = snapshot.docs.map((doc) => {return {id: doc.id, ...doc.data()}});
      setItems(items)
    })

  }, [category_filter]);

  return (
    <div className="list_container">
      <h2>{props.category}</h2>
      <div className="list">
        {items ? <ItemList items={items}></ItemList> : <LoadingScreen section="ItemList"/>}
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../data/items";
import { ItemList } from "./ItemList";
import { LoadingScreen } from "./LoadingScreen";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState(null);
  const { category_filter } = useParams();

  useEffect(() => {

    setItems(null)

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

    promise.then((response) => {
      if (!category_filter) setItems(response);
      else {
        const filter = response.filter((item) => item.category === category_filter);
        setItems(filter);
      }
    });
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

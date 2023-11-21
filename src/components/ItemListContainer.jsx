import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../data/items";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { category_filter } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 500);
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
        <ItemList items={items}></ItemList>
      </div>
    </div>
  );
};

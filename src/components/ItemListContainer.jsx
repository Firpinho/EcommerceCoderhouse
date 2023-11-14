import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../data/items";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((response) => {
      if (!category) setItems(response);
      else {
        const filter = response.filter((item) => item.category === category);
        setItems(filter)
      }
    }, []);
  });

  return (
    <div className="main_title">
      <div className="content">
        <h1>{props.greeting}</h1>
        <div className="list">
          <ItemList items={items}></ItemList>
        </div>
      </div>
    </div>
  );
};

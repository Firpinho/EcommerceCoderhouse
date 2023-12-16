import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartForm = () => {
  const { items, get_total, clear } = useContext(CartContext);

  const create_order = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: event.target[0].value,
        mail: event.target[1].value,
        phone: event.target[2].value,
      },
      items: { ...items },
      total: get_total(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      if (id) {
        clear()
        alert("Order registered");
      }
    });
  };

  return (
    <div className="cart__form">
      <h1>Formulario de compra</h1>
      <form onSubmit={(event) => create_order(event)}>
        <input type="text" required={true} placeholder="Name" />
        <input type="text" required={true} placeholder="Email" />
        <input type="text" required={true} placeholder="Phone" />
        <button className="button" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

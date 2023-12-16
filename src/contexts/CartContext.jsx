import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const exists = (item) => items.some((product) => product.id === item.id);

  const clear = () => setItems([]);

  const add = (item, quantity = 1) => {
    if (exists(item)) {
      const result = items.find((storedItem) => storedItem.id === item.id);
      items[items.indexOf(result)].quantity += quantity;
      setItems(items);
    } else setItems([{ ...item, quantity }, ...items]);
  };

  const get_total = () => {
    let total = 0;
    items.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const totalProductsNumber = () => {
    let total = 0;
    items.forEach((item) => (total += item.quantity));
    return total;
  };

  return (
    <CartContext.Provider
      value={{ items, clear, add, get_total, totalProductsNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

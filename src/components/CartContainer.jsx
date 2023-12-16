import { CartContent } from "./CartContent";
import { CartForm } from "./CartForm";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { totalProductsNumber, clear } = useContext(CartContext);

  return (
    <div className="cart__container">
      {totalProductsNumber() ? (
        <>
          <CartContent />
          <a className="button" onClick={() => clear()}>
            Limpiar carrito
          </a>
          <CartForm />
        </>
      ) : (
        <div className="empty__cart_container">
          <div className="empty_cart">
            <h1>No has agregado ningun producto al carrito aún...</h1>
            <Link to="/categorias" className="button">
              Explora nuestros productos.
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

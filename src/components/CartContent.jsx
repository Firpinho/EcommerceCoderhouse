import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartContent = () => {
  const { items, get_total } = useContext(CartContext);

  return (
    <div className="cart__list">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <img src="" alt="" height={"100px"} width={"100px"} />
              </td>
              <td>{item.price}</td>
              <td>
                <a className="button">X</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <p>
                Total: <span>{get_total()}</span>
              </p>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

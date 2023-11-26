import { CartWidget } from "./CartWidget";
import destacado from "../assets/destacado.svg";
import categorias from "../assets/categorias.svg";
import autor from "../assets/autor.svg";
import crear from "../assets/crear.svg";
import { NavLink } from "react-router-dom";

const options = [
  {
    link: "/destacado",
    icon: destacado,
    text: "Destacado",
  },
  {
    link: "/categorias",
    icon: categorias,
    text: "Categorias",
  },
  {
    link: "/cajasDeAutor",
    icon: autor,
    text: "Cajas de autor",
  },
];

export const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="main_content">
          <NavLink className="nav_brand" to='/'>
            <p>Loot?Hub</p>
          </NavLink>
          <div className="options">
            {options.map((option) => (
              <div className="item" key={option.text}>
                <NavLink className='button' to={option.link}>
                  <img src={option.icon} alt="Option icon" />
                  <p>{option.text}</p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="other_options">
          <CartWidget itemCount="3" />
          <div className="item__1">
            <a className='button' href="">
              <img src={crear} alt="Crear caja" />
              <p>Crear Caja</p>
            </a>
          </div>
          <div className="item__2">
            <a className="button" href="">
              <p>Login</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

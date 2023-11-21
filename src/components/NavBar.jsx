import { CartWidget } from "./CartWidget";
import destacado from "../assets/destacado.svg";
import categorias from "../assets/categorias.svg";
import autor from "../assets/autor.svg";
import crear from "../assets/crear.svg";

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
  const clicky = () => window.location = "/";
  return (
    <header>
      <nav>
        <div className="main_content">
          <p className="brand" onClick={clicky}>Loot?Hub</p>
          <div className="options">
            {options.map((option) => (
              <div className="item" key={option.text}>
                <a href={option.link}>
                  <img src={option.icon} alt="Option icon" />
                  <p>{option.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="other_options">
          <CartWidget itemCount="3" />
          <div className="item__1">
            <a href="">
              <img src={crear} alt="Crear caja" />
              <p>Crear Caja</p>
            </a>
          </div>
          <div className="item__2">
            <a href="">
              <p>Login</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

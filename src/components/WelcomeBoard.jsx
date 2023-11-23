import compass_icon from "../assets/compass.svg";
import { NewsLetter } from "./NewsLetter";
import search_icon from "../assets/magnifying-glass-solid.svg"

export const WelcomeBoard = () => {
  return (
    <div className="welcome__board">
      <div className="main__content">
        <div className="heading">
          <h1 className="title">Bienvenido/a a <span className="brand">Loot?Hub</span></h1>
          <h2>Un buen lugar para ganar</h2>
        </div>
        <div className="explore">
          <a href="/categorias/">
            <img src={compass_icon} alt="Explorar" />
            Explorar cajas
          </a>
          <div className="search__bar">
            <img src={search_icon} alt="Buscar cajas" /><input type="text" placeholder="Buscar cajas"/>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Categorias } from "./views/Categorias";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Home } from "./views/Home";
import "./styles/App.css";
import { Error404 } from "./components/Error404";

export default function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destacado" element={<h1>Destacado</h1>} />
        <Route path="/categorias" element={<Categorias />} />
        <Route
          path="/categorias/:category_filter"
          element={<Categorias search="category" />}
        />
        <Route path="/lootbox/:box_id" element={<ItemDetailContainer />} />
        <Route path="/cajasDeAutor" element={<h1>Cajas de autor</h1>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

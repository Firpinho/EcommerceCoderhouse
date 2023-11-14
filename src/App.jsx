import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import './App.css'
import { Error404 } from "./components/Error404"


export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<h1>Bienvenido/a a Loot?Hub</h1>}></Route>
                <Route path="/destacado" element={<h1>Destacado</h1>}/>
                <Route path="/categorias" element={<ItemListContainer greeting="Categorias"/>}/>
                <Route path="/categorias/:category" element={<ItemListContainer greeting="Categorias"/>}/>
                <Route path="/cajasDeAutor" element={<h1>Cajas de autor</h1>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    )
}
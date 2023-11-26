import { Categories } from "../components/Categories"
import { ItemListContainer } from "../components/ItemListContainer"
import { useParams } from "react-router-dom";

export const Categorias = (props) => {
    const { category_filter } = useParams();
    return (
        <>
        <Categories/>
        <ItemListContainer category={props.search ? category_filter : "Todos"}/>
        </>
    )
}
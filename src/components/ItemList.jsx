import { Item } from "./Item"

export const ItemList = ({items}) => {
    return items.map(item => item && <Item item={item} key={item.id}/>)
}
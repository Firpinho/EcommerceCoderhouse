import { News } from "./News"

export const NewsList = (props) => {
    return props.items.map((item) => <News item={item} key={item.id}/>)
}
import ropa from '../assets/ropa.svg';
import dispositivos from '../assets/dispositivos.svg';
import puntos from '../assets/puntos.svg';
import todos from '../assets/compass.svg';

const catergories = [
    {
        category_name: 'Todos',
        link: '/categorias',
        icon: todos
    },
    {
        category_name: 'Puntos',
        link: '/categorias/Puntos',
        icon: puntos
    },
    {
        category_name: 'Ropa',
        link: '/categorias/Ropa',
        icon: ropa
    },
    {
        category_name: 'Dispositivos',
        link: '/categorias/Dispositivos',
        icon: dispositivos
    },
]

export const Categories = () => {
    return (
        <div className="categories__box">
            {
                catergories.map((category) => <a href={category.link} key={category.link}><img src={category.icon} alt="" /><p>{category.category_name}</p></a>)
            }
        </div>
    )
}
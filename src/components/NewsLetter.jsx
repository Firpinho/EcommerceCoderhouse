import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { NewsList } from "./NewsList";
import { Line } from "./Line";

const news_array = [
    {
        id: 1,
        title: 'Actualizacion',
        content: 'Este 11 de noviembre de 1:00 AM a 7:00AM esta pagina estará fuera de servicio debido a la implementacion de la nueva version de la misma.',
        author: 'Equipo de desarrollo',
        isUpdate: true,
        newVersion: 'v1.38'
    },
    {
        id: 2,
        title: 'Nuevo creador!',
        content: 'Un nuevo creador esta por entrar a nuestras filas!! quien será?!?!',
        author: 'Loot?Hub',
        isUpdate: false,
        newVersion: ''
    }
]


export const NewsLetter = () => {

    const [news, setNews] = useState(null);

    useEffect(() =>  {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(news_array), 1500)
        });

        promise.then((result) => {
            setNews(result);
        })
    }, [news])


    return (
        <div className="newsletter__container">
            <div className="title">
                <p>Noticias!</p>
                <Line/>
            </div>
            <div className="content">
                    {news ? <NewsList items={news} />: <LoadingScreen section="default"/>}
            </div>
        </div>
    )
}
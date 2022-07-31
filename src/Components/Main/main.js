import { useEffect, useState } from "react";
import './main.css';

export default function Main () {
    const [collection, setCollection] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/collectionA.json')
            .then((response) => response.json())
            .then((data) => setCollection(data))
    },[])

    console.log(collection);

    return (
        <div className="main__box">
            <div className="main__content">
                <div className="main__top5">
                    <h3 className="top5__title">The most content</h3>
                    <div className="top5__content">
                    {collection &&
                        <p>{collection.title}</p>}
                    </div>
                </div>
                <div className="main__tag-cloud">
                    <h3 className="tag-cloud__title">Tag Cloud</h3>
                    <div className="tag-cloud__content"></div>
                </div>
                <div className="main__latest">
                    <h3 className="latest__title">Latest</h3>
                    <div className="latest__content"></div>
                </div>
            </div>
        </div>
    )
}

// localhost:3000/collection/books34#coment
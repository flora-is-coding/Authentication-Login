import { useEffect, useState } from "react";
import CollectionItem from "../CollectionItem/collection_item";
import './main.css';

export default function Main () {
    const [collection, setCollection] = useState('')

    useEffect(() => {
        fetch('https://7a71-2001-871-253-b38b-4d3c-bc01-ca39-450d.eu.ngrok.io/collections/2')
            .then((response) => response.json())
            .then((data) => setCollection(data))
    },[])

    console.log(collection);

    return (
        <div className="main__box">
            <div className="main__content">
                <div className="main__top5">
                    <h3 className="title">Most contributed to</h3>
                    <div className="top5__content">
                    {collection &&
                        <CollectionItem collection={collection}/>
                    }
                    </div>
                </div>
                <div className="main__tag-cloud">
                    <h3 className="title">Tags</h3>
                    <div className="tag-cloud__content"></div>
                </div>
                <div className="main__latest">
                    <h3 className="title">Recent</h3>
                    <div className="latest__content"></div>
                </div>
            </div>
        </div>
    )
}

// localhost:3000/collection/books34#coment
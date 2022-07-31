import { useState, useEffect } from "react";
import './collection.css';

export default function Collection () {
    const [collection, setCollection] = useState('')

    useEffect(() => {
        fetch('https://7a71-2001-871-253-b38b-4d3c-bc01-ca39-450d.eu.ngrok.io/collections/2')
            .then((response) => response.json())
            .then((data) => setCollection(data))
    },[])

    console.log(collection);

    return (
        <div className="collection__box">
            {collection && 
            <div className="collection__content">
                <div className="collection__header header">
                    <h2 className="header__title">{collection.title}</h2>
                </div>
                <div className="collection__body ">
                    <div className="collection__author">
                        <p className="author">Author: {collection.author.name}</p>
                    </div>
                    <div className="collection__description">
                        <p className="description">Description: {collection.description}</p>
                    </div>
                    <div className="collection__category">
                        <p className="category">Category: {collection.category.name}</p>
                    </div>
                    <div className="collection__tags">
                        <p className="tags">Tags: </p>
                    </div>
                    <div className="collection__items">

                    <table>
                        <thead>
                            <tr>
                                <th colSpan={collection.keys.length + 1}>Collection items</th>
                            </tr>
                            <tr>
                                {
                                    [ { name: 'id' }, ...collection.keys ].map((element) => <th>{element.name}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    collection.items.map((element) => (
                                        <tr>
                                            <td>{element.id}</td>
                                            {
                                                collection.keys.map((key) => (
                                                    <td>{element.values[key.name]}</td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
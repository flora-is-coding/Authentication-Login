import { CommentIcon } from "../CommentIcon/CommentIcon";
import { LikeIcon } from "../LikeIcon/LikeIcon";
import './collection_item.css';

export default function CollectionItem (props) {
    const collection = props.collection

    return (
        <div className="collection_item__box">
            {collection &&
                <div className="collection_item__content">
                    <div className="collection__header">
                        <div className="collection__items">
                            <div className="amount">19</div>
                        </div>
                        <div className="collection__title">
                            <p className="title">{collection.title}</p>
                            <p className="author">{collection.author.name} Wawreczko</p>
                        </div>
                    </div>
                    <div className="collection__details">
                        <div className="collection__tags">
                            <div className="tags__container">
                                <div className="tags">Literature</div>
                            </div>
                            <div className="tags__container">
                                <div className="tags">Book</div>
                            </div>
                            
                        </div>
                        <div className="collection__actions">
                            <div className="icons">{
                                <LikeIcon />
                            }</div>
                            <div className="icons">{
                                <CommentIcon />
                            }</div>
                        </div>
                    </div>
                </div>
            }       
        </div>
    )
}
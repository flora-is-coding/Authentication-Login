import { CommentIcon } from "../CommentIcon/CommentIcon";
import { LikeIcon } from "../LikeIcon/LikeIcon";
import './collection_item.css';

export default function CollectionItem () {
    return (
        <div className="collection_item__box">
            <div className="collection_item__content">
                <div className="collection__header">
                    <div className="collection__items">
                        <div className="amount">19</div>
                    </div>
                    <div className="collection__title">
                        <p className="title">My books</p>
                        <p className="author">L. Wawreczko</p>
                    </div>
                </div>
                <div className="collection__details">
                    <div className="collection__tags">
                        <div className="tags">Literature</div>
                        <div className="tags">Book</div>
                    </div>
                    <div className="collection__actions">
                        <div className="like">{
                            <LikeIcon />
                        }</div>
                        <div className="comment">{
                            <CommentIcon />
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
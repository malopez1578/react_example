import css from './Card.module.css'

export default function Card({title, url}) {
    return(
        <figure className={css.Card}>
            <div className={css.CardImageCont}>
                <img className={css.cardImage} src={url} alt={title}/>
            </div>
            <figcaption>
                <p><strong>Title:</strong> {title}</p>
            </figcaption>
        </figure>
    );
}
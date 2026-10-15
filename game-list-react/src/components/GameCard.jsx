function GameCard({ image, title, year,description,url }) {
    return (
        <div className="game">
            <img src={image} alt="{title}" />
            <h3>{title}</h3>
            <p class="year">{year}</p>
            <p class="description">{description}</p>
            <a href={url} target="_blank">게임 사이트로 이동</a>
        </div>
    )
}



export default GameCard;
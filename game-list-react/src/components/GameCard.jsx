import { useState } from "react";

function GameCard({ image, title, year, description, url }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="game">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="year">{year}</p>

            <button className="toggle-btn" onClick={() =>
                setIsOpen(!isOpen)}>
                {isOpen ? "설명 닫기" : "설명 열기"}
            </button>

            {isOpen && <p className="description">{description}</p>}

            <a href={url} target="_blank">게임 사이트로 이동</a>
        </div>
    );
}

export default GameCard;
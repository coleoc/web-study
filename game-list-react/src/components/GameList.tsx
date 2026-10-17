import GameCard from "./GameCard";
import type { Game } from "../types";

type GameListProps = {
    games: Game[];
};

function GameList({ games }: GameListProps) {
    if (games.length === 0) {
        return <p>검색 결과가 없습니다.</p>;
    }

    return (
        <div className="game-list">{
            games.map((game) => (
                <GameCard key={game.title} {...game} />
            ))}
        </div>
    );
}

export default GameList;
import { useState } from "react";
import { games } from "./data/games.js";
import GameCard from "./components/GameCard.jsx";

function App() {
  const [keyword, setKeyword] = useState("");
  const [sortType, setSortType] = useState("recommended");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(keyword.toLowerCase()) ||
    game.titleKo.toLowerCase().includes(keyword.toLowerCase())
  );

  let sortedGames = filteredGames;

  if (sortType === "nameAsc") {
    sortedGames = [...sortedGames].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "yearDesc") {
    sortedGames = [...sortedGames].sort((a, b) => b.year - a.year);
  }

  return (
    <div>
      <h1>메트로배니아 추천 사이트</h1>
      <button onClick={() => setSortType("recommended")}>전체</button>
      <button onClick={() => setSortType("nameAsc")}>이름순</button>
      <button onClick={() => setSortType("yearDesc")}>최신순</button>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="게임 이름 검색"
      />

      <div className="game-list">
        {sortedGames.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          sortedGames.map((game) => (
            <GameCard key={game.title} {...game} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
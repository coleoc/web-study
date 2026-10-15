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
    <body>
      <header>
        <h1>메트로배니아 추천 사이트</h1>
        <nav>
          <a href="#games">게임들</a>
          <a href="#introduce">소개</a>
        </nav>
      </header>

      <main>
        <section className="card" id="introduce">
          <h2>소개</h2>
          <p>
            이 사이트는 메트로배니아 장르의 게임들을 추천하는 사이트입니다.
            메트로배니아 게임은 탐험과 액션을 결합한 장르로,
            플레이어가 점점 더 많은 능력을 얻으며 새로운 지역을 탐험할 수 있게됩니다.
          </p>
        </section>
        <section className="card" id="games">
          <div className="search">
            <button className="sort-btn" onClick={() => setSortType("recommended")}>전체</button>
            <button className="sort-btn" onClick={() => setSortType("nameAsc")}>이름순</button>
            <button className="sort-btn" onClick={() => setSortType("yearDesc")}>최신순</button>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="게임 이름 검색"
            />
          </div>
          
          <div className="game-list">
            {sortedGames.length === 0 ? (
              <p>검색 결과가 없습니다.</p>
            ) : (
              sortedGames.map((game) => (
                <GameCard key={game.title} {...game} />
              ))
            )}
          </div>

        </section>
      </main>

      <footer>
        <p>© 2026 이중탁</p>
      </footer>

    </body>


  );
}

export default App;
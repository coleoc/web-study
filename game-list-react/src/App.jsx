import { useState } from "react";
import { games } from "./data/games.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortButtons from "./components/SortButtons.jsx";
import GameList from "./components/GameList.jsx";

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
    <>
      <Header title="메트로배니아 추천 사이트" />

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
          <h2>게임들</h2>
          <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
          <SortButtons sortType={sortType} onSortChange={setSortType} />
          <GameList games={sortedGames} />
        </section>

      </main>

      <footer>
        <p>© 2026 이중탁</p>
      </footer>
    </>
  );
}

export default App;
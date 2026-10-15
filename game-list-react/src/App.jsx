import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { games } from "./data/games.js";
import GameCard from './components/GameCard.jsx'

function App() {
  const siteName = "메트로배니아 추천 사이트";

  return (
    <div>
      <h1>{siteName}</h1>
      <p>게임 {2 + 2}개를 소개합니다.</p>
      {games.map((game) => (
        <GameCard key={game.title} {...game} />
      ))}
    </div>
  );
}




export default App;

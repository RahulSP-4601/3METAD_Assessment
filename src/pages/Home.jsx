import React, { useState } from "react";
import { games } from "../data/games";
import GameTabs from "../components/GameTabs";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";
import './../css/Home.css';


export default function Home() {
  const [currentGameId, setCurrentGameId] = useState(games[0].id);
  const currentGame = games.find(g => g.id === currentGameId);

  return (
    <div className="container invisible-scrollbar">
        <h1 className="main-title brand" style={{ cursor: "pointer" }}>
          <span className="three">3</span>
          <span className="m">M</span>
          <span className="logo-e">
            <span className="e-bar"></span>
            <span className="e-bar"></span>
            <span className="e-bar"></span>
          </span>
          <span className="t">T</span>
          <span style={{
            display: "inline-block",
            color: "#65e265",
            fontWeight: "bold",
            fontSize: "1em",
            transform: "rotate(180deg)",
            verticalAlign: "middle",
            fontFamily: "'Montserrat', Arial, sans-serif",
            marginLeft: '-4px',
            marginBottom: '2px'
          }}>V</span>
          <span className="d" style={{marginLeft: '6px', marginBottom: '1px'}}>D</span>
          <span className="Assessment" style={{ fontWeight: "bold", fontSize: '3rem', marginLeft: '8px', marginBottom: '2px' }}>ASSESSMENT</span>
        </h1>

      <GameTabs games={games} currentGameId={currentGameId} setCurrentGameId={setCurrentGameId} />
      <GameCard game={currentGame} />
    </div>
  );
}

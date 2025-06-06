import React from "react";
import { useNavigate } from "react-router-dom";
import './../css/GameTabs.css'
export default function GameTabs({ games, currentGameId, setCurrentGameId, showNavigation = false }) {
  const navigate = useNavigate();

  return (
    <div className="tabs">
      {games.map((game) => (
        <button
          key={game.id}
          className={`tab-btn${game.id === currentGameId ? " active" : ""}`}
          onClick={() => {
            setCurrentGameId(game.id);
            if (showNavigation) navigate(`/game/${game.id}`);
          }}
        >
          {game.name}
        </button>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import Leaderboard from "../components/Leaderboard";
import FilterBar from "../components/FilterBar";
import GameTabs from "../components/GameTabs";
import LeaderboardChart from "../components/LeaderboardChart";
import './../css/GamePage.css';

export default function GamePage() {
  const { id } = useParams();
  const game = games.find(g => g.id === id);
  const [filters, setFilters] = useState({ tier: "All" });

  if (!game) return <h2 style={{ color: "#fff" }}>Game not found!</h2>;

  const filteredLeaderboard =
    filters.tier === "All"
      ? game.leaderboard
      : game.leaderboard.filter(p => p.tier === filters.tier);

  return (
    <div className="container">
      {/* Clickable Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="main-title brand">
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
          <span className="LeaderBoard" style={{ fontWeight: "bold", fontSize: '3rem', marginLeft: '8px', marginBottom: '2px' }}>LEADERBOARDS</span>
        </h1>
      </Link>

      <GameTabs games={games} currentGameId={id} setCurrentGameId={() => {}} showNavigation />
      <div className="game-banner-2col">
        <div className="game-left">
          <img src={game.image} alt={game.name} className="game-img-lg" />
          <div>
            <h2>{game.name}</h2>
            <p className="paragraph">{game.description}</p>
          </div>
        </div>
        <div className="game-right">
          <FilterBar filters={filters} setFilters={setFilters} />
          <Leaderboard leaderboard={filteredLeaderboard} />
        </div>
      </div>     
      <LeaderboardChart leaderboard={game.leaderboard} />
    </div>
  );
}
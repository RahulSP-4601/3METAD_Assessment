import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../css/GameCard.css';
import UserProfileModal from "./UserProfileModal";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const [sort, setSort] = useState({ column: null, direction: "asc" });
  const [viewUser, setViewUser] = useState(null);

  let sortedLeaderboard = [...game.leaderboard];
  if (sort.column) {
    sortedLeaderboard.sort((a, b) => {
      if (sort.column === "wallet") {
        return sort.direction === "asc"
          ? a.wallet.localeCompare(b.wallet)
          : b.wallet.localeCompare(a.wallet);
      } else if (sort.column === "score") {
        return sort.direction === "asc" ? a.score - b.score : b.score - a.score;
      }
      return 0;
    });
  }

  const preview = sortedLeaderboard.slice(0, 5);

  const SortButton = ({ column }) => (
    <span style={{ marginLeft: 4, cursor: "pointer", fontSize: "0.85em" }}>
      <span
        onClick={e => {
          e.stopPropagation();
          setSort({
            column,
            direction: sort.column === column && sort.direction === "asc" ? "desc" : "asc"
          });
        }}
        style={{
          color: sort.column === column ? "#1de781" : "#888",
          userSelect: "none"
        }}
        title={`Sort by ${column.charAt(0).toUpperCase() + column.slice(1)}`}
      >
        {sort.column === column && sort.direction === "desc" ? "▼" : "▲"}
      </span>
    </span>
  );

  return (
    <div className="game-card">
      <img src={game.image} alt={game.name} className="game-img" />
      <div className="Name"><h2>{game.name}</h2></div>
      <div className="Description"><p>{game.description}</p></div>
      <table className="leaderboard-preview">
        <thead>
          <tr>
            <th>Rank</th>
            <th>
              Wallet
              <SortButton column="wallet" />
            </th>
            <th>
            Score
              <SortButton column="score" />
            </th>
            <th>Tier</th>
            <th>Badge</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {preview.map((p) => (
            <tr key={p.rank}>
              <td>{p.rank}</td>
              <td>{p.wallet}</td>
              <td>{p.score}</td>
              <td>{p.tier}</td>
              <td>{p.badge}</td>
              <td>
                <button className="view-btn1" onClick={() => setViewUser(p)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="view-btn" onClick={() => navigate(`/game/${game.id}`)}>
        View Full Leaderboard
      </button>
      <UserProfileModal user={viewUser} open={!!viewUser} onClose={() => setViewUser(null)} />
    </div>
  );
}

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import './../css/LeaderboardChart.css';
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function LeaderboardChart({ leaderboard }) {
  const topPlayers = leaderboard.slice(0, 5);

  const data = {
    labels: topPlayers.map(p => p.wallet),
    datasets: [
      {
        label: "Score",
        data: topPlayers.map(p => p.score),
        backgroundColor: [
          "#1de781",
          "#a36bff",
          "#22e7f0",
          "#ffae42",
          "#e255e6"
        ],
        borderRadius: 10
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#232634" }
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#fff" },
        grid: { color: "#232634" }
      }
    }
  };

  return (
    <div style={{ background: "#232634", borderRadius: "1.2rem", padding: "1.5rem", margin: "2rem 0" }}>
      <h3 style={{ color: "#1de781", textAlign: "center", fontSize: "2rem", marginTop: "-20px"}}>Top 5 Player Scores</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

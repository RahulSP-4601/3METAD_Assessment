import React from "react";
import "./../css/UserProfileModal.css";
import avatar1 from './../assets/boy.png';
import avatar2 from '../assets/girl.png';
import avatar3 from '../assets/man.png';
import avatar4 from '../assets/profile.png';
import avatar5 from '../assets/woman.png';
const randomAvatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5
];

export default function UserProfileModal({ user, open, onClose }) {
  if (!open || !user) return null;

  const avatar = randomAvatars[user.rank % randomAvatars.length];

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={avatar} alt="User avatar" className="profile-avatar" />
        <h2>User Profile</h2>
        <div className="profile-details">
          <div><strong>Rank:</strong> {user.rank}</div>
          <div><strong>Wallet:</strong> {user.wallet}</div>
          <div><strong>Score:</strong> {user.score}</div>
          <div><strong>Tier:</strong> {user.tier}</div>
          <div><strong>Badge:</strong> {user.badge || "-"}</div>
        </div>
      </div>
    </div>
  );
}

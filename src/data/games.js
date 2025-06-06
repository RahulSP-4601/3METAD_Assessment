import OCR from './../assets/OCR.png'
import RC from './../assets/RC.png'
import Digital from './../assets/Digital.png'
import MetaVerse from './../assets/MetaVerse.png'
import Monster from './../assets/Monster.png'
import Stellar from './../assets/Stellar.png'

export const games = [
    {
      id: "orc-nation",
      name: "Orc Nation",
      image: OCR,
      description: "Orc Nation is an immersive RPG where you step into the boots of a mighty orc, rising through the ranks to unite clans and defend your realm.",
      leaderboard: [
        { rank: 1, wallet: "0xORC115", score: 1450, tier: "Paid", badge: "Champion" },
        { rank: 2, wallet: "0xORC224", score: 1400, tier: "Free", badge: "Legend" },
        { rank: 3, wallet: "0xORC333", score: 1320, tier: "Paid", badge: "MVP" },
        { rank: 4, wallet: "0xORC442", score: 1250, tier: "Paid", badge: "Elite" },
        { rank: 5, wallet: "0xORC551", score: 1205, tier: "Free", badge: "Titan" },
      ],
    },
    {
      id: "rc-duels",
      name: "RC Duels",
      image: RC,
      description: "High-octane remote control car battles. Out-race and outsmart your opponents!",
      leaderboard: [
        { rank: 1, wallet: "0xDUEL105", score: 990, tier: "Paid", badge: "Champion" },
        { rank: 2, wallet: "0xDUEL104", score: 940, tier: "Free", badge: "Legend" },
        { rank: 3, wallet: "0xDUEL103", score: 920, tier: "Paid", badge: "MVP" },
        { rank: 4, wallet: "0xDUEL102", score: 900, tier: "Paid", badge: "Elite" },
        { rank: 5, wallet: "0xDUEL101", score: 880, tier: "Free", badge: "Titan" },
      ],
    },
    {
      id: "metaverse-partnership",
      name: "Metaverse Partnership",
      image: MetaVerse,
      description: "Form alliances and strategize in this cross-world metaverse collab adventure.",
      leaderboard: [
        { rank: 1, wallet: "0xMETA205", score: 1220, tier: "Paid", badge: "Champion" },
        { rank: 2, wallet: "0xMETA204", score: 1200, tier: "Paid", badge: "Legend" },
        { rank: 3, wallet: "0xMETA203", score: 1150, tier: "Free", badge: "MVP" },
        { rank: 4, wallet: "0xMETA202", score: 1100, tier: "Free", badge: "Elite" },
        { rank: 5, wallet: "0xMETA201", score: 1090, tier: "Paid", badge: "Titan" },
      ],
    },
    {
      id: "digital-defender",
      name: "Digital Defender",
      image: Digital,
      description: "Defend the digital frontier from waves of cyber threats and unlock new defenses.",
      leaderboard: [
        { rank: 1, wallet: "0xDEF305", score: 1300, tier: "Free", badge: "Champion" },
        { rank: 2, wallet: "0xDEF304", score: 1280, tier: "Paid", badge: "Legend" },
        { rank: 3, wallet: "0xDEF303", score: 1250, tier: "Free", badge: "MVP" },
        { rank: 4, wallet: "0xDEF301", score: 1210, tier: "Paid", badge: "Elite" },
        { rank: 5, wallet: "0xDEF301", score: 1190, tier: "Free", badge: "Titan" },
      ],
    },
    {
      id: "stellar-paddle-rebirth",
      name: "Stellar Paddle Rebirth",
      image: Stellar,
      description: "Paddle your way through cosmic obstacles and become a legend among the stars.",
      leaderboard: [
        { rank: 1, wallet: "0xPAD405", score: 990, tier: "Paid", badge: "Champion" },
        { rank: 2, wallet: "0xPAD404", score: 950, tier: "Free", badge: "Legend" },
        { rank: 3, wallet: "0xPAD403", score: 945, tier: "Paid", badge: "MVP" },
        { rank: 4, wallet: "0xPAD402", score: 910, tier: "Free", badge: "Elite" },
        { rank: 5, wallet: "0xPAD401", score: 900, tier: "Paid", badge: "Titan" },
      ],
    },
    {
      id: "monsters-and-villains",
      name: "Monsters and Villains",
      image: Monster,
      description: "Face terrifying monsters and cunning villains in this action-packed challenge.",
      leaderboard: [
        { rank: 1, wallet: "0xMON505", score: 1400, tier: "Free", badge: "Champion" },
        { rank: 2, wallet: "0xMON504", score: 1350, tier: "Paid", badge: "Legend" },
        { rank: 3, wallet: "0xMON503", score: 1330, tier: "Free", badge: "MVP" },
        { rank: 4, wallet: "0xMON502", score: 1300, tier: "Paid", badge: "Elite" },
        { rank: 5, wallet: "0xMON501", score: 1250, tier: "Free", badge: "Titan" },
      ],
    },
  ];
  
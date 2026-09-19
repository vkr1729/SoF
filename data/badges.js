// Minecraft Gamification, Mascot Companions & Trophy Badges
// Formatted for SOF Olympiad Class 2 Web Platform

window.MINECRAFT_MASCOTS = [
  {
    id: "steve",
    name: "Steve the Miner",
    icon: "⛏️",
    avatarImg: "assets/minecraft/steve.jpg",
    avatarSvg: `<svg viewBox="0 0 40 40" width="40" height="40">
      <rect x="8" y="4" width="24" height="24" fill="#d79b76" rx="2"/>
      <rect x="8" y="4" width="24" height="8" fill="#4d3324"/>
      <rect x="12" y="14" width="4" height="4" fill="#ffffff"/>
      <rect x="14" y="14" width="2" height="4" fill="#3a5a8f"/>
      <rect x="24" y="14" width="4" height="4" fill="#ffffff"/>
      <rect x="24" y="14" width="2" height="4" fill="#3a5a8f"/>
      <rect x="16" y="20" width="8" height="2" fill="#8c5844"/>
      <rect x="14" y="22" width="12" height="2" fill="#543729"/>
      <rect x="10" y="28" width="20" height="12" fill="#008080"/>
    </svg>`,
    tagline: "Let's craft knowledge!",
    cheerQuote: "Diamond level thinking! That was brilliant!"
  },
  {
    id: "alex",
    name: "Alex the Explorer",
    icon: "🏹",
    avatarImg: "assets/minecraft/alex.jpg",
    avatarSvg: `<svg viewBox="0 0 40 40" width="40" height="40">
      <rect x="8" y="4" width="24" height="24" fill="#e8b090" rx="2"/>
      <rect x="8" y="4" width="24" height="9" fill="#c46428"/>
      <rect x="6" y="12" width="4" height="14" fill="#c46428"/>
      <rect x="12" y="14" width="4" height="4" fill="#ffffff"/>
      <rect x="14" y="14" width="2" height="4" fill="#2d7c58"/>
      <rect x="24" y="14" width="4" height="4" fill="#ffffff"/>
      <rect x="24" y="14" width="2" height="4" fill="#2d7c58"/>
      <rect x="16" y="21" width="8" height="2" fill="#b06450"/>
      <rect x="10" y="28" width="20" height="12" fill="#588145"/>
    </svg>`,
    tagline: "Ready for every quest!",
    cheerQuote: "Bullseye! You solved that quest with ease!"
  },
  {
    id: "creeper",
    name: "Creeper Sparky",
    icon: "💚",
    avatarImg: "assets/minecraft/creeper.jpg",
    avatarSvg: `<svg viewBox="0 0 40 40" width="40" height="40">
      <rect x="8" y="4" width="24" height="24" fill="#4caf50" rx="2"/>
      <rect x="12" y="10" width="4" height="4" fill="#1b5e20"/>
      <rect x="24" y="10" width="4" height="4" fill="#1b5e20"/>
      <rect x="18" y="14" width="4" height="8" fill="#1b5e20"/>
      <rect x="14" y="18" width="12" height="4" fill="#1b5e20"/>
      <rect x="14" y="22" width="4" height="6" fill="#1b5e20"/>
      <rect x="22" y="22" width="4" height="6" fill="#1b5e20"/>
      <rect x="10" y="28" width="20" height="12" fill="#388e3c"/>
    </svg>`,
    tagline: "Explosive brain power!",
    cheerQuote: "BOOM! That answer was wildly awesome!"
  },
  {
    id: "axolotl",
    name: "Bubbles the Axolotl",
    icon: "🌸",
    avatarImg: "assets/minecraft/axolotl.jpg",
    avatarSvg: `<svg viewBox="0 0 40 40" width="40" height="40">
      <rect x="8" y="8" width="24" height="20" fill="#f8bbd0" rx="3"/>
      <rect x="4" y="10" width="4" height="12" fill="#ec407a"/>
      <rect x="32" y="10" width="4" height="12" fill="#ec407a"/>
      <rect x="12" y="14" width="4" height="4" fill="#212121"/>
      <rect x="24" y="14" width="4" height="4" fill="#212121"/>
      <rect x="18" y="20" width="4" height="2" fill="#c2185b"/>
      <rect x="10" y="28" width="20" height="10" fill="#f48fb1"/>
    </svg>`,
    tagline: "Always curious and calm!",
    cheerQuote: "Splash-tastic! You got the right answer!"
  },
  {
    id: "wolf",
    name: "Shadow the Loyal Wolf",
    icon: "🐺",
    avatarImg: "assets/minecraft/wolf.jpg",
    avatarSvg: `<svg viewBox="0 0 40 40" width="40" height="40">
      <rect x="10" y="8" width="20" height="20" fill="#bdbdbd" rx="2"/>
      <polygon points="10,8 14,2 16,8" fill="#757575"/>
      <polygon points="30,8 26,2 24,8" fill="#757575"/>
      <rect x="13" y="14" width="3" height="3" fill="#212121"/>
      <rect x="24" y="14" width="3" height="3" fill="#212121"/>
      <rect x="18" y="18" width="4" height="3" fill="#424242"/>
      <rect x="12" y="26" width="16" height="3" fill="#d32f2f"/>
      <rect x="10" y="28" width="20" height="10" fill="#9e9e9e"/>
    </svg>`,
    tagline: "Loyal study companion!",
    cheerQuote: "Woof! Super smart move, friend!"
  }
];

window.MINECRAFT_BADGES = [
  {
    id: "badge-math-miner",
    title: "Math Miner",
    icon: "⛏️",
    desc: "Solved 30 IMO Math questions correctly",
    rarity: "Iron",
    target: 30,
    category: "IMO"
  },
  {
    id: "badge-nature-expert",
    title: "Science Biome Master",
    icon: "🌿",
    desc: "Completed 3 full NSO Science sets",
    rarity: "Emerald",
    target: 3,
    category: "NSO"
  },
  {
    id: "badge-world-scholar",
    title: "Overworld Explorer",
    icon: "🗺️",
    desc: "Scored 100% on India & The World in IGKO",
    rarity: "Gold",
    target: 1,
    category: "IGKO"
  },
  {
    id: "badge-mistake-master",
    title: "Diamond Fixer",
    icon: "💎",
    desc: "Mastered 5 wrong questions from Mistake Bank",
    rarity: "Diamond",
    target: 5,
    category: "MISTAKES"
  },
  {
    id: "badge-streak-fire",
    title: "Nether Flame Streak",
    icon: "🔥",
    desc: "Practiced 3 consecutive days without missing",
    rarity: "Netherite",
    target: 3,
    category: "STREAK"
  },
  {
    id: "badge-exam-hero",
    title: "Olympiad Champion",
    icon: "🏆",
    desc: "Finished an official SOF Exam Simulation",
    rarity: "Gold",
    target: 1,
    category: "EXAM"
  }
];

window.MINECRAFT_ENCOURAGEMENTS = {
  correct: [
    "Achievement Unlocked: Super Brain! 💎",
    "Boom! That was pure diamond logic!",
    "Emeralds earned! You nailed it!",
    "Steve is cheering for you! Awesome work!",
    "Level Up! Your skills are growing faster than bamboo!"
  ],
  incorrect: [
    "Mistakes help our brain grow! Let's check why and conquer it!",
    "No worries! Even the best miners hit bedrock before striking gold!",
    "Saved to your Mistake Bank! We'll practice it and master it together!",
    "Good try! Read the friendly tip below and try the next one!"
  ]
};

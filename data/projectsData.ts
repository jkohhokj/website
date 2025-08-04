interface Project {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}

interface Topic {
  title: string;
  description: string;
  href: string;
}

export const interestsData: Topic[] = [
  {
    title: "Blockchain Security",
    description:
      "Solving CTE challenges from Ethernaut, Damn Vulnerable DeFi, and MrStealYoCrypto covering dozens of Solidity and EVM vulnerabilities.",
    href: "https://blog.jkoh.dev/tags",
  },
  {
    title: "LangGuessr!",
    description:
      "I created a language guessing game inspired by GeoGuessr! that pulls Wikipedia articles in 100+ random languages.",
    href: "https://lang-guessr.vercel.app/",
  },
  {
    title: "Hardware Security",
    description:
      "Post-Quantum Cryptography implementation with CRYSTALS-Dilithium and CRYTALS-Kyber on FPGAs with hardware acceleration.",
    href: "https://tamucs-my.sharepoint.com/:p:/g/personal/jkohhokj_tamu_edu/EYaYlG9qboJOkyQ1GxYZzLUBEahda5bswQo6SjBcmDp2ZA",
  },
  {
    title: "Computer Architecture & Design",
    description:
      "Exploring RTL in Verilog and ARM Assembly to optimize performance, power, and price.",
    href: "https://engineering.tamu.edu/electrical/academics/degrees/graduate/phd-qualifying-exams/ecen350.html",
  },
  {
    title: "Powerlifting",
    description: `
Lift PRs (lbs):
Deadlift: 395
Squat: 355
Bench: 255
`,
    href: "https://www.instagram.com/jkoh.jimbro",
  },
  {
    title: "Weightlifting",
    description: `Lift PRs (kgs):
Front Squat: 140 
Clean: 110
C&J: 100
Snatch: 80`,
    href: "https://www.instagram.com/jkoh.jimbro",
  },
];

export const projectsData: Project[] = [
  {
    title: "Hardware Security Fuzzing Research ⚙️",
    description: `Hardware vulnerabilities in processors are emerging at an alarming rate while current security measures struggle to keep up.
    Over my summer internship with SETH Lab, I discover 6 zero-day hardware vulnerabilities in open-source processors.`,
    imgSrc: "/images/hardware_fuzzing_cover.png",
    href: "https://blog.jkoh.dev/blog/hardware-fuzzing",
  },
  {
    title: "Post-Quantum Cryptography Research 🔒",
    description: `As quantum computers become stronger, our current cryptographic infrastructure weakens.
    Under Prof. JV I research the emerging technology of PQC and its implementation across various hardware applications.`,
    imgSrc: "/images/pqc_cover.png",
    href: "https://blog.jkoh.dev/blog/pqc",
  },
  {
    title: "Computer Security Rankings Project 🥇",
    description: `Dissatisifed with the rankings on CSrankings.org for Computer Security, I set out to create the most comprehensive computer security rankings list from the top three conferences: USENIX, S&P, and CCS.`,
    imgSrc: "/images/security_ranking_cover.png",
    href: "https://comsec-rankings.jkoh.dev/",
  },
  {
    title: "LangGuessr! Game 💬",
    description: `Ever played GeoGuessr but for languages? Behold LangGuessr, the realistic language guessing game.
    Here I describe the methodology used to create a game that gathers representative, human-written text across 300 languages.`,
    imgSrc: "/images/langguessr_cover.png",
    href: "https://lang-guessr.vercel.app/",
  },
  {
    title: "Ethernaut Solidity CTF Challenge Writeups 🚩",
    description: `Ethernaut is a training ground for practicing Solidity security skills. Here are my writeups for each challenge with Remix and how I reached the top 2% of accounts.`,
    imgSrc: "/images/ethernaut_cover.png",
    href: "https://blog.jkoh.dev/blog/ethernaut",
  },
  {
    title: "Midnight Blockchain Hackathon Winner 🕛",
    description: `Midnight is a blockchain technology that leverages the privacy of blockchains with the transparency of open-source. 
    Here's how my team won the "Best Use of Midnight" during our hackathon season with our decentralized voting platform.`,
    imgSrc: "/images/midnight_cover.png",
    href: "https://devpost.com/software/silent-vote",
  },
  {
    title: "Pwnagotchi WiFi Hacking on Raspberry Pi Project 🛜",
    description: `Pwnagotchi is an A2C-based network-pwning "AI" discrete enough to run on a Raspberry Pi.
    Here I set up my very own WiFi handshaker pet and record my struggles and successes.`,
    imgSrc: "/images/pwnagotchi_cover.jpg",
    href: "https://blog.jkoh.dev/blog/pwnagotchi-beginning",
  },
  {
    title: "Learning Zig Project 🦎",
    description: `With Rust and Zig competing to replace C in critical software, I'm joining the hype train on learning new programming languages.
    This is my progress of learning and developing with Zig for almost a year.`,
    imgSrc: "/images/zig_logo.png",
    href: "https://blog.jkoh.dev/blog/zig-beginning",
  },
  {
    title: "Practical Network Penetration Tester (PNPT) 🌐",
    description: `The Practical Network Penetration Tester™ (PNPT) certification is an intermediate-level penetration testing exam offered by TCM Security.
    This is my journey preparing for the exam and what I've learned along the way.`,
    imgSrc: "/images/tcmsecurity_logo.png",
    href: "https://blog.jkoh.dev/blog/pnpt/pnpt-progression",
  },
];

export default projectsData;

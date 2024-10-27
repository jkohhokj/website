interface Project {
  title: string,
  description: string,
  href: string,
  imgSrc: string,
}

interface Topic{
    title: string,
    description: string
}

export const interestsData: Topic[] = [
    {
        title: 'Software Security',
        description: 'CTFs',
    },
    {
        title: 'Hardware Security',
        description: 'Hard',
    },
    {
        title: 'Cryptography',
        description: 'PQC', 
    },
    {
        title: 'Weightlifting',
        description: 'heavy shit',
    }

]

export const projectsData: Project[] = [
  {
    title: 'Pwnagotchi WiFi Hacking on Raspberry Pi 🛜',
    description: `Pwnagotchi is an A2C-based “AI” powered by bettercap and running on a Raspberry Pi Zero W that learns from its surrounding WiFi environment in order to maximize the crackable WPA key material it captures.
    I hope that by implementing my own Pwnagotchi that I will learn more about WiFi network security from a red teaming perspective.`,
    imgSrc: '/images/pwnagotchi_cover.jpg',
    href: 'https://blog.jkoh.dev/blog/pwnagotchi-beginning',
  },
  {
    title: 'Using the Zig Programming Language 🦎',
    description: `Zig is a general-purpose programming language and toolchain for maintaining **robust**, **optimal** and **reusable** software that has no hidden control flow, no hidden memory allocations, and no preprocessor.
    Like C, Zig does not handle garbage collection and instead uses allocators to manage memory. Additionally, Zig is backwards compatible with C and people have been speculating that it will replace Zig on embedded systems.
    I hope that by learn Zig I'll be able to learn low-level computer systems without worrying about unnecessarily fickle memory mistakes.`,
    imgSrc: '/images/zig_logo.png',
    href: 'https://blog.jkoh.dev/blog/zig-beginning',
  },
  {
    title: 'Practical Network Penetration Tester (PNPT) 🌐',
    description: `The Practical Network Penetration Tester™ (PNPT) certification is an intermediate-level penetration testing exam experience.
    This exam will assess a student’s ability to perform a network penetration test at an professional level.
    Students will have five (5) full days to complete the assessment and an additional two (2) days to write a professional report utiziling 
    industry standard tactics, techniques, and procedures with Open-Source Intelligence (OSINT), Active Directory exploitation, and internal network enumeration.`,
    imgSrc: '/images/tcmsecurity_logo.png',
    href: 'https://blog.jkoh.dev/blog/pnpt/pnpt-progression',
  },
  {
    title: 'Flipper Zero 🐬',
    description: `The Flipper Zero is a multiltool for pentesting over radio protocols, access control systems, hardware, and more.
    Through this device I hope to learn a lot about external network pentesting and gaining access for redteaming.`,
    imgSrc: '/images/flipper.jpg',
    href: 'https://blog.jkoh.dev/blog/flipper-zero-beginning',
  },
  {
    title: 'Maps of Meaning & Personality 🗺️',
    description: `The lecture series "2017 Maps of Meaning" is a 4th year, 12-video lecture series for psychology students from the University of Toronto by Jordan Peterson based on his book titled "Maps of Meaning: The Architecture of Belief."
    In accordance with finishing the entire course over the summer of 2021 when I literally had nothing better to do, I had compiled about 50 full pages (25,170 words) worth of notes and introspection.`,
    imgSrc: '/images/maps_of_meaning.jpg',
    href: 'https://blog.jkoh.dev/blog/psychoanalysis-courses',
  },
]

export default projectsData;
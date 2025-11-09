export interface TeamMember {
  key: string; // Translation key for this team member
  name: string;
  punchline: string;
  bio: string;
  image?: string; // Path to team member photo
  imagePlaceholder: string; // Fallback initials
}

export const teamMembers: TeamMember[] = [
  // Row 1
  {
    key: "nastja",
    name: "Nastja",
    punchline: "I hit my target in sports & marketing",
    bio: "Marketing specialist with a Bachelor's degree, 9k social followers, and Finnish sports shooting champion. Skilled in sales, design, and content creation.",
    image: "/team/nastja.png",
    imagePlaceholder: "N",
  },
  {
    key: "mirjam",
    name: "Mirjam",
    punchline: "The 'Social Junkie' from Sweden",
    bio: "Swedish strategist who grew WaterAid's social media by 300%. Expert in advertising optimization, passionate about running, Fika, and networking.",
    image: "/team/mirjam.png",
    imagePlaceholder: "M",
  },
  {
    key: "ahsan",
    name: "Ahsan",
    punchline: "Learning the hard things is what sets you apart",
    bio: "Digital marketer with 5+ years' experience. Master's in Sustainability. Led UAE campaign with 1200% ROAS. Loves fitness, cars, and swimming.",
    image: "/team/ahsan.png",
    imagePlaceholder: "A",
  },
  {
    key: "mariia",
    name: "Mariia",
    punchline: "From scratch to success",
    bio: "UI/UX designer and ex-IT project manager. Built 30+ websites. Ballet dancer for 20+ years, now teaching kids to dance and dream big.",
    image: "/team/mariia.png",
    imagePlaceholder: "M",
  },
  {
    key: "kaled",
    name: "Kaled",
    punchline: "Life is a canvas",
    bio: "Founder & COO. Italian in Finland. Expert in Sales, Ops, and Tech. Speaks six languages, sings in choir, practices martial arts.",
    image: "/team/kaled.png",
    imagePlaceholder: "K",
  },
  // Row 2
  {
    key: "aaron",
    name: "Aaron",
    punchline: "My favorite word is ROI",
    bio: "Founder & CEO. Englishman from Sipoo. Expert in Sales, Strategy, and Management. Enjoys boxing, reading, music, and guitar.",
    image: "/team/aaron.png",
    imagePlaceholder: "A",
  },
  {
    key: "thomas",
    name: "Thomas",
    punchline: "I capture stories with my lens",
    bio: "Professional videographer and photographer with media education. Englishman from Sipoo capturing compelling visual stories. Loves nature, football, and fishing.",
    image: "/team/thomas.png",
    imagePlaceholder: "T",
  },
  {
    key: "mattias",
    name: "Mattias",
    punchline: "Always chasing progress",
    bio: "Multimedia content specialist with 3+ years in post-production and editing. Creates compelling content with passion and precision. Loves gym training and Ostrobothnia forest walks.",
    image: "/team/mattias.png",
    imagePlaceholder: "M",
  },
  {
    key: "tristan",
    name: "Tristan",
    punchline: "Numbers tell the story",
    bio: "Hanken student in Administration & Finance Strategy. Analytical mind focused on financial strategy and operations. Passionate about data-driven decisions.",
    image: "/team/tristan.png",
    imagePlaceholder: "T",
  },
  {
    key: "sami",
    name: "Sami",
    punchline: "if you never ask the question the answer is always no",
    bio: "Marketing specialist in business and sports sectors. Outgoing connector building relationships and helping ideas soar.\n\nPassionate about Lapland's magic and international growth.\n\nWorld traveler collecting stories and connections.",
    image: "/team/sami.png",
    imagePlaceholder: "S",
  },
];

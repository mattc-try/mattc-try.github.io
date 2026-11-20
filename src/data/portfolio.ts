// ============================================================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// ============================================================================

// Personal Information
export const profile = {
  name: "Matteo Steinbach",
  title: "PhD candidate in Mathematics and Computing · Cryptography researcher · R&D engineer",
  tagline: "Post-quantum cryptography, machine-checked security proofs, and secure cryptographic engineering.",
  location: "Luxembourg / Canberra",
  email: "matteo.steinbach.pro@gmail.com",
  github: "https://github.com/mattc-try",
  linkedin: "https://linkedin.com/in/matteo-steinbach",
  orcid: "https://orcid.org/0009-0003-5363-1308",
  twitter: "",
  signal: "tomato.74",
  resumeUrl: "/cv/matteo-steinbach-cv.pdf",
};

// Bio/About Section
export const about = {
  summary: `I am a PhD candidate in Mathematics and Computing at the Australian National University, researching machine-checked security proofs for post-quantum zero-knowledge proofs in EasyCrypt. I also work as an R&D Cryptography Engineer at Integrasys, contributing to European-funded quantum-safe communication and embedded cryptography projects.`,
  highlights: [
    "Cryptography R&D Engineer at Integrasys SA",
    "BSc Computer Science, University of Luxembourg (Very Good)",
    "Post-Quantum Cryptography (Hash-based, Lattice-based, Code-based)",
    "Constrained device optimization",
  ],
  researchInsight: `My work combines formal verification, cryptographic implementation, and practical security analysis. I am broadly interested in building cryptographic systems that are both theoretically sound and reliable in real software and hardware.`,
};

// Publications - Peer-reviewed papers
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  context?: string;
  abstract: string;
  contributions: string[];
  artifacts: { name: string; url: string; description: string }[];
  pdfUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: "pqc-hfb",
    title: "Hard-to-Find Bugs in a Post-Quantum Age",
    authors: ["Matteo Steinbach", "Peter B. Rønne", "Johann Großschädl"],
    venue: "DCS and SnT, University of Luxembourg",
    year: 2025,
    context: "Research conducted at DCS and SnT, University of Luxembourg",
    abstract: "The transition to Post-Quantum Cryptography (PQC) introduces a new class of 'Hard-to-Find Bugs' (HFBs) that differ fundamentally from classical cryptography. While classical bugs often involve carry propagation, PQC bugs are dominated by timing side-channels in polynomial arithmetic (e.g., NTT reductions in Kyber) and floating-point precision divergences (e.g., in Falcon signatures).",
    contributions: [
      "Created a systematic taxonomy of PQC-specific vulnerabilities, analyzing Lattice-based (Kyber, Dilithium), Code-based (HQC), and Hash-based schemes",
      "Documented 15+ vulnerabilities in major open-source PQC implementations, including floating-point inconsistencies in Falcon that allow signature mutation",
      "Developed wycheproof-pqc, an extension of Google's Wycheproof framework that uses targeted Known Answer Tests (KATs) to detect these elusive bugs",
    ],
    artifacts: [
      {
        name: "wycheproof-pqc",
        url: "https://github.com/mattc-try/wycheproof-pqc",
        description: "PQC extension of Google's Wycheproof framework",
      },
    ],
    pdfUrl: "/papers/pqc-hard-to-find-bugs.pdf", // Add your PDF to public/papers/
    codeUrl: "https://github.com/mattc-try/wycheproof-pqc",
    tags: ["Post-Quantum Cryptography", "Vulnerability Research", "Kyber", "Dilithium", "Falcon"],
  },
  {
    id: "classical-hfb",
    title: "Hard-to-Find Bugs in Public-Key Cryptographic Software: Classification and Test Methodologies",
    authors: ["Matteo Steinbach", "Johann Großschädl", "Peter B. Rønne"],
    venue: "University of Luxembourg",
    year: 2025,
    abstract: "A comprehensive study of implementation flaws in public-key cryptosystems (RSA, ECC) that manifest only under extremely rare input conditions. The paper defines 'Hard-to-Find Bugs' (HFBs) and analyzes why conventional testing fails to detect them, citing historical examples like the Sony PS3 ECDSA hack.",
    contributions: [
      "Compiled a dataset of 53+ real-world HFBs from libraries like OpenSSL, categorized into Carry Propagation, State Mismanagement, and Timing Attacks",
      "Evaluated Differential Testing, Static Analysis, and Fuzzing, proposing a 3-layered testing framework",
      "Developed wycheproof-c, a C-port of the Wycheproof test suite to facilitate testing of C-based cryptographic libraries on embedded devices",
    ],
    artifacts: [
      {
        name: "wycheproof-c",
        url: "https://github.com/mattc-try/wycheproof-c",
        description: "C-port of Google's Wycheproof test suite",
      },
    ],
    pdfUrl: "/papers/classical-hard-to-find-bugs.pdf", // Add your PDF to public/papers/
    codeUrl: "https://github.com/mattc-try/wycheproof-c",
    tags: ["RSA", "ECC", "OpenSSL", "Vulnerability Research", "Testing Methodology"],
  },
  {
    id: "pqqs-hybrid-key-exchange",
    title: "Enclave-Anchored Hybrid Quantum-Safe Key Exchange",
    authors: ["Matteo Steinbach"],
    venue: "ACM Conference on Post-Quantum and Quantum-based Security (PQQS)",
    year: 2026,
    abstract: "An enclave-anchored hybrid quantum-safe key exchange combining classical and post-quantum cryptography with quantum cryptographic mechanisms.",
    contributions: [
      "Combines classical and post-quantum key exchange mechanisms with enclave-assisted trust anchors",
      "Targets practical quantum-safe security for deployed cryptographic systems",
    ],
    artifacts: [],
    tags: ["Quantum-Safe Cryptography", "Hybrid Key Exchange", "Enclaves", "PQQS"],
  },
];

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "cryptography" | "security" | "mobile" | "systems" | "other";
}

export const projects: Project[] = [
  {
    id: "wycheproof-pqc",
    title: "Wycheproof-PQC",
    description: "Some PQC tests wycheproof like for post quantum crypto for now focussing on lattice based, vectors in JSON available.",
    techStack: ["C", "Python", "Kyber", "Dilithium", "Falcon", "Testing"],
    githubUrl: "https://github.com/mattc-try/wycheproof-pqc",
    featured: false,
    category: "cryptography",
  },
  {
    id: "wycheproof-c",
    title: "Wycheproof-C",
    description: "A C implementation of the wycheproof testing library from Google, and a detailed collection of hard to find bugs and vulnerabilities including paper.",
    techStack: ["C", "Assembly", "OpenSSL", "Testing", "Embedded"],
    githubUrl: "https://github.com/mattc-try/wycheproof-c",
    featured: false,
    category: "cryptography",
  },
 
  {
    id: "rust-google-oauth2",
    title: "Rust Google OAuth2",
    description: "Secure-ish Google OAuth 2.0 implementation in Rust using Warp, PKCE, JWT validation, and Askama templating. Built by a mid-level Rustacean for fun (and learning).",
    techStack: ["Rust", "OAuth2", "PKCE", "JWT", "Warp", "Askama"],
    githubUrl: "https://github.com/mattc-try/rust-google-oauth2",
    featured: true,
    category: "systems",
  },
  {
    id: "security-bruteforce-rainbow",
    title: "Security Bruteforce Rainbow",
    description: "A Python project exploring password cracking through bruteforce and rainbow tables, including password generation and probability analysis.",
    techStack: ["Python", "Cryptography", "Hash Analysis", "Security"],
    githubUrl: "https://github.com/mattc-try/Security-bruteforce-rainbow",
    featured: false,
    category: "security",
  },
  {
    id: "letter-resume-assistant",
    title: "Multi-Agent Resume Assistant",
    description: "AI tool designed to help users create tailored resumes and cover letters based on job descriptions and personal skills using multi-agent generative approach.",
    techStack: ["Python", "AI", "Multi-Agent", "NLP"],
    githubUrl: "https://github.com/mattc-try/Letter-Resume_MultiagentAssistant",
    featured: true,
    category: "other",
  },
  {
    id: "progression-app",
    title: "Progression Mobile App",
    description: "A SwiftUI-based mobile application for tracking personal progression and goals.",
    techStack: ["Swift", "SwiftUI", "MVVM", "Firebase", "Combine"],
    githubUrl: "https://github.com/mattc-try/Progression",
    featured: false,
    category: "mobile",
  },
   {
    id: "rsa-personal-implementations",
    title: "RSA Personal Implementations",
    description: "Secure RSA in C using OpenSSL with SHA-256, RSA-PSS, and OAEP. Still low-level, now with way fewer regrets. 🚀🔐",
    techStack: ["C", "OpenSSL", "RSA-PSS", "RSA-OAEP", "SHA-256"],
    githubUrl: "https://github.com/mattc-try/rsa-personal-implementations",
    featured: true,
    category: "cryptography",
  },
  {
    id: "pynetpwn",
    title: "PyNetPwn",
    description: "Python-based automated network penetration testing tool featuring comprehensive scanning modules, vulnerability detection, and detailed reporting capabilities.",
    techStack: ["Python", "Scapy", "Nmap", "SQLite", "Jinja2"],
    githubUrl: "https://github.com/mattc-try/PyNetPwn",
    featured: true,
    category: "security",
  },
  
];

// Reading List - Now simplified to just a PDF link
export const readingList = {
  description: "A curated collection of cryptographic papers, specifications, and foundational texts that inform my research, you can see the papers I read and plan to read starting from November 2025, it's not meant to be perfect doesn't include everything or full up to date but it will get better with time.",
  pdfUrl: "/reading-list.pdf", // Update with your actual PDF path
  lastUpdated: "Jan, 2026",
highlights: [
    "The 'Muckle' Family: Frameworks for Quantum-Secure Hybrid Key Exchange (HAKE)",
    "CryptAttackTester (CAT): High-Assurance Quantitative Analysis of Attack Costs",
    "SoK: Computer-Aided Cryptography & Formal Verification Tools",
    "Hardware Backdoors in CRYSTALS-Kyber: Kleptography in PQC Hardware",
  ],
};

// Conference Photos / Events
export interface ConferencePhoto {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  imageUrl: string;
  description?: string;
}

export const conferencePhotos: ConferencePhoto[] = [
  {
    id: "space2025",
    title: "SPACE 2025 Presentation",
    event: "SPACE 2025",
    location: "India",
    date: "2025",
    imageUrl: "/images/conferences/space2025.jpg", // Add your actual image
    description: "Presenting research on PQC vulnerabilities",
  },
  {
    id: "secitc2025",
    title: "SECITC Conference",
    event: "SECITC 2025",
    location: "Romania",
    date: "2025",
    imageUrl: "/images/conferences/secitc2025.jpg", // Add your actual image
    description: "Discussing cryptographic testing methodologies",
  },
  // Add more conference photos here
];

// Skills / Tech Stack
export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Rust", "C/C++", "Python", "Go", "Assembly (ARM)", "Swift"],
  },
  {
    name: "Cryptography",
    icon: "key",
    skills: ["CRYSTALS-Kyber", "CRYSTALS-Dilithium", "Falcon", "AES", "ECC", "RSA", "NTT"],
  },
  {
    name: "Security Tools",
    icon: "shield",
    skills: ["Burp Suite", "Wireshark", "Ghidra", "IDA Pro", "Wycheproof", "Fuzzing"],
  },
  {
    name: "Development",
    icon: "terminal",
    skills: ["Git", "CMake", "Docker", "CI/CD", "Linux", "Embedded Systems"],
  },
];

// Navigation items
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Events", href: "#gallery" },
  { label: "Project", href: "#projects" },
  { label: "Funding", href: "#funding" },
];

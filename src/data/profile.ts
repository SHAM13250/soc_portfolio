export const profile = {
  name: "SHAM KUMAR M",
  shortName: "SHAM KUMAR",
  roleTitle: "SOC Analyst | Cybersecurity Analyst | Blue Team Specialist",
  location: "Karaikudi, Tamil Nadu, India",
  phone: "+91 6381591767",
  phoneHref: "tel:+916381591767",
  email: "shamkumar.m27@gmail.com",
  status: "Available for SOC Analyst Roles",
  typingRoles: ["SOC Analyst", "Blue Team Operator", "Security Researcher"],
  social: {
    linkedin: "https://linkedin.com/in/sham-kumar-95277a307",
    github: "https://github.com/SHAM13250",
    portfolio: "https://shamkumar-portfolio.lovable.app",
  },
  summary:
    "Dedicated Cybersecurity Analyst and Blue Team enthusiast with hands-on experience in SOC operations, incident response, network packet analysis, and web application security. Proficient in monitoring, threat detection, log analysis, and malware triage using tools like Splunk, Wireshark, and Burp Suite. Passionate about leveraging automation, machine learning models, and security frameworks like OWASP Top 10 and MITRE ATT&CK to protect enterprise infrastructures.",
  skills: [
    {
      id: "tools",
      label: "Security Tools & Platforms",
      items: [
        "Splunk (SIEM)",
        "Wireshark",
        "Burp Suite",
        "Nmap",
        "Metasploit",
        "EDR",
        "YARA",
        "SOAR",
        "Sandbox Analysis",
        "VirusTotal",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "soc",
      label: "SOC & Security Operations",
      items: [
        "Blue Team Operations",
        "Threat Intelligence",
        "Incident Response",
        "Log Analysis",
        "IDS/IPS",
        "Malware Triage",
        "Phishing Detection",
      ],
    },
    {
      id: "frameworks",
      label: "Frameworks & Methodologies",
      items: ["OWASP Top 10", "MITRE ATT&CK Framework", "Red Team Concepts"],
    },
    {
      id: "network",
      label: "Networking & OS Security",
      items: [
        "TCP/IP",
        "DNS",
        "HTTP/S",
        "Firewalls",
        "Network Scanning",
        "Packet Analysis",
        "Linux (Kali, Ubuntu)",
        "Windows",
      ],
    },
    {
      id: "programming",
      label: "Programming & Web Security",
      items: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "XSS Analysis",
        "SQL Injection",
      ],
    },
    {
      id: "labs",
      label: "Platforms & Labs",
      items: [
        "PortSwigger Web Security Academy",
        "Hack The Box (HTB)",
        "TryHackMe",
        "LetsDefend Labs",
        "CTF Challenges",
      ],
    },
  ],
  projects: [
    {
      id: "phishing",
      title: "AI-Powered Phishing Detection System",
      url: "https://github.com/Poovarasan-29/AI-Powered-Phishing-Detection",
      tags: ["Python", "Machine Learning", "Phishing", "Email Security"],
      highlights: [
        "Co-developed an ML-based detection tool targeting malicious URLs and phishing emails.",
        "Analyzed email headers, domain traits, and content patterns.",
        "Built feature extraction pipelines in Python.",
      ],
    },
    {
      id: "caesar",
      title: "Caesar Cipher Encryption & Decryption Tool",
      url: "https://github.com/SHAM13250/Encryption-and-Decryption",
      tags: ["Cryptography", "Confidentiality", "Symmetric Encryption"],
      highlights: [
        "Created a lightweight cryptographic utility executing character shifting.",
        "Demonstrated core principles of data confidentiality and symmetric encryption.",
      ],
    },
    {
      id: "password",
      title: "Password Strength Checker",
      url: "https://github.com/SHAM13250/Password-Strength-Checker/tree/main/password%20strength%20checker",
      tags: ["Credential Security", "Entropy", "Brute-Force Resistance"],
      highlights: [
        "Built an interactive tool evaluating credential entropy, complexity, and length to resist brute-force attacks.",
      ],
    },
  ],
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      url: "https://drive.google.com/file/d/1V0IjnxZIw4ZgPmvEEbsiEuwES-0WN0Sk/view?usp=sharing",
    },
    {
      title: "SOC Analyst Learning Path",
      issuer: "LetsDefend",
      url: "https://drive.google.com/file/d/1zoYKjhkbwL5UJ4PJ26mMszH91veAC0D5/view?usp=sharing",
    },
    {
      title: "Cisco SOC Operations",
      issuer: "Coursera",
      url: "https://drive.google.com/file/d/1sGncuOStuUU0uhiv8mM-0Ey8b8UbKJc3/view?usp=sharing",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata",
      url: "https://drive.google.com/file/d/1woOmL2NOXevOhSuyfLueu_jj9_tpFo35/view?usp=sharing",
    },
    {
      title: "XSS Survival Guide",
      issuer: "Udemy",
      url: "https://drive.google.com/file/d/1dR4PSBcl4xWrrto1CrHS-9AFgolZ0Cpo/view?usp=sharing",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      url: "https://drive.google.com/file/d/1PKUhPEHtUIohvYi2PQxMyBu8kjgTrWBf/view?usp=sharing",
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      url: "https://drive.google.com/file/d/1U3MQt_hF-dWeyJElozy29eKJGaL0FWH5/view?usp=sharing",
    },
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
  },
} as const;

export const navLinks = [
  { href: "#summary", label: "Summary" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
] as const;

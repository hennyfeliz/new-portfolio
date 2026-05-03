export type ProjectCategory = "react" | "java" | "react-native"

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  year: string
  description: string
  techTags: string[]
  imageUrl: string
  repoUrl?: string
  liveUrl?: string
}

export const CATEGORY_LABELS: Record<"all" | ProjectCategory, string> = {
  all: "All",
  react: "React",
  java: "Java",
  "react-native": "React Native",
}

export const CATEGORY_GRADIENT: Record<ProjectCategory, string> = {
  react:
    "linear-gradient(135deg, rgba(56,189,248,0.18) 0%, rgba(99,102,241,0.18) 50%, rgba(0,0,0,0.6) 100%)",
  java:
    "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(180,30,50,0.22) 50%, rgba(0,0,0,0.6) 100%)",
  "react-native":
    "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.18) 50%, rgba(0,0,0,0.6) 100%)",
}

export const PROJECTS: Project[] = [
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    category: "react-native",
    year: "2022",
    description:
      "Mobile app replicating core Instagram features (feed, profile, posts) built with React Native.",
    techTags: ["React Native", "JavaScript"],
    imageUrl: "/projects/instagram-clone.png",
    repoUrl: "https://github.com/hennyfeliz",
  },
  {
    id: "music-player",
    title: "Music Player",
    category: "react",
    year: "2022",
    description:
      "Lightweight web music player with playlist management and responsive UI.",
    techTags: ["ReactJS", "Tailwind CSS"],
    imageUrl: "/projects/music-player.png",
    repoUrl: "https://github.com/hennyfeliz",
  },
  {
    id: "ecommerce",
    title: "Ecommerce App",
    category: "react",
    year: "2023",
    description:
      "Basic ecommerce platform with React frontend and Spring Boot REST API backend.",
    techTags: ["ReactJS", "Spring Boot", "MySQL"],
    imageUrl: "/projects/ecommerce.png",
    repoUrl: "https://github.com/hennyfeliz",
  },
  {
    id: "rental",
    title: "Rental Platform",
    category: "java",
    year: "2022",
    description:
      "Sample app for apartment and house rentals built on Java with relational database.",
    techTags: ["Java", "Spring Boot", "MySQL"],
    imageUrl: "/projects/rental.png",
    repoUrl: "https://github.com/hennyfeliz/rental",
  },
  {
    id: "supermarket",
    title: "Supermarket Chain API",
    category: "java",
    year: "2022",
    description:
      "Small REST API for a supermarket chain with relational databases on Spring Boot.",
    techTags: ["Java", "Spring Boot", "MySQL"],
    imageUrl: "/projects/supermarket.png",
    repoUrl: "https://github.com/hennyfeliz/spring-boot-supermarket-chain-mysql-db",
  },
  {
    id: "empresa-api",
    title: "Empresa REST API",
    category: "java",
    year: "2022",
    description:
      "Sample REST API using MySQL on a Spring Boot backend modeling a company domain.",
    techTags: ["Java", "Spring Boot", "MySQL"],
    imageUrl: "/projects/empresa-api.png",
    repoUrl: "https://github.com/hennyfeliz/empresa-spring-boot-api-rest",
  },
  {
    id: "login-app",
    title: "Login App",
    category: "react",
    year: "2021",
    description:
      "Simple login page with MySQL database, built with Express and vanilla JavaScript.",
    techTags: ["JavaScript", "Express", "MySQL"],
    imageUrl: "/projects/login-app.png",
    repoUrl: "https://github.com/hennyfeliz/login-app-express-mysql",
  },
]

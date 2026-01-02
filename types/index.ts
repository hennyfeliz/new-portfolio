export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: "react" | "java" | "react-native" | "all"
  imageUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}


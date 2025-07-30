export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category:
    | "llm"
    | "computer-vision"
    | "web-dev"
    | "mobile"
    | "data-science"
    | "all";
  demoUrl?: string;
  githubUrl?: string;
  year: number;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "3",
    title: "Retail Behaviour Analysis v1",
    description:
      "Sistem analisis perilaku pelanggan dari rekaman CCTV. Menggunakan computer vision dan multimodal transformer untuk memberikan strategi bisnis.",
    image:
      "https://raw.githubusercontent.com/haipradana/pradanayahya.me/refs/heads/main/static/images/projects/datathon_2025-1/retail-behaviour-1.jpg",
    tags: ["Computer Vision", "TimeSformer", "LLM"],
    category: "computer-vision",
    demoUrl:
      "https://huggingface.co/spaces/haipradana/retail-behavior-analysis",
    githubUrl:
      "https://github.com/haipradana/DATATHON-2025-Retail-Behaviour-Analysis",
    year: 2025,
    slug: "retail-behaviour-analysis-v1",
  },
  {
    id: "2",
    title: "Mood2Movie",
    description:
      "Generate movie recommendations based on your mood. Built with semantic search, sentiment analysis, and mood-based filtering.",
    image:
      "https://raw.githubusercontent.com/haipradana/pradanayahya.me/refs/heads/main/static/images/projects/mood2movie/mood2movie.jpg",
    tags: ["Python", "LLM", "Transformers", "NLP"],
    category: "llm",
    demoUrl: "https://mood2movie.streamlit.app/",
    githubUrl: "https://github.com/haipradana/Mood2Movie",
    year: 2025,
    slug: "mood2movie",
  },
  {
    id: "1",
    title: "ChatMyDocs",
    description:
      "RAG-based assistant that uses ModernBERT for semantic retrieval. Upload your PDFs and get precise, citation-backed answers.",
    image:
      "https://raw.githubusercontent.com/haipradana/pradanayahya.me/refs/heads/main/static/images/projects/chatmydocs/modernbert.jpg",
    tags: ["RAG", "Python", "ModernBERT"],
    category: "llm",
    demoUrl: "https://github.com/haipradana/ChatMyDocs",
    githubUrl: "https://github.com/haipradana/ChatMyDocs",
    year: 2025,
    slug: "chatmydocs",
  },
];

export const categories = [
  { id: "all", label: "All Projects", count: projects.length },
  {
    id: "data-science",
    label: "Data Science",
    count: projects.filter((p) => p.category === "data-science").length,
  },
  {
    id: "llm",
    label: "LLM & AI",
    count: projects.filter((p) => p.category === "llm").length,
  },
  {
    id: "computer-vision",
    label: "Computer Vision",
    count: projects.filter((p) => p.category === "computer-vision").length,
  },
  {
    id: "web-dev",
    label: "Web Development",
    count: projects.filter((p) => p.category === "web-dev").length,
  },
  // {
  //   id: "mobile",
  //   label: "Mobile Apps",
  //   count: projects.filter((p) => p.category === "mobile").length,
  // },
];

export type Lang = "es" | "en"

export type Project = {
  id: string
  category: "academic" | "professional"
  title: { es: string; en: string }
  description: { es: string; en: string }
  tags: { es: string[]; en: string[] }
  year: string
  status?: { es: string; en: string }
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "biblioteca-saladillo",
    category: "academic",
    title: {
      es: "Biblioteca Pública Saladillo",
      en: "Saladillo Public Library",
    },
    description: {
      es: "Proyección de una Biblioteca Pública y su implantación urbana en el barrio Saladillo, Rosario. Proyecto Final de Carrera.",
      en: "Design of a Public Library and its urban integration in the Saladillo neighborhood, Rosario. Final thesis project.",
    },
    tags: {
      es: ["Proyecto urbano", "Equipamiento público", "PFC"],
      en: ["Urban design", "Public facility", "Thesis"],
    },
    year: "2026",
    status: { es: "En curso", en: "In progress" },
    featured: true,
  },
  {
    id: "proyecto-materia-unr",
    category: "academic",
    title: {
      es: "Vivienda Colectiva — UNR",
      en: "Collective Housing — UNR",
    },
    description: {
      es: "Estudio de tipologías y resolución espacial de un edificio de vivienda colectiva en el centro de Rosario.",
      en: "Study of typologies and spatial resolution of a collective housing building in central Rosario.",
    },
    tags: {
      es: ["Vivienda", "Tipologías", "Académico"],
      en: ["Housing", "Typologies", "Academic"],
    },
    year: "2024",
  },
  {
    id: "match-departamento",
    category: "professional",
    title: {
      es: "Desarrollo de Departamento",
      en: "Apartment Design",
    },
    description: {
      es: "Diseño interior y representación visual de un departamento residencial en Rosario.",
      en: "Interior design and visual representation of a residential apartment in Rosario.",
    },
    tags: { es: ["SketchUp", "Lumion", "Photoshop"], en: ["SketchUp", "Lumion", "Photoshop"] },
    year: "2026",
    featured: true,
  },
  {
    id: "match-vivienda",
    category: "professional",
    title: { es: "Vivienda Unifamiliar", en: "Single-family Home" },
    description: {
      es: "Documentación técnica y modelado 3D de vivienda unifamiliar en barrio privado.",
      en: "Technical documentation and 3D modeling of a single-family home in a gated community.",
    },
    tags: { es: ["AutoCAD", "SketchUp", "Documentación"], en: ["AutoCAD", "SketchUp", "Documentation"] },
    year: "2026",
  },
  {
    id: "match-bano",
    category: "professional",
    title: { es: "Reforma de Baño", en: "Bathroom Renovation" },
    description: {
      es: "Propuesta integral de reforma con renders foto-realistas para presentación a cliente.",
      en: "Integral renovation proposal with photo-realistic renders for client presentation.",
    },
    tags: { es: ["Lumion", "Photoshop", "Render"], en: ["Lumion", "Photoshop", "Render"] },
    year: "2025",
  },
  {
    id: "match-cocina",
    category: "professional",
    title: { es: "Diseño de Cocina", en: "Kitchen Design" },
    description: {
      es: "Diseño de equipamiento y resolución de detalles constructivos para cocina integrada.",
      en: "Equipment design and resolution of construction details for an integrated kitchen.",
    },
    tags: { es: ["SketchUp", "AutoCAD", "Detalles"], en: ["SketchUp", "AutoCAD", "Details"] },
    year: "2025",
  },
  {
    id: "match-reforma-integral",
    category: "professional",
    title: { es: "Reforma Integral", en: "Full Renovation" },
    description: {
      es: "Levantamiento, propuesta y documentación de reforma integral de vivienda existente.",
      en: "Survey, proposal and documentation of a full renovation of an existing home.",
    },
    tags: { es: ["AutoCAD", "Relevamiento", "Documentación"], en: ["AutoCAD", "Survey", "Documentation"] },
    year: "2025",
    featured: true,
  },
  {
    id: "match-representacion",
    category: "professional",
    title: { es: "Representación Visual", en: "Visual Representation" },
    description: {
      es: "Posproducción y representación visual de proyectos residenciales para presentaciones.",
      en: "Post-production and visual representation of residential projects for presentations.",
    },
    tags: { es: ["Lumion", "Photoshop", "Posproducción"], en: ["Lumion", "Photoshop", "Post-production"] },
    year: "2025",
  },
]

export const ui = {
  nav: {
    projects: { es: "Proyectos", en: "Projects" },
    skills: { es: "Habilidades", en: "Skills" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    eyebrow: { es: "Portfolio · 2026", en: "Portfolio · 2026" },
    headline: {
      es: "Arquitecta en formación. Perspectiva fresca, rigor técnico.",
      en: "Architect in training. Fresh perspective, technical precision.",
    },
    subtext: {
      es: "Estudiante avanzada de Arquitectura en la UNR · Actualmente en MATCH arqs, Rosario · Disponible para proyectos remotos y presenciales.",
      en: "Advanced Architecture student at UNR · Currently at MATCH arqs, Rosario · Open to remote and on-site opportunities.",
    },
    cta: { es: "Ver proyectos", en: "View projects" },
    location: { es: "Rosario, Argentina", en: "Rosario, Argentina" },
  },
  about: {
    label: { es: "Sobre mí", en: "About" },
    bio: {
      es: "Estoy en el tramo final de la carrera de Arquitectura en la UNR, con proyecto final de carrera en curso — la proyección de una Biblioteca Pública y su implantación en el barrio Saladillo, Rosario. Desde noviembre de 2025 trabajo en MATCH arqs, donde me especializo en representación visual, documentación técnica y posproducción de proyectos residenciales. Me apasiona la arquitectura que comunica con claridad, y el diseño que equilibra estética con funcionalidad.",
      en: "I'm in the final stretch of my Architecture degree at UNR, with my thesis project underway — a Public Library and its urban integration in the Saladillo neighborhood, Rosario. Since November 2025 I've been working at MATCH arqs, focusing on visual representation, technical documentation, and post-production of residential projects. I'm drawn to architecture that communicates clearly, and design that balances aesthetics with function.",
    },
    stats: [
      { es: "24 años", en: "24 years old" },
      { es: "UNR — 2 materias para recibirme", en: "UNR — 2 subjects from graduating" },
      { es: "+6 meses experiencia profesional", en: "6+ months professional experience" },
      { es: "Rosario, Argentina", en: "Rosario, Argentina" },
      { es: "Disponible remoto + presencial", en: "Remote + On-site availability" },
    ],
  },
  projects: {
    title: { es: "Proyectos", en: "Projects" },
    intro: {
      es: "Una selección de trabajos académicos en la UNR y proyectos profesionales en MATCH arqs.",
      en: "A selection of academic work at UNR and professional projects at MATCH arqs.",
    },
    filters: {
      all: { es: "Todos", en: "All" },
      academic: { es: "Universitarios", en: "Academic" },
      professional: { es: "MATCH arqs", en: "Professional" },
    },
    categoryLabel: {
      academic: { es: "Universitario", en: "Academic" },
      professional: { es: "MATCH arqs", en: "MATCH arqs" },
    },
    view: { es: "Ver proyecto", en: "View project" },
  },
  skills: {
    title: { es: "Habilidades", en: "Skills" },
    intro: {
      es: "Herramientas y aptitudes que utilizo para llevar las ideas del concepto a la documentación final.",
      en: "Tools and skills I use to take ideas from concept to final documentation.",
    },
    software: {
      label: { es: "Software & herramientas", en: "Software & tools" },
      items: [
        "SketchUp",
        "AutoCAD",
        "Rhinoceros",
        "Lumion",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Microsoft Excel",
        { es: "Herramientas de IA Visual", en: "AI Visual Tools" },
      ] as Array<string | { es: string; en: string }>,
    },
    languages: {
      label: { es: "Idiomas & aptitudes", en: "Languages & skills" },
      items: [
        { es: "Español — Nativo", en: "Spanish — Native" },
        { es: "Inglés — Intermedio-Avanzado", en: "English — Intermediate-Advanced" },
        { es: "Representación visual", en: "Visual representation" },
        { es: "Documentación técnica", en: "Technical documentation" },
        { es: "Posproducción", en: "Post-production" },
        { es: "Trabajo en equipo", en: "Teamwork" },
      ],
    },
  },
  contact: {
    title: { es: "Contacto", en: "Contact" },
    line: { es: "¿Trabajamos juntos?", en: "Let's work together." },
    sub: {
      es: "Disponible para colaboraciones, prácticas y proyectos freelance en arquitectura, representación visual y documentación.",
      en: "Available for collaborations, internships and freelance projects in architecture, visual representation and documentation.",
    },
    phone: "+54 341 000 0000",
    email: "julia.maranghello@email.com",
    linkedin: "linkedin.com/in/juliamaranghello",
    location: { es: "Rosario, Santa Fe, Argentina", en: "Rosario, Santa Fe, Argentina" },
    cv: { es: "Descargar CV", en: "Download CV" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados", en: "All rights reserved" },
    designed: { es: "Diseñado por Julia Maranghello", en: "Designed by Julia Maranghello" },
  },
}

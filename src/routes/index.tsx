import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, createContext, useContext, type ReactNode } from "react";
import { Scene3D } from "@/components/art/Scene3D";
import { PortraitFrame } from "@/components/art/PortraitFrame";
import { ProjectArt, type ArtVariant } from "@/components/art/ProjectArt";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emna Manai — Software Developer, Full Stack & AI" },
      {
        name: "description",
        content:
          "Portfolio d'Emna Manai — Software Developer, Full Stack Developer et AI Enthusiast. Projets, certifications, expérience et parcours.",
      },
      { property: "og:title", content: "Emna Manai — Software Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & AI Enthusiast — projets, expérience, certifications et compétences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

// ---------- i18n ----------
type Lang = "fr" | "en";
type Dict = typeof fr;
const fr = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    certs: "Certifications",
    activities: "Activités",
    contact: "Contact",
  },
  hero: {
    kicker: "Software Developer · Full Stack · AI Enthusiast",
    intro:
      "Jeune diplômée en Génie Logiciel, passionnée par la Data Science, l'Intelligence Artificielle et le développement de solutions innovantes basées sur les données.",
    cv: "Télécharger le CV",
    contact: "Me contacter",
    badge: "Disponible pour opportunités",
  },
  about: {
    kicker: "À propos",
    title:
      "Jeune diplômée en Génie Logiciel, passionnée par la Data Science, l'Intelligence Artificielle et le développement de solutions innovantes basées sur les données.",
    body: "Mon parcours combine une ingénierie logicielle rigoureuse et une curiosité affirmée pour la donnée : de la conception d'applications full-stack au développement de pipelines et de modèles IA. Je cherche aujourd'hui à mettre ces compétences au service de projets Data / IA ambitieux.",
  },
  skills: { kicker: "Compétences", title: "Un socle technique polyvalent." },
  exp: { kicker: "Expérience", title: "Parcours professionnel." },
  projects: {
    kicker: "Projets",
    title: "Réalisations marquantes.",
    intro: "Une sélection de projets professionnels, académiques et personnels.",
    pro: "Projets professionnels",
    academic: "Projets académiques",
    personal: "Projets personnels",
  },
  certs: { kicker: "Certifications", title: "Formations continues." },
  edu: {
    kicker: "Formation",
    title: "Licence en Génie Logiciel",
    school: "Institut Supérieur d'Informatique du Kef",
    period: "Diplômée — mai 2026",
    body: "Formation d'ingénierie couvrant la conception logicielle, les bases de données, les algorithmes, le développement web et l'intelligence artificielle.",
  },
  activities: { kicker: "Activités", title: "Engagement & leadership." },
  contact: {
    kicker: "Contact",
    title: "Construisons quelque chose",
    titleItalic: "ensemble",
    intro:
      "Ouverte aux opportunités de collaboration, stage ou premier emploi autour du génie logiciel et de l'IA.",
    name: "Nom complet",
    email: "Email",
    message: "Message",
    placeholderName: "Jane Doe",
    placeholderEmail: "jane@example.com",
    placeholderMsg: "Parlez-moi de votre projet…",
    send: "Envoyer le message",
    sent: "Merci — message envoyé",
  },
  footer: "Tous droits réservés.",
};
const en: typeof fr = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certs: "Certifications",
    activities: "Activities",
    contact: "Contact",
  },
  hero: {
    kicker: "Software Developer · Full Stack · AI Enthusiast",
    intro:
      "A recent Software Development graduate passionate about data science, artificial intelligence and building innovative data-driven solutions.",
    cv: "Download CV",
    contact: "Get in touch",
    badge: "Open to opportunities",
  },
  about: {
    kicker: "About",
    title:
      "A recent Software Development graduate, passionate about data science, artificial intelligence and building innovative data-driven solutions.",
    body: "My background blends rigorous software development with a strong curiosity for data — from full-stack application design to building pipelines and AI models. I'm now looking to bring these skills to ambitious data and AI-driven projects.",
  },
  skills: { kicker: "Skills", title: "A well-rounded technical foundation." },
  exp: { kicker: "Experience", title: "Professional journey." },
  projects: {
    kicker: "Projects",
    title: "Selected work.",
    intro: "A selection of professional, academic and personal projects.",
    pro: "Professional projects",
    academic: "Academic projects",
    personal: "Personal projects",
  },
  certs: { kicker: "Certifications", title: "Ongoing learning." },
  edu: {
    kicker: "Education",
    title: "B.Sc. in Software Engineering",
    school: "Higher Institute of Computer Science of Kef (ISI Kef)",
    period: "Graduated — May 2026",
    body: "Engineering curriculum covering software design, databases, algorithms, web development and artificial intelligence.",
  },
  activities: { kicker: "Activities", title: "Leadership & involvement." },
  contact: {
    kicker: "Contact",
    title: "Let's build something",
    titleItalic: "together",
    intro:
      "Open to collaboration, internship or first-role opportunities in software engineering and AI.",
    name: "Full name",
    email: "Email",
    message: "Message",
    placeholderName: "Jane Doe",
    placeholderEmail: "jane@example.com",
    placeholderMsg: "Tell me about your project…",
    send: "Send message",
    sent: "Thanks — message sent",
  },
  footer: "All rights reserved.",
};

const AppCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  dark: boolean;
  setDark: (d: boolean) => void;
}>({
  lang: "fr",
  setLang: () => {},
  t: fr,
  dark: false,
  setDark: () => {},
});
const useApp = () => useContext(AppCtx);

// ---------- data ----------
type Project = {
  title: string;
  category: string;
  bucket: "pro" | "academic" | "personal";
  art: ArtVariant;
  description: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "AutoHire",
    category: "PFE — Sopra HR Software",
    bucket: "pro",
    art: "autohire",
    description: {
      fr: "Plateforme de recrutement automatique : analyse de CV, scoring de candidats et matching avec les offres en temps réel.",
      en: "Recruitment platform with automatic CV analysis, candidate scoring, and real-time matching to job offers.",
    },
    features: {
      fr: [
        "Analyse automatique des CV et compétences",
        "Matching candidat/offre basé sur l'IA",
        "Suivi du processus de recrutement",
        "Tableau de bord recruteur interactif",
      ],
      en: [
        "Automatic CV and skills analysis",
        "AI-based candidate/job matching",
        "Recruitment pipeline tracking",
        "Interactive recruiter dashboard",
      ],
    },
    tech: ["Spring Boot", "Angular", "Python", "PostgreSQL", "NLP"],
    github: "#",
    image: "/autohire.png",
    demo: "/autohire-demo.mp4",
  },
  {
    title: "Gestion de Stock",
    category: "PFA — TOPNET",
    bucket: "pro",
    art: "stock",
    description: {
      fr: "Gère votre inventaire en temps réel. Suivi des produits et actifs sur plusieurs agences et dépôts.",
      en: "Manage inventory in real-time across multiple locations. Track products and assets instantly.",
    },
    features: {
      fr: [
        "Suivi d'inventaire en temps réel",
        "Gestion multi-agences et dépôts",
        "Rapports et alertes automatisées",
        "Interface responsive",
      ],
      en: [
        "Real-time inventory tracking",
        "Multi-branch and warehouse management",
        "Automated reports and alerts",
        "Responsive interface",
      ],
    },
    tech: ["Java", "Spring", "Angular", "MySQL"],
    github: "https://github.com/Emna-manai22/Topnet.git",
    image: "/topnet-stock.png",
  },
  {
    title: "Student Stress Detection",
    category: "Machine Learning",
    bucket: "academic",
    art: "stress",
    description: {
      fr: "Calcule le pourcentage de stress des étudiants à partir de signaux comportementaux et physiologiques.",
      en: "Calculates student stress percentage using behavioral and physiological signals.",
    },
    features: {
      fr: [
        "Évaluation du niveau de stress",
        "Indicateurs visuels en temps réel",
        "Analyse multi-sources",
        "Soutien à la prévention",
      ],
      en: [
        "Stress level estimation",
        "Real-time visual indicators",
        "Multi-source data analysis",
        "Prevention support",
      ],
    },
    tech: ["Python", "TensorFlow", "Pandas", "Streamlit"],
    github: "https://github.com/Emna-manai22/Stress-Detector.git",
    image: "/stress-detector.png",
  },
  {
    title: "Job Matcher",
    category: "Full Stack + IA",
    bucket: "personal",
    art: "jobmatcher",
    description: {
      fr: "Match entre CV et offres d'emploi : l'IA compare compétences, expériences et exigences pour proposer les meilleurs profils.",
      en: "CV-to-job matching: AI compares skills, experience and requirements to recommend top candidate/job fits.",
    },
    features: {
      fr: [
        "Recherche intelligente de postes",
        "Évaluation des compétences",
        "Matching CV/offre",
        "Filtres par secteur",
      ],
      en: ["Smart job search", "Skills evaluation", "CV/offer matching", "Industry filters"],
    },
    tech: ["Python", "Scikit-Learn", "Flask", "React"],
    github: "#",
    image: "/job-matcher.png",
  },
  {
    title: "Quran Tracker",
    category: "Web App",
    bucket: "personal",
    art: "quran",
    description: {
      fr: "Outil de mémorisation du Coran : planification par sourate, révisions espacées et suivi du pourcentage de mémorisation.",
      en: "Quran memorization tool: surah planning, spaced repetition and memorization progress tracking.",
    },
    features: {
      fr: [
        "Plan de mémorisation par sourate",
        "Révisions espacées personnalisées",
        "Suivi du taux de mémorisation",
        "Interface bilingue intuitive",
      ],
      en: [
        "Surah-based memorization plan",
        "Personalized spaced repetition",
        "Memorization rate tracking",
        "Intuitive bilingual interface",
      ],
    },
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com/Emna-manai22/quran-tracker.git",
    demo: "#",
    image: "/quran-tracker.png",
  },
];

const skillGroups = [
  {
    title: { fr: "Langages", en: "Languages" },
    items: ["Python", "JavaScript", "Java", "SQL", "PHP"],
  },
  {
    title: { fr: "Développement Web", en: "Web Development" },
    items: ["Django", "React", "Laravel", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: { fr: "IA & Data", en: "AI & Data" },
    items: ["Machine Learning", "NLP", "LLMs", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: { fr: "Bases de données", en: "Databases" },
    items: ["MySQL", "SQL Server", "Oracle", "PL/SQL"],
  },
  {
    title: { fr: "Outils", en: "Tools" },
    items: ["Git", "GitHub", "Docker", "Swagger", "Jupyter", "VS Code"],
  },
];

const experiences = [
  {
    period: "2026",
    role: { fr: "PFE — Software Developer", en: "Final Year Internship — Software Developer" },
    company: "Sopra HR Software Tunisia",
    body: {
      fr: "Conception et développement d'AutoHire, plateforme intelligente de recrutement combinant technologies web modernes et intelligence artificielle (NLP, matching, scoring).",
      en: "Design and development of AutoHire, a smart recruitment platform combining modern web technologies and AI (NLP, matching, scoring).",
    },
  },
  {
    period: "2025",
    role: { fr: "PFA — Full Stack Developer", en: "Summer Internship — Full Stack Developer" },
    company: "TOPNET",
    body: {
      fr: "Développement d'une application de gestion de stock : gestion des produits, agences et dépôts, back-end Java/Spring et tableau de bord temps réel.",
      en: "Built a stock management application: products, branches and warehouses, Java/Spring back-end and a real-time dashboard.",
    },
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2026" },
  { name: "Jupyter Notebook", issuer: "365 Data Science", year: "2025" },
  { name: "Generative AI", issuer: "Google Cloud", year: "2024" },
];

const activities = [
  {
    title: "Hackathon MAE 2.0",
    period: "2023 — 2026",
    body: {
      fr: "Projet sélectionné pour incubation — 6ᵉ équipe retenue.",
      en: "Project selected for incubation — 6th team shortlisted.",
    },
  },
  {
    title: "Hackathon HILL",
    period: "Juin 2025",
    body: {
      fr: "Participante — challenge d'innovation technologique.",
      en: "Participant — technology innovation challenge.",
    },
  },
  {
    title: "Club IDER",
    period: "—",
    body: {
      fr: "Cheffe du département Marketing : communication digitale et organisation d'événements académiques.",
      en: "Head of Marketing: digital communication and organization of academic events.",
    },
  },
  {
    title: "Enactus Tunisie",
    period: "—",
    body: {
      fr: "Membre actif : projets à impact social et entrepreneurial.",
      en: "Active member: social-impact and entrepreneurial projects.",
    },
  },
];

// ---------- root ----------
function Portfolio() {
  const [lang, setLangState] = useState<Lang>("fr");
  const [dark, setDarkState] = useState(false);

  useEffect(() => {
    const savedLang =
      (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    const savedDark = typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
    if (savedLang) setLangState(savedLang);
    setDarkState(savedDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (typeof window !== "undefined") localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = lang === "fr" ? fr : en;

  return (
    <AppCtx.Provider value={{ lang, setLang: setLangState, t, dark, setDark: setDarkState }}>
      <div className="min-h-screen bg-background text-foreground selection:bg-brand-soft selection:text-brand-deep">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppCtx.Provider>
  );
}

function Nav() {
  const { t, lang, setLang, dark, setDark } = useApp();
  const [open, setOpen] = useState(false);
  const links = [
    ["#about", t.nav.about],
    ["#skills", t.nav.skills],
    ["#experience", t.nav.experience],
    ["#projects", t.nav.projects],
    ["#certs", t.nav.certs],
    ["#activities", t.nav.activities],
    ["#contact", t.nav.contact],
  ] as const;
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg italic text-brand-deep">
          Emna Manai
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-ink-muted lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-brand-deep">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-brand-accent/40"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand-accent/40"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                />
              </svg>
            ) : (
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { t } = useApp();
  return (
    <section id="top" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -left-20 size-[420px] rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute right-0 top-40 size-[380px] rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 animate-fade-in opacity-70 [animation-duration:1.2s]">
        <Scene3D />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_400px]">
          <div className="animate-reveal">
            <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              {t.hero.kicker}
            </span>
            <h1 className="max-w-[16ch] text-balance text-5xl leading-[1.02] text-brand-deep sm:text-7xl">
              <span className="italic">Emna</span> Manai
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg text-ink-muted">{t.hero.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/cv-emna-manai.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-brand-deep/10 transition-all hover:-translate-y-0.5 hover:bg-brand-deep/90"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {t.hero.cv}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-brand-accent/40"
              >
                {t.hero.contact}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <HeroSocialLink
                href="https://github.com/Emna-manai22"
                label="GitHub"
                icon={<IconGithub />}
              />
              <HeroSocialLink
                href="https://www.linkedin.com/in/emna-manai/"
                label="LinkedIn"
                icon={<IconLinkedin />}
              />
              <HeroSocialLink
                href="mailto:emnamannai244@gmail.com"
                label="Email"
                icon={<IconMail />}
              />
            </div>
          </div>
          <div className="relative hidden animate-reveal lg:block">
            <div className="aspect-square w-60 rounded-full ring-4 ring-[color:var(--gold)]/40 p-1 bg-transparent overflow-hidden">
              <PortraitFrame />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
      {children}
    </span>
  );
}

function About() {
  const { t } = useApp();
  return (
    <section id="about" className="border-y border-border bg-surface-2/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          <SectionKicker>{t.about.kicker}</SectionKicker>
          <div className="max-w-[65ch]">
            <p className="font-display text-3xl leading-tight text-brand-deep sm:text-4xl">
              {t.about.title}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted">{t.about.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { t, lang } = useApp();
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <SectionKicker>{t.skills.kicker}</SectionKicker>
          <h2 className="mt-3 font-display text-4xl leading-tight text-brand-deep">
            {t.skills.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.title.en}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-lg"
            >
              <h3 className="font-display text-2xl text-brand-deep">{g.title[lang]}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-black/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t, lang } = useApp();
  return (
    <section id="experience" className="border-y border-border bg-surface-2/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionKicker>{t.exp.kicker}</SectionKicker>
        <h2 className="mb-16 mt-3 font-display text-4xl leading-tight text-brand-deep">
          {t.exp.title}
        </h2>
        <div className="space-y-10">
          {experiences.map((e) => (
            <div key={e.company} className="group grid grid-cols-1 gap-6 lg:grid-cols-[180px_1fr]">
              <div className="text-sm font-semibold tracking-wider text-brand-accent">
                {e.period}
              </div>
              <div className="border-l-2 border-border pl-8 transition-colors group-hover:border-[color:var(--gold)]">
                <h3 className="font-display text-2xl text-brand-deep">{e.role[lang]}</h3>
                <p className="mt-1 text-sm font-medium text-foreground">{e.company}</p>
                <p className="mt-3 max-w-[70ch] text-pretty text-ink-muted">{e.body[lang]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-border bg-card p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                {t.edu.kicker}
              </span>
              <h3 className="mt-3 font-display text-3xl text-brand-deep">{t.edu.title}</h3>
              <p className="mt-3 text-foreground">{t.edu.school}</p>
              <p className="mt-4 max-w-[60ch] text-sm text-ink-muted">{t.edu.body}</p>
            </div>
            <div className="flex items-start justify-end">
              <span className="rounded-full bg-brand-soft px-5 py-3 text-sm font-semibold text-brand-deep">
                {t.edu.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useApp();
  const pro = projects.filter((p) => p.bucket === "pro");
  const academic = projects.filter((p) => p.bucket === "academic");
  const personal = projects.filter((p) => p.bucket === "personal");
  return (
    <section id="projects" className="bg-surface py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
            {t.projects.kicker}
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white">
            {t.projects.title}
          </h2>
          <p className="mt-4 max-w-[52ch] text-pretty text-ink-inverse-muted">{t.projects.intro}</p>
        </div>

        <ProjectGroup title={t.projects.pro} items={pro} />
        <ProjectGroup title={t.projects.academic} items={academic} />
        <ProjectGroup title={t.projects.personal} items={personal} />
      </div>
    </section>
  );
}

function ProjectGroup({ title, items }: { title: string; items: Project[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="mb-6 font-display text-2xl italic text-[color:var(--gold)]">{title}</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { lang } = useApp();
  const [showDemo, setShowDemo] = useState(false);
  const isVideoDemo = Boolean(project.demo?.match(/\.(mp4|webm|ogg)$/i));

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-[color:var(--border)] transition-all hover:-translate-y-1 hover:ring-[color:var(--brand-accent)]/40 shadow-sm">
        <div className="aspect-[16/10] overflow-hidden bg-surface-2 transition-transform duration-700 group-hover:scale-[1.04] relative">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <ProjectArt variant={project.art} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl text-brand-deep">{project.title}</h3>
          <p className="mt-4 leading-relaxed font-medium text-base text-brand-deep/90">
            {project.description[lang]}
          </p>
          <ul className="mt-5 space-y-1.5 text-sm text-ink-muted">
            {project.features[lang].map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[color:var(--gold)]" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[color:var(--brand-soft)]/30 px-3 py-1 text-[11px] font-medium text-brand-deep ring-1 ring-[color:var(--border)]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto flex gap-4 pt-6 text-xs font-semibold uppercase tracking-widest">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 text-brand-deep hover:text-[color:var(--gold)]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            )}
            {project.demo && isVideoDemo ? (
              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className="inline-flex items-center gap-1.5 text-brand-deep hover:text-[color:var(--gold)]"
              >
                {lang === "fr" ? "Démo vidéo →" : "Video demo →"}
              </button>
            ) : project.demo ? (
              <a
                href={project.demo}
                className="inline-flex items-center gap-1.5 text-brand-deep hover:text-[color:var(--gold)]"
                target="_blank"
                rel="noreferrer"
              >
                {lang === "fr" ? "Démo →" : "Demo →"}
              </a>
            ) : null}
          </div>
        </div>
      </article>
      {showDemo && project.demo && isVideoDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-semibold text-brand-deep">
                {project.title} - {lang === "fr" ? "Démo vidéo" : "Video demo"}
              </span>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground hover:bg-surface"
              >
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
            <video controls autoPlay src={project.demo} className="w-full bg-black">
              {lang === "fr"
                ? "Votre navigateur ne supporte pas la vidéo."
                : "Your browser does not support video."}
            </video>
          </div>
        </div>
      )}
    </>
  );
}

function Certifications() {
  const { t } = useApp();
  return (
    <section id="certs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionKicker>{t.certs.kicker}</SectionKicker>
        <h2 className="mb-12 mt-3 font-display text-4xl leading-tight text-brand-deep">
          {t.certs.title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--gold)]/40 hover:shadow-lg"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-deep">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl text-brand-deep">{c.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                  {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  const { t, lang } = useApp();
  return (
    <section id="activities" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionKicker>{t.activities.kicker}</SectionKicker>
        <h2 className="mb-12 mt-3 font-display text-4xl leading-tight text-brand-deep">
          {t.activities.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activities.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-brand-deep">{a.title}</h3>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                  {a.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">{a.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useApp();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:emnamannai244@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="border-t border-border bg-surface-2/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionKicker>{t.contact.kicker}</SectionKicker>
            <h2 className="mt-3 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">
              {t.contact.title}{" "}
              <span className="italic text-[color:var(--gold)]">{t.contact.titleItalic}</span>.
            </h2>
            <p className="mt-6 max-w-[42ch] text-pretty text-ink-muted">{t.contact.intro}</p>
            <div className="mt-10 space-y-4">
              <ContactLink
                href="mailto:emnamannai244@gmail.com"
                label="emnamannai244@gmail.com"
                icon={<IconMail />}
              />
              <ContactLink
                href="https://github.com/Emna-manai22"
                label="github.com/Emna-manai22"
                icon={<IconGithub />}
              />
              <ContactLink
                href="https://www.linkedin.com/in/emna-manai/"
                label="linkedin.com/in/emna-manai"
                icon={<IconLinkedin />}
              />
            </div>
          </div>
          <form
            onSubmit={submit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <Field label={t.contact.name}>
              <input
                required
                maxLength={100}
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm ring-1 ring-black/5 outline-none transition focus:ring-2 focus:ring-brand-accent/40"
                placeholder={t.contact.placeholderName}
              />
            </Field>
            <Field label={t.contact.email}>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm ring-1 ring-black/5 outline-none transition focus:ring-2 focus:ring-brand-accent/40"
                placeholder={t.contact.placeholderEmail}
              />
            </Field>
            <Field label={t.contact.message}>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-lg bg-background px-4 py-3 text-sm ring-1 ring-black/5 outline-none transition focus:ring-2 focus:ring-brand-accent/40"
                placeholder={t.contact.placeholderMsg}
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-deep py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-deep/90"
            >
              {status === "sent" ? t.contact.sent : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function HeroSocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent"
    >
      {icon}
    </a>
  );
}

function ContactLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
      <span className="grid size-10 place-items-center rounded-lg bg-card text-brand-accent ring-1 ring-black/5 transition-colors group-hover:bg-brand-deep group-hover:text-primary-foreground">
        {icon}
      </span>
      <span className="text-sm font-medium text-foreground group-hover:text-brand-deep">
        {label}
      </span>
    </a>
  );
}

function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-ink-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} Emna Manai. {t.footer}
        </p>
      </div>
    </footer>
  );
}

function IconMail() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

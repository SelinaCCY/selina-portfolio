export interface TechCard {
  category: string;
  tags: string[];
}

export interface Role {
  id: 'current' | 'ai' | 'et' | 'intern';
  number: string;
  numberColor: string;
  title: string;
  subtitle: string;
  current?: boolean;
  accentColor: string;
  accentColorRgb: string;
  description?: string;
  bullets?: string[];
  outcome?: string;
  techCards?: TechCard[];
  placeholder?: boolean;
  group?: { id: string; label: string };
}

export const roles: Role[] = [
  {
    id: 'current',
    number: '01',
    numberColor: '#9060c0',
    title: 'Software / AI Engineer — AVP',
    subtitle: 'Citi, London · [Team] · [Start date] – Present',
    current: true,
    accentColor: '#9060c0',
    accentColorRgb: '144,96,192',
    placeholder: true,
  },
  {
    id: 'ai',
    number: '02',
    numberColor: '#5b9fd4',
    title: 'Software / AI Engineer (Graduate Rotation 1)',
    subtitle: 'Citi, London · AI Tooling · Chief Technology Office · Sept 2024 – Sept 2025',
    accentColor: '#5b9fd4',
    accentColorRgb: '91,159,212',
    group: { id: 'grad-programme', label: 'Graduate programme · 2024–2026' },
    description:
      "Built and scaled GenAI products within the CTO's AI Tooling team — taking AI tools from POC to production, now used across the organisation.",
    bullets: [
      'Acted as sole engineer on BAU GenAI products after the team lead shifted focus — owned a reusable RAG-based chatbot blueprint platform end-to-end, from proof-of-concept through production deployment (Docker, Helm, OpenShift, Harness)',
      'Scaled the platform to power 4 internal products/teams, including Lightspeed Assist and RoD Assist, via a model configuration framework that let teams create a chatbot without building from scratch',
      'Shipped an AI feature that auto-generates release summaries, projected to save 100,000+ developer hours annually across the org — presented at company Townhall',
      'Built RoD Assist, a documentation chatbot that cut developer support time by 90%, including direct ticket-raising from within the chat',
      'Extended an existing RAG pipeline to support new document ingestion sources, and ran comparative LLM evaluations (precision/recall/F1) across LLM models — contributing to formal Model Risk Management testing for AI governance approval',
      "Selected as an early pilot tester for an AI coding agent; ran adoption workshops for colleagues and fed structured feedback back to the tool's team",
    ],
    outcome: 'Presented at company Townhall · projected to save 100,000+ developer hours annually',
    techCards: [
      {
        category: 'Languages & Frameworks',
        tags: ['Python', 'FastAPI', 'React', 'JavaScript'],
      },
      {
        category: 'AI / ML',
        tags: ['Prompt Engineering', 'RAG', 'Context Engineering', 'LLM Evaluation'],
      },
      {
        category: 'Infrastructure & DevOps',
        tags: ['Lightspeed', 'Harness', 'Docker', 'Kubernetes (Helm)', 'OpenShift', 'Harness CI/CD', 'pytest'],
      },
      {
        category: 'Integrations & Data',
        tags: ['ServiceNow API', 'Jira API', 'MongoDB', 'Couchbase'],
      },
    ],
  },
  {
    id: 'et',
    number: '03',
    numberColor: '#e8924a',
    title: 'Software Engineer (Graduate Rotation 2)',
    subtitle: 'Citi, London · Fixed Income eTrading · Integrations & Connectivity · Sept 2025 – July 2026',
    accentColor: '#e8924a',
    accentColorRgb: '232,146,74',
    group: { id: 'grad-programme', label: 'Graduate programme · 2024–2026' },
    description:
      'Embedded in the Fixed Income eTrading platform team, working on integrations and venue connectivity. Built and maintained the systems connecting trading desks to electronic venues.',
    bullets: [
      "Independently resolved a P1 production incident (certificate expiry) affecting live trading gateways — stepped up to lead the fix in the senior developer's absence, then partnered with tech support to improve monitoring and prevent recurrence",
      'Led migration of 80 repositories from Bitbucket to GitHub, completed ahead of deadline',
      'Led CI/CD migration from TeamCity to Lightspeed — migrated 20 pipelines (10 live in production), making the team the first in Fixed Income eTrading to go live with Lightspeed and Harness; acted as internal SME, running knowledge-transfer sessions across the team and cross-functional groups',
      'Developed features across RFQ and STP trading gateways (Java, FIX protocol), including new trade-type support and business logic; gained working knowledge of the full trade lifecycle',
      'Provided production support and on-call coverage for the EMEA region; managed Autosys job scheduling',
    ],
    outcome: 'Fixed Income eTrading Business Knowledge ·  First team in Fixed Income eTrading to go live with Lightspeed and Harness',
    techCards: [
      {
        category: 'Languages & Frameworks',
        tags: ['Java', 'TypeScript (Angular)', 'SpringBoot'],
      },
      {
        category: 'Infrastructure & DevOps',
        tags: ['Maven', 'Gradle', 'TeamCity', 'Lightspeed', 'Harness', 'uDeploy'],
      },
      {
        category: 'Infrastructure & Messaging',
        tags: ['Linux', 'Kafka', 'TIBCO', 'Autosys'],
      },
      {
        category: 'Protocols & Tools',
        tags: ['FIX Protocol', 'MRemoteNG', 'Tectia'],
      },
    ],
  },
  {
    id: 'intern',
    number: '04',
    numberColor: '#9098b0',
    title: 'Software Engineering Intern',
    subtitle: '[Company] · [Team] · Summer 2022',
    accentColor: '#d0d8e8',
    accentColorRgb: '208,216,232',
    placeholder: true,
  },
];

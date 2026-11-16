export interface Project {
  title: string;
  category: string;
  color: string;
  colorRgb: string;
  gradient: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Woof Am I',
    category: 'Mobile / ML',
    color: '#e8957a',
    colorRgb: '232,149,122',
    gradient: 'linear-gradient(135deg, #e8924a, #dba86a)',
    description:
      'Snap a photo of a dog and get its breed in seconds. My university capstone and first end-to-end build: I trained an image classifier in Python, converted it to Core ML, and shipped it inside a native iOS app that real users could pick up and use.',
    tags: ['Swift', 'Core ML', 'TensorFlow'],
    github: 'https://github.com/SelinaCCY/dog-breed-recognition-iOS-app',
  },
  {
    title: 'TechDocs AI',
    category: 'AI / LLM',
    color: '#5b9fd4',
    colorRgb: '91,159,212',
    gradient: 'linear-gradient(135deg, #2b3c72, #5b9fd4)',
    description:
      'LLM-powered Q&A for internal technical documentation. Built because navigating sprawling wikis was slowing down onboarding.',
    tags: ['Python', 'LangChain', 'FastAPI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Pasar Malam',
    category: 'Mobile',
    color: '#e8924a',
    colorRgb: '232,146,74',
    gradient: 'linear-gradient(135deg, #3a5020, #7ab55a)',
    description:
      'Community-driven hawker food discovery. Built after spending too long Googling "best char kway teow near me" with mixed results.',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    github: '#',
  },
];

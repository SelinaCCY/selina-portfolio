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
];

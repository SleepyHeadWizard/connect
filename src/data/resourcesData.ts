import { Resource } from '../types/resources';

export const resources: Resource[] = [
  {
    id: '1',
    title: 'The Impact of Social Media on Mental Health',
    description: 'A comprehensive study examining the relationship between social media use and mental health outcomes.',
    type: 'article',
    category: 'research',
    url: 'https://example.com/article1',
    tags: ['research', 'mental health', 'social media'],
    author: 'Dr. Sarah Johnson',
    publisher: 'Journal of Digital Psychology',
    year: 2023
  },
  {
    id: '2',
    title: 'Digital Wellbeing App',
    description: 'An app that helps you track and manage your social media usage with personalized insights.',
    type: 'app',
    category: 'tools',
    url: 'https://example.com/app1',
    tags: ['app', 'digital wellbeing', 'tracking'],
    rating: 4.8
  },
  {
    id: '3',
    title: 'Mindful Social Media: A Guide to Digital Wellness',
    description: 'A practical guide to developing healthy social media habits and maintaining digital wellbeing.',
    type: 'book',
    category: 'self-help',
    url: 'https://example.com/book1',
    tags: ['book', 'self-help', 'digital wellness'],
    author: 'Michael Chen',
    publisher: 'Digital Wellness Press',
    year: 2023
  },
  {
    id: '4',
    title: 'Mental Health Foundation',
    description: 'A leading organization providing resources and support for mental health in the digital age.',
    type: 'organization',
    category: 'support',
    url: 'https://example.com/org1',
    tags: ['organization', 'mental health', 'support']
  },
  {
    id: '5',
    title: 'Social Media Detox: A 30-Day Challenge',
    description: 'A step-by-step guide to reducing social media dependency and improving mental health.',
    type: 'article',
    category: 'self-help',
    url: 'https://example.com/article2',
    tags: ['article', 'detox', 'challenge'],
    author: 'Emma Davis',
    publisher: 'Wellness Today',
    year: 2023
  },
  {
    id: '6',
    title: 'Screen Time Manager',
    description: 'An app that helps you set and maintain healthy screen time limits across all your devices.',
    type: 'app',
    category: 'tools',
    url: 'https://example.com/app2',
    tags: ['app', 'screen time', 'management'],
    rating: 4.5
  },
  {
    id: '7',
    title: 'Digital Wellness Institute',
    description: 'A research and education organization focused on promoting healthy technology use.',
    type: 'organization',
    category: 'research',
    url: 'https://example.com/org2',
    tags: ['organization', 'research', 'education']
  },
  {
    id: '8',
    title: 'The Digital Mind: Understanding Social Media Psychology',
    description: 'An academic exploration of how social media affects our psychology and behavior.',
    type: 'book',
    category: 'research',
    url: 'https://example.com/book2',
    tags: ['book', 'psychology', 'research'],
    author: 'Dr. Robert Wilson',
    publisher: 'Academic Press',
    year: 2023
  }
];

export const categories = [
  'all',
  'research',
  'self-help',
  'tools',
  'support'
];

export const resourceTypes = [
  'all',
  'article',
  'organization',
  'app',
  'book'
]; 
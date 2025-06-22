
import { Project } from '@/types';
import { mockTeamMembers } from './teamMembers';

export const mockKscstProjects: Project[] = [
  {
    id: '14',
    title: 'KSCST Digital Transformation Initiative',
    description: 'Comprehensive digital transformation of KSCST campus including smart classrooms, digital library, and online services.',
    category: 'kscst',
    status: 'in-progress',
    priority: 'critical',
    startDate: '2023-04-01',
    endDate: '2024-12-31',
    progress: 60,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[3], mockTeamMembers[5], mockTeamMembers[7], mockTeamMembers[9]],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    budget: 500000,
    milestones: [
      { id: '30', title: 'Infrastructure Setup', description: 'Complete IT infrastructure setup', dueDate: '2023-12-31', completed: true, completedAt: '2023-12-20' },
      { id: '31', title: 'Application Development', description: 'Develop core applications', dueDate: '2024-08-31', completed: false }
    ],
    createdAt: '2023-03-15',
    updatedAt: '2024-03-12'
  },
  {
    id: '15',
    title: 'KSCST Alumni Network Platform',
    description: 'Comprehensive alumni network platform for KSCST with job portal, mentorship program, and event management.',
    category: 'kscst',
    status: 'completed',
    priority: 'medium',
    startDate: '2022-06-01',
    endDate: '2023-05-31',
    progress: 100,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[7]],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS S3'],
    budget: 80000,
    milestones: [
      { id: '32', title: 'Platform Launch', description: 'Launch alumni platform', dueDate: '2023-03-31', completed: true, completedAt: '2023-03-28' },
      { id: '33', title: 'Alumni Onboarding', description: 'Complete alumni onboarding process', dueDate: '2023-05-31', completed: true, completedAt: '2023-05-25' }
    ],
    createdAt: '2022-05-15',
    updatedAt: '2023-05-31'
  },
  {
    id: '16',
    title: 'KSCST Research Publication Portal',
    description: 'Digital portal for KSCST faculty and students to publish and access research papers with peer review system.',
    category: 'kscst',
    status: 'in-progress',
    priority: 'high',
    startDate: '2023-10-01',
    endDate: '2024-09-30',
    progress: 40,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[6], mockTeamMembers[8]],
    technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Elasticsearch', 'Docker'],
    budget: 120000,
    milestones: [
      { id: '34', title: 'Submission System', description: 'Complete paper submission system', dueDate: '2024-03-31', completed: false },
      { id: '35', title: 'Peer Review Module', description: 'Implement peer review workflow', dueDate: '2024-06-30', completed: false }
    ],
    createdAt: '2023-09-15',
    updatedAt: '2024-03-10'
  },
  {
    id: '17',
    title: 'KSCST Smart Campus IoT Network',
    description: 'Implementation of IoT sensors across KSCST campus for energy management, security, and environmental monitoring.',
    category: 'kscst',
    status: 'planning',
    priority: 'high',
    startDate: '2024-06-01',
    endDate: '2025-05-31',
    progress: 5,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[5], mockTeamMembers[11]],
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'Grafana', 'Python'],
    budget: 200000,
    milestones: [
      { id: '36', title: 'Sensor Deployment Plan', description: 'Create comprehensive sensor deployment plan', dueDate: '2024-07-31', completed: false },
      { id: '37', title: 'Pilot Implementation', description: 'Complete pilot phase implementation', dueDate: '2024-12-31', completed: false }
    ],
    createdAt: '2024-05-01',
    updatedAt: '2024-05-15'
  },
  {
    id: '18',
    title: 'KSCST Virtual Reality Lab',
    description: 'State-of-the-art VR lab for KSCST with educational content and immersive learning experiences.',
    category: 'kscst',
    status: 'on-hold',
    priority: 'medium',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    progress: 25,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[10]],
    technologies: ['Unity', 'Unreal Engine', 'Oculus SDK', 'WebXR', 'C#'],
    budget: 300000,
    milestones: [
      { id: '38', title: 'VR Content Development', description: 'Develop educational VR content', dueDate: '2024-08-31', completed: false },
      { id: '39', title: 'Lab Setup', description: 'Complete VR lab physical setup', dueDate: '2024-10-31', completed: false }
    ],
    createdAt: '2023-12-01',
    updatedAt: '2024-02-15'
  },
  {
    id: '19',
    title: 'KSCST Mobile App Ecosystem',
    description: 'Comprehensive mobile app ecosystem for KSCST students, faculty, and staff with integrated services.',
    category: 'kscst',
    status: 'testing',
    priority: 'high',
    startDate: '2023-08-01',
    endDate: '2024-06-30',
    progress: 80,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[10], mockTeamMembers[7]],
    technologies: ['React Native', 'Flutter', 'Firebase', 'GraphQL', 'Push Notifications'],
    budget: 100000,
    milestones: [
      { id: '40', title: 'iOS App Development', description: 'Complete iOS app development', dueDate: '2024-04-30', completed: true, completedAt: '2024-04-25' },
      { id: '41', title: 'Beta Testing', description: 'Complete beta testing phase', dueDate: '2024-06-15', completed: false }
    ],
    createdAt: '2023-07-15',
    updatedAt: '2024-04-28'
  },
  {
    id: '20',
    title: 'KSCST Placement Management System',
    description: 'Advanced placement management system for KSCST with company portal, student profiles, and placement analytics.',
    category: 'kscst',
    status: 'completed',
    priority: 'critical',
    startDate: '2022-09-01',
    endDate: '2023-08-31',
    progress: 100,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[3], mockTeamMembers[8]],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Chart.js'],
    budget: 90000,
    milestones: [
      { id: '42', title: 'System Launch', description: 'Launch placement management system', dueDate: '2023-06-30', completed: true, completedAt: '2023-06-28' },
      { id: '43', title: 'Training & Rollout', description: 'Complete user training and rollout', dueDate: '2023-08-31', completed: true, completedAt: '2023-08-30' }
    ],
    createdAt: '2022-08-15',
    updatedAt: '2023-08-31'
  },
  {
    id: '21',
    title: 'KSCST Innovation Hub Platform',
    description: 'Digital platform for fostering innovation and entrepreneurship among KSCST students with project showcases and funding opportunities.',
    category: 'kscst',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-01',
    endDate: '2024-10-31',
    progress: 30,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[6], mockTeamMembers[9]],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
    budget: 150000,
    milestones: [
      { id: '44', title: 'Project Showcase Module', description: 'Develop project showcase functionality', dueDate: '2024-05-31', completed: false },
      { id: '45', title: 'Funding Portal', description: 'Implement funding opportunity portal', dueDate: '2024-08-31', completed: false }
    ],
    createdAt: '2023-12-01',
    updatedAt: '2024-03-15'
  },
  {
    id: '22',
    title: 'KSCST AI-Powered Learning Analytics',
    description: 'Advanced analytics platform using AI to track student learning patterns and provide personalized recommendations.',
    category: 'kscst',
    status: 'planning',
    priority: 'critical',
    startDate: '2024-07-01',
    endDate: '2025-06-30',
    progress: 10,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[7]],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Apache Kafka'],
    budget: 250000,
    milestones: [
      { id: '46', title: 'Data Collection Framework', description: 'Establish learning data collection framework', dueDate: '2024-09-30', completed: false },
      { id: '47', title: 'AI Model Training', description: 'Train machine learning models', dueDate: '2024-12-31', completed: false }
    ],
    createdAt: '2024-06-01',
    updatedAt: '2024-06-15'
  },
  {
    id: '23',
    title: 'KSCST Sustainable Energy Monitoring',
    description: 'Real-time monitoring and optimization system for campus energy consumption with renewable energy integration.',
    category: 'kscst',
    status: 'in-progress',
    priority: 'medium',
    startDate: '2023-09-01',
    endDate: '2024-08-31',
    progress: 65,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[5], mockTeamMembers[11]],
    technologies: ['IoT Sensors', 'Python', 'InfluxDB', 'Grafana', 'Solar Panel API'],
    budget: 180000,
    milestones: [
      { id: '48', title: 'Sensor Installation', description: 'Install energy monitoring sensors', dueDate: '2024-02-28', completed: true, completedAt: '2024-02-25' },
      { id: '49', title: 'Dashboard Development', description: 'Complete energy dashboard', dueDate: '2024-06-30', completed: false }
    ],
    createdAt: '2023-08-15',
    updatedAt: '2024-03-20'
  }
];

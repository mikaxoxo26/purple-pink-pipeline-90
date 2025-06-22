
import { Project } from '@/types';
import { mockTeamMembers } from './teamMembers';

export const mockFundedProjects: Project[] = [
  {
    id: '24',
    title: 'NSF Smart Grid Research Initiative',
    description: 'National Science Foundation funded research on smart grid technology with focus on renewable energy integration and grid optimization.',
    category: 'funded',
    status: 'in-progress',
    priority: 'critical',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    progress: 45,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[0], mockTeamMembers[1], mockTeamMembers[5], mockTeamMembers[6]],
    technologies: ['Python', 'MATLAB', 'IoT Sensors', 'Machine Learning', 'Power Systems'],
    budget: 850000,
    milestones: [
      { id: '50', title: 'Phase I Research', description: 'Complete initial research phase', dueDate: '2023-12-31', completed: true, completedAt: '2023-12-28' },
      { id: '51', title: 'Prototype Development', description: 'Develop smart grid prototype', dueDate: '2024-12-31', completed: false },
      { id: '52', title: 'Field Testing', description: 'Conduct real-world testing', dueDate: '2025-06-30', completed: false }
    ],
    createdAt: '2022-10-01',
    updatedAt: '2024-03-15'
  },
  {
    id: '25',
    title: 'NIH Healthcare AI Platform',
    description: 'National Institutes of Health funded development of AI-powered healthcare diagnostic platform with machine learning capabilities.',
    category: 'funded',
    status: 'in-progress',
    priority: 'critical',
    startDate: '2023-07-01',
    endDate: '2026-06-30',
    progress: 35,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[2], mockTeamMembers[3], mockTeamMembers[7], mockTeamMembers[8]],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'FHIR', 'Docker', 'Kubernetes'],
    budget: 1200000,
    milestones: [
      { id: '53', title: 'Data Collection Framework', description: 'Establish healthcare data collection', dueDate: '2024-01-31', completed: true, completedAt: '2024-01-25' },
      { id: '54', title: 'AI Model Training', description: 'Train diagnostic AI models', dueDate: '2024-12-31', completed: false },
      { id: '55', title: 'Clinical Trials', description: 'Conduct clinical validation trials', dueDate: '2025-12-31', completed: false }
    ],
    createdAt: '2023-05-01',
    updatedAt: '2024-03-20'
  },
  {
    id: '26',
    title: 'DOE Renewable Energy Storage System',
    description: 'Department of Energy funded project for developing advanced battery storage systems for renewable energy applications.',
    category: 'funded',
    status: 'testing',
    priority: 'high',
    startDate: '2022-09-01',
    endDate: '2024-08-31',
    progress: 80,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[9], mockTeamMembers[11]],
    technologies: ['Materials Science', 'Battery Technology', 'Power Electronics', 'Control Systems'],
    budget: 750000,
    milestones: [
      { id: '56', title: 'Battery Development', description: 'Complete battery prototype development', dueDate: '2023-12-31', completed: true, completedAt: '2023-12-20' },
      { id: '57', title: 'Performance Testing', description: 'Complete comprehensive testing', dueDate: '2024-06-30', completed: false },
      { id: '58', title: 'Commercial Validation', description: 'Validate commercial viability', dueDate: '2024-08-31', completed: false }
    ],
    createdAt: '2022-07-01',
    updatedAt: '2024-03-25'
  },
  {
    id: '27',
    title: 'NASA Space Technology Research',
    description: 'NASA-funded research on advanced propulsion systems and space habitat technologies for future Mars missions.',
    category: 'funded',
    status: 'planning',
    priority: 'critical',
    startDate: '2024-06-01',
    endDate: '2027-05-31',
    progress: 15,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[0], mockTeamMembers[6], mockTeamMembers[10]],
    technologies: ['Aerospace Engineering', 'Materials Science', 'Simulation Software', 'CAD'],
    budget: 950000,
    milestones: [
      { id: '59', title: 'Conceptual Design', description: 'Complete conceptual design phase', dueDate: '2024-12-31', completed: false },
      { id: '60', title: 'Prototype Testing', description: 'Test propulsion prototypes', dueDate: '2025-12-31', completed: false },
      { id: '61', title: 'Mission Integration', description: 'Integrate with mission requirements', dueDate: '2026-12-31', completed: false }
    ],
    createdAt: '2024-04-01',
    updatedAt: '2024-05-15'
  },
  {
    id: '28',
    title: 'EPA Environmental Monitoring Network',
    description: 'Environmental Protection Agency funded project to develop nationwide environmental monitoring network using IoT sensors.',
    category: 'funded',
    status: 'in-progress',
    priority: 'high',
    startDate: '2023-03-01',
    endDate: '2025-02-28',
    progress: 60,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[5], mockTeamMembers[7], mockTeamMembers[11]],
    technologies: ['IoT Sensors', 'LoRaWAN', 'Cloud Computing', 'Data Analytics', 'GIS'],
    budget: 650000,
    milestones: [
      { id: '62', title: 'Sensor Network Deployment', description: 'Deploy initial sensor network', dueDate: '2024-03-31', completed: true, completedAt: '2024-03-28' },
      { id: '63', title: 'Data Platform Development', description: 'Complete data analytics platform', dueDate: '2024-09-30', completed: false },
      { id: '64', title: 'National Rollout', description: 'Complete nationwide deployment', dueDate: '2025-01-31', completed: false }
    ],
    createdAt: '2023-01-01',
    updatedAt: '2024-03-30'
  },
  {
    id: '29',
    title: 'DARPA Cybersecurity Framework',
    description: 'Defense Advanced Research Projects Agency funded development of next-generation cybersecurity framework for critical infrastructure.',
    category: 'funded',
    status: 'completed',
    priority: 'critical',
    startDate: '2021-10-01',
    endDate: '2023-09-30',
    progress: 100,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[11]],
    technologies: ['Cybersecurity', 'Machine Learning', 'Network Security', 'Blockchain', 'Encryption'],
    budget: 1100000,
    milestones: [
      { id: '65', title: 'Framework Development', description: 'Complete security framework', dueDate: '2022-12-31', completed: true, completedAt: '2022-12-28' },
      { id: '66', title: 'Security Testing', description: 'Complete penetration testing', dueDate: '2023-06-30', completed: true, completedAt: '2023-06-25' },
      { id: '67', title: 'Final Deployment', description: 'Deploy to critical infrastructure', dueDate: '2023-09-30', completed: true, completedAt: '2023-09-28' }
    ],
    createdAt: '2021-08-01',
    updatedAt: '2023-09-30'
  }
];

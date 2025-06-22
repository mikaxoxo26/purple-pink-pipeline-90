
import { Project } from '@/types';
import { mockTeamMembers } from './teamMembers';

export const mockMajorProjects: Project[] = [
  {
    id: '6',
    title: 'Smart Campus Management System',
    description: 'Comprehensive campus management system integrating student services, facility management, and academic administration.',
    category: 'major',
    status: 'in-progress',
    priority: 'critical',
    startDate: '2023-08-01',
    endDate: '2024-12-31',
    progress: 45,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[3], mockTeamMembers[5], mockTeamMembers[8]],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
    budget: 150000,
    milestones: [
      { id: '13', title: 'Phase 1 - Student Portal', description: 'Complete student portal development', dueDate: '2024-01-31', completed: true, completedAt: '2024-01-28' },
      { id: '14', title: 'Phase 2 - Faculty Dashboard', description: 'Develop faculty management dashboard', dueDate: '2024-06-30', completed: false },
      { id: '15', title: 'Phase 3 - Admin Panel', description: 'Complete administrative functions', dueDate: '2024-10-31', completed: false }
    ],
    createdAt: '2023-07-15',
    updatedAt: '2024-02-28'
  },
  {
    id: '7',
    title: 'E-Learning Platform with AI Tutoring',
    description: 'Advanced e-learning platform featuring AI-powered personalized tutoring, adaptive learning paths, and comprehensive analytics.',
    category: 'major',
    status: 'in-progress',
    priority: 'high',
    startDate: '2023-09-01',
    endDate: '2024-08-31',
    progress: 35,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[6], mockTeamMembers[9], mockTeamMembers[10]],
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'MongoDB', 'OpenAI API'],
    budget: 200000,
    milestones: [
      { id: '16', title: 'AI Model Development', description: 'Develop and train AI tutoring models', dueDate: '2024-03-31', completed: false },
      { id: '17', title: 'Learning Management System', description: 'Core LMS functionality', dueDate: '2024-05-31', completed: false }
    ],
    createdAt: '2023-08-15',
    updatedAt: '2024-03-01'
  },
  {
    id: '8',
    title: 'Healthcare Management Platform',
    description: 'Integrated healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
    category: 'major',
    status: 'planning',
    priority: 'critical',
    startDate: '2024-04-01',
    endDate: '2025-03-31',
    progress: 10,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[5], mockTeamMembers[11]],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'FHIR', 'AWS'],
    budget: 300000,
    milestones: [
      { id: '18', title: 'HIPAA Compliance Review', description: 'Ensure HIPAA compliance requirements', dueDate: '2024-05-31', completed: false },
      { id: '19', title: 'Core Development', description: 'Develop core healthcare modules', dueDate: '2024-10-31', completed: false }
    ],
    createdAt: '2024-03-01',
    updatedAt: '2024-03-15'
  },
  {
    id: '9',
    title: 'Supply Chain Analytics Dashboard',
    description: 'Advanced analytics dashboard for supply chain optimization with predictive modeling and real-time tracking.',
    category: 'major',
    status: 'testing',
    priority: 'high',
    startDate: '2023-06-01',
    endDate: '2024-05-31',
    progress: 85,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[6], mockTeamMembers[11]],
    technologies: ['Power BI', 'Python', 'Apache Spark', 'Kafka', 'Azure', 'ML.NET'],
    budget: 180000,
    milestones: [
      { id: '20', title: 'Data Pipeline', description: 'Complete data ingestion pipeline', dueDate: '2024-01-31', completed: true, completedAt: '2024-01-25' },
      { id: '21', title: 'Performance Testing', description: 'Complete performance testing', dueDate: '2024-04-30', completed: false }
    ],
    createdAt: '2023-05-15',
    updatedAt: '2024-03-10'
  }
];

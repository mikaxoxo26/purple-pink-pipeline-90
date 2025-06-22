
import { Project } from '@/types';
import { mockTeamMembers } from './teamMembers';

export const mockMiniProjects: Project[] = [
  {
    id: '1',
    title: 'Student Attendance Management System',
    description: 'A web-based application to track and manage student attendance with real-time reporting and analytics.',
    category: 'mini',
    status: 'in-progress',
    priority: 'medium',
    startDate: '2024-01-15',
    endDate: '2024-03-30',
    progress: 75,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[3], mockTeamMembers[4]],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    budget: 15000,
    milestones: [
      { id: '1', title: 'UI Design Complete', description: 'Complete the user interface design', dueDate: '2024-02-01', completed: true, completedAt: '2024-01-28' },
      { id: '2', title: 'Backend API Development', description: 'Develop REST APIs', dueDate: '2024-02-15', completed: true, completedAt: '2024-02-12' },
      { id: '3', title: 'Testing Phase', description: 'Complete testing and bug fixes', dueDate: '2024-03-15', completed: false }
    ],
    createdAt: '2024-01-10',
    updatedAt: '2024-02-20'
  },
  {
    id: '2',
    title: 'Library Management System',
    description: 'Digital library system with book cataloging, member management, and automated fine calculation.',
    category: 'mini',
    status: 'completed',
    priority: 'low',
    startDate: '2023-11-01',
    endDate: '2024-01-15',
    progress: 100,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[7]],
    technologies: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
    budget: 12000,
    milestones: [
      { id: '4', title: 'Database Design', description: 'Design and implement database schema', dueDate: '2023-11-15', completed: true, completedAt: '2023-11-12' },
      { id: '5', title: 'Core Features', description: 'Implement core library functions', dueDate: '2023-12-15', completed: true, completedAt: '2023-12-10' },
      { id: '6', title: 'Final Testing', description: 'Final testing and deployment', dueDate: '2024-01-10', completed: true, completedAt: '2024-01-08' }
    ],
    createdAt: '2023-10-25',
    updatedAt: '2024-01-15'
  },
  {
    id: '3',
    title: 'Online Quiz Platform',
    description: 'Interactive quiz platform with real-time scoring, timer functionality, and result analytics.',
    category: 'mini',
    status: 'planning',
    priority: 'medium',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    progress: 15,
    manager: mockTeamMembers[0],
    teamMembers: [mockTeamMembers[5], mockTeamMembers[7]],
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    budget: 18000,
    milestones: [
      { id: '7', title: 'Requirements Analysis', description: 'Gather and analyze requirements', dueDate: '2024-03-15', completed: false },
      { id: '8', title: 'System Architecture', description: 'Design system architecture', dueDate: '2024-03-30', completed: false }
    ],
    createdAt: '2024-02-15',
    updatedAt: '2024-02-28'
  },
  {
    id: '4',
    title: 'Expense Tracker App',
    description: 'Personal finance management app with budget tracking, expense categorization, and financial insights.',
    category: 'mini',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-02-01',
    endDate: '2024-04-15',
    progress: 60,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[6], mockTeamMembers[10]],
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    budget: 20000,
    milestones: [
      { id: '9', title: 'Mobile App Development', description: 'Develop mobile application', dueDate: '2024-03-01', completed: true, completedAt: '2024-02-28' },
      { id: '10', title: 'Data Visualization', description: 'Implement charts and analytics', dueDate: '2024-03-20', completed: false }
    ],
    createdAt: '2024-01-25',
    updatedAt: '2024-03-01'
  },
  {
    id: '5',
    title: 'Recipe Sharing Platform',
    description: 'Social platform for sharing and discovering recipes with rating system and cooking timer.',
    category: 'mini',
    status: 'testing',
    priority: 'low',
    startDate: '2024-01-01',
    endDate: '2024-03-15',
    progress: 90,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[7], mockTeamMembers[8]],
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
    budget: 16000,
    milestones: [
      { id: '11', title: 'Recipe Management', description: 'Complete recipe CRUD operations', dueDate: '2024-02-01', completed: true, completedAt: '2024-01-30' },
      { id: '12', title: 'User Testing', description: 'Conduct user testing sessions', dueDate: '2024-03-10', completed: false }
    ],
    createdAt: '2023-12-20',
    updatedAt: '2024-02-25'
  }
];

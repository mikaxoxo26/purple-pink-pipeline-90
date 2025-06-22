
import { Project } from '@/types';
import { mockTeamMembers } from './teamMembers';

export const mockRndProjects: Project[] = [
  {
    id: '10',
    title: 'Quantum Computing Simulation Framework',
    description: 'Research and development of quantum computing simulation framework for educational and research purposes.',
    category: 'rnd',
    status: 'in-progress',
    priority: 'high',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    progress: 55,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[7]],
    technologies: ['Python', 'Qiskit', 'NumPy', 'Jupyter', 'Docker'],
    budget: 250000,
    milestones: [
      { id: '22', title: 'Literature Review', description: 'Complete comprehensive literature review', dueDate: '2023-06-30', completed: true, completedAt: '2023-06-25' },
      { id: '23', title: 'Prototype Development', description: 'Develop initial prototype', dueDate: '2024-06-30', completed: false }
    ],
    createdAt: '2022-12-15',
    updatedAt: '2024-03-05'
  },
  {
    id: '11',
    title: 'Blockchain-based Identity Verification',
    description: 'Research on decentralized identity verification system using blockchain technology.',
    category: 'rnd',
    status: 'in-progress',
    priority: 'medium',
    startDate: '2023-07-01',
    endDate: '2024-06-30',
    progress: 40,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[5], mockTeamMembers[8]],
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'IPFS', 'React'],
    budget: 120000,
    milestones: [
      { id: '24', title: 'Blockchain Architecture', description: 'Design blockchain architecture', dueDate: '2024-01-31', completed: true, completedAt: '2024-01-28' },
      { id: '25', title: 'Smart Contract Development', description: 'Develop identity smart contracts', dueDate: '2024-04-30', completed: false }
    ],
    createdAt: '2023-06-15',
    updatedAt: '2024-02-20'
  },
  {
    id: '12',
    title: 'Machine Learning for Climate Prediction',
    description: 'Advanced ML models for climate pattern analysis and prediction using satellite data and weather stations.',
    category: 'rnd',
    status: 'planning',
    priority: 'critical',
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    progress: 20,
    manager: mockTeamMembers[2],
    teamMembers: [mockTeamMembers[1], mockTeamMembers[6]],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'GDAL'],
    budget: 400000,
    milestones: [
      { id: '26', title: 'Data Collection', description: 'Collect and preprocess climate data', dueDate: '2024-06-30', completed: false },
      { id: '27', title: 'Model Development', description: 'Develop prediction models', dueDate: '2024-12-31', completed: false }
    ],
    createdAt: '2023-12-01',
    updatedAt: '2024-03-01'
  },
  {
    id: '13',
    title: 'Edge Computing IoT Framework',
    description: 'Research on edge computing framework for IoT devices with focus on latency reduction and energy efficiency.',
    category: 'rnd',
    status: 'in-progress',
    priority: 'high',
    startDate: '2023-03-01',
    endDate: '2024-08-31',
    progress: 70,
    manager: mockTeamMembers[1],
    teamMembers: [mockTeamMembers[4], mockTeamMembers[10]],
    technologies: ['C++', 'Python', 'Kubernetes', 'MQTT', 'InfluxDB', 'Grafana'],
    budget: 180000,
    milestones: [
      { id: '28', title: 'Edge Architecture Design', description: 'Complete edge computing architecture', dueDate: '2023-12-31', completed: true, completedAt: '2023-12-28' },
      { id: '29', title: 'Performance Optimization', description: 'Optimize system performance', dueDate: '2024-06-30', completed: false }
    ],
    createdAt: '2023-02-15',
    updatedAt: '2024-03-08'
  }
];

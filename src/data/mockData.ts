
import { Project, TeamMember } from '@/types';

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@kscet.edu',
    role: 'Senior Project Manager',
    skills: ['Project Management', 'AI/ML', 'Research', 'Team Leadership'],
    currentProjects: ['1', '3', '8'],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c1?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@kscet.edu',
    role: 'Technical Lead',
    skills: ['Full Stack Development', 'DevOps', 'System Architecture', 'Mentoring'],
    currentProjects: ['2', '4', '12'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    email: 'emily.rodriguez@kscet.edu',
    role: 'Research Director',
    skills: ['Data Science', 'Machine Learning', 'Research Methodology', 'Statistical Analysis'],
    currentProjects: ['5', '9', '15'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james.wilson@kscet.edu',
    role: 'Senior Developer',
    skills: ['React', 'Node.js', 'Database Design', 'API Development'],
    currentProjects: ['1', '6', '11'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@kscet.edu',
    role: 'UI/UX Designer',
    skills: ['UI Design', 'UX Research', 'Prototyping', 'User Testing'],
    currentProjects: ['2', '7', '13'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'David Kumar',
    email: 'david.kumar@kscet.edu',
    role: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    currentProjects: ['3', '8', '14'],
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '7',
    name: 'Maria Garcia',
    email: 'maria.garcia@kscet.edu',
    role: 'Data Analyst',
    skills: ['Python', 'SQL', 'Data Visualization', 'Statistical Modeling'],
    currentProjects: ['4', '9', '16'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '8',
    name: 'Alex Brown',
    email: 'alex.brown@kscet.edu',
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'CSS', 'Mobile Development'],
    currentProjects: ['5', '10', '17'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '9',
    name: 'Sophie Davis',
    email: 'sophie.davis@kscet.edu',
    role: 'Backend Developer',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Database Design'],
    currentProjects: ['6', '11', '18'],
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '10',
    name: 'Robert Lee',
    email: 'robert.lee@kscet.edu',
    role: 'Quality Assurance',
    skills: ['Test Automation', 'Manual Testing', 'Performance Testing', 'Bug Tracking'],
    currentProjects: ['7', '12', '19'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '11',
    name: 'Jennifer Wang',
    email: 'jennifer.wang@kscet.edu',
    role: 'Mobile Developer',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    currentProjects: ['8', '13', '20'],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c1?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '12',
    name: 'Tom Anderson',
    email: 'tom.anderson@kscet.edu',
    role: 'Security Specialist',
    skills: ['Cybersecurity', 'Penetration Testing', 'Security Auditing', 'Compliance'],
    currentProjects: ['9', '14', '21'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

export const mockProjects: Project[] = [
  // Mini Projects
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
  },

  // Major Projects
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
  },

  // R&D Projects
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
  },

  // KSCST Projects (fixed category from "kscet" to "kscst")
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

  // Additional KSCST Projects
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


export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'member';
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  skills: string[];
  currentProjects: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'mini' | 'major' | 'rnd' | 'kscst';
  status: 'planning' | 'in-progress' | 'testing' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  progress: number;
  manager: TeamMember;
  teamMembers: TeamMember[];
  technologies: string[];
  budget?: number;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  completedAt?: string;
}

export interface ProjectStats {
  total: number;
  completed: number;
  inProgress: number;
  onHold: number;
  planning: number;
}

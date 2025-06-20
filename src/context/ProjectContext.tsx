
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, TeamMember, ProjectStats } from '@/types';
import { mockProjects, mockTeamMembers } from '@/data/mockData';

interface ProjectContextType {
  projects: Project[];
  teamMembers: TeamMember[];
  stats: ProjectStats;
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;
  getProjectsByCategory: (category: string) => Project[];
  getProjectStats: () => ProjectStats;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

const STORAGE_KEY = 'project-management-data';

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return {
        projects: data.projects || mockProjects,
        teamMembers: data.teamMembers || mockTeamMembers
      };
    }
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
  }
  return {
    projects: mockProjects,
    teamMembers: mockTeamMembers
  };
};

const saveToStorage = (projects: Project[], teamMembers: TeamMember[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      projects,
      teamMembers,
      lastUpdated: new Date().toISOString()
    }));
    console.log('Data saved to localStorage');
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const { projects: storedProjects, teamMembers: storedTeamMembers } = loadFromStorage();
    setProjects(storedProjects);
    setTeamMembers(storedTeamMembers);
  }, []);

  // Save to localStorage whenever projects or teamMembers change
  useEffect(() => {
    if (projects.length > 0) { // Only save if we have data loaded
      saveToStorage(projects, teamMembers);
    }
  }, [projects, teamMembers]);

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id 
          ? { ...project, ...updates, updatedAt: new Date().toISOString() }
          : project
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const addTeamMember = (memberData: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...memberData,
      id: Date.now().toString(),
    };
    
    setTeamMembers(prev => [...prev, newMember]);
  };

  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers(prev => 
      prev.map(member => 
        member.id === id ? { ...member, ...updates } : member
      )
    );
  };

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  const getProjectStats = (): ProjectStats => {
    return {
      total: projects.length,
      completed: projects.filter(p => p.status === 'completed').length,
      inProgress: projects.filter(p => p.status === 'in-progress').length,
      onHold: projects.filter(p => p.status === 'on-hold').length,
      planning: projects.filter(p => p.status === 'planning').length,
    };
  };

  const stats = getProjectStats();

  return (
    <ProjectContext.Provider value={{
      projects,
      teamMembers,
      stats,
      addProject,
      updateProject,
      deleteProject,
      addTeamMember,
      updateTeamMember,
      getProjectsByCategory,
      getProjectStats,
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

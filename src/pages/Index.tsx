
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProjects } from '@/context/ProjectContext';
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import ProjectTabs from '@/components/ProjectTabs';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import CreateProjectModal from '@/components/CreateProjectModal';
import DashboardStats from '@/components/DashboardStats';
import { Project } from '@/types';
import { TabsContent } from '@/components/ui/tabs';

const Index = () => {
  const { user, isLoading } = useAuth();
  const { getProjectsByCategory } = useProjects();
  const [activeTab, setActiveTab] = useState('mini');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  const handleCreateProject = () => {
    setIsCreateModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const currentProjects = getProjectsByCategory(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Header />
      <ProjectTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onCreateProject={handleCreateProject}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-poppins gradient-text mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-gray-600">
            Manage and monitor all your projects from this comprehensive dashboard.
          </p>
        </div>

        <DashboardStats />

        <div className="mb-6">
          <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4 capitalize">
            {activeTab === 'rnd' ? 'R&D Projects' : `${activeTab} Projects`}
          </h3>
          <p className="text-gray-600">
            {currentProjects.length} project{currentProjects.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {currentProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">📁</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              Start by creating your first project in this category.
            </p>
            <button
              onClick={handleCreateProject}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Create New Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedProject(null);
        }}
      />

      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Index;

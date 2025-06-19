
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProjects } from '@/context/ProjectContext';
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import ProjectTabs from '@/components/ProjectTabs';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import CreateProjectModal from '@/components/CreateProjectModal';
import EditProjectModal from '@/components/EditProjectModal';
import TeamMembersModal from '@/components/TeamMembersModal';
import DashboardStats from '@/components/DashboardStats';
import { Project } from '@/types';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const Index = () => {
  const { user, isLoading } = useAuth();
  const { getProjectsByCategory } = useProjects();
  const [activeTab, setActiveTab] = useState('mini');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleCreateProject = () => {
    setIsCreateModalOpen(true);
  };

  const handleViewTeamMembers = () => {
    setIsTeamModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center aurora-bg">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-white shadow-2xl"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const currentProjects = getProjectsByCategory(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <Header />
      <ProjectTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onCreateProject={handleCreateProject}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold font-playfair gradient-text mb-2 animate-float">
              Welcome back, {user.name}!
            </h2>
            <p className="text-gray-600 text-lg font-poppins">
              Manage and monitor all your projects from this comprehensive dashboard.
            </p>
          </div>
          <Button
            onClick={handleViewTeamMembers}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-playfair font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-4 h-4 mr-2" />
            View Team Members
          </Button>
        </div>

        <DashboardStats />

        <div className="mb-6">
          <h3 className="text-3xl font-bold font-playfair text-gray-900 mb-4 capitalize">
            {activeTab === 'rnd' ? 'R&D Projects' : activeTab === 'kscst' ? 'KSCST Projects' : `${activeTab} Projects`}
          </h3>
          <p className="text-gray-600 font-poppins text-lg">
            {currentProjects.length} project{currentProjects.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {currentProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center animate-float">
              <span className="text-4xl">📁</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-playfair">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6 font-poppins">
              Start by creating your first project in this category.
            </p>
            <button
              onClick={handleCreateProject}
              className="bg-gradient-to-r from-purple-600 via-magenta-glow-500 to-amber-sun-500 hover:from-purple-700 hover:via-magenta-glow-600 hover:to-amber-sun-600 text-white px-8 py-4 rounded-lg font-semibold font-playfair transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                onEditProject={handleEditProject}
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

      <EditProjectModal
        project={selectedProject}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProject(null);
        }}
      />

      <TeamMembersModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
    </div>
  );
};

export default Index;

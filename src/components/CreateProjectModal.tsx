import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProjects } from '@/context/ProjectContext';
import { Project, TeamMember } from '@/types';
import { toast } from '@/hooks/use-toast';
import { Calendar, DollarSign, FolderPlus, Users } from 'lucide-react';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose }) => {
  const { addProject, teamMembers } = useProjects();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    startDate: '',
    endDate: '',
    managerId: '',
    teamMemberIds: [] as string[],
    technologies: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const manager = teamMembers.find(m => m.id === formData.managerId) || teamMembers[0];
    const selectedTeamMembers = teamMembers.filter(m => formData.teamMemberIds.includes(m.id));

    const newProject: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> = {
      title: formData.title,
      description: formData.description,
      category: formData.category as any,
      status: 'planning',
      priority: formData.priority as any || 'medium',
      startDate: formData.startDate || new Date().toISOString().split('T')[0],
      endDate: formData.endDate || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      progress: 0,
      manager,
      teamMembers: selectedTeamMembers,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
      budget: formData.budget ? parseInt(formData.budget) : undefined,
      milestones: [
        {
          id: '1',
          title: 'Project Kickoff',
          description: 'Initial project setup and team briefing',
          dueDate: formData.startDate || new Date().toISOString().split('T')[0],
          completed: false
        }
      ]
    };

    addProject(newProject);
    
    toast({
      title: "Success!",
      description: "Project created successfully",
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      priority: '',
      startDate: '',
      endDate: '',
      managerId: '',
      teamMemberIds: [],
      technologies: '',
      budget: '',
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text flex items-center">
            <FolderPlus className="w-6 h-6 mr-2" />
            Create New Project
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Project Title *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter project title"
                className="border-2 focus:border-pink-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Category *
              </Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="border-2 focus:border-pink-400">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="mini">Mini Project</SelectItem>
                  <SelectItem value="major">Major Project</SelectItem>
                  <SelectItem value="rnd">R&D Project</SelectItem>
                  <SelectItem value="kscst">KSCST Project</SelectItem>
                  <SelectItem value="funded">Funded Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter project description"
              rows={3}
              className="border-2 focus:border-pink-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-sm font-medium">
                Priority
              </Label>
              <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                <SelectTrigger className="border-2 focus:border-pink-400">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager" className="text-sm font-medium">
                Project Manager
              </Label>
              <Select value={formData.managerId} onValueChange={(value) => setFormData({ ...formData, managerId: value })}>
                <SelectTrigger className="border-2 focus:border-pink-400">
                  <SelectValue placeholder="Select manager" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {teamMembers.filter(m => m.role.toLowerCase().includes('manager') || m.role.toLowerCase().includes('lead')).map((manager) => (
                    <SelectItem key={manager.id} value={manager.id}>
                      {manager.name} - {manager.role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-sm font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="border-2 focus:border-pink-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-sm font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                End Date
              </Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="border-2 focus:border-pink-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies" className="text-sm font-medium">
              Technologies
            </Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="e.g., React, Node.js, MongoDB (comma-separated)"
              className="border-2 focus:border-pink-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-medium flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              Budget
            </Label>
            <Input
              id="budget"
              type="number"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="Enter budget amount"
              className="border-2 focus:border-pink-400"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-2 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              <FolderPlus className="w-4 h-4 mr-2" />
              Create Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
